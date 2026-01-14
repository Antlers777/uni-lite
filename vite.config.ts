import { ConfigEnv, defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";

async function getPlugins() {
    const UnoCss = await import("unocss/vite").then((i) => i.default);
    return [uni(), UnoCss()];
}

export default defineConfig(async ({ command, mode }: ConfigEnv) => {
    const root = process.cwd();
    const env = loadEnv(mode, root);

    const plugins = await getPlugins();

    return {
        base: process.env.UNI_PLATFORM === "h5" ? "/" : "",
        root,
        plugins,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        server: {
            host: "0.0.0.0",
            port: 5174,
            open: true,
            hmr: true,
            proxy: {
                "/api": {
                    target: env.VITE_APP_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""), // 不可以省略rewrite
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    // 取消sass废弃API的报警
                    silenceDeprecations: [
                        "legacy-js-api",
                        "color-functions",
                        "import",
                    ],
                },
            },
        },
        build: {
            cssCodeSplit: false, // 仅 H5 拆分 CSS，小程序不拆分
            minify: "terser",
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
    };
});
