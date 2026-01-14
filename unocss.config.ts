import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetApplet, transformerApplet } from 'unocss-applet'
import { unocssTheme } from './src/styles/theme.ts'
import { loadEnv } from 'vite'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

// 获取环境变量
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd())
const primaryColor = env.VITE_APP_THEME || '#61affe'

export default {
    presets: [
        // https://github.com/MellowCo/unocss-preset-weapp
        presetWeapp(),
        // attributify autocomplete
        presetWeappAttributify(),
        // 基础预设，专门针对小程序优化
        presetApplet(),
        // 图标预设
        presetIcons({
            scale: 1.2,
            warn: true,
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle'
            }
        })
    ],
    theme: {
        colors: {
            ...unocssTheme.colors,
            primary: primaryColor
        }
    },
    shortcuts: [
        {
            'border-base': 'border border-gray-500_10',
            center: 'flex justify-center items-center'
        },
        {
            'bg-primary': 'bg-primary',
            'text-primary': 'text-primary',
            'border-primary': 'border-primary'
        }
    ],

    transformers: [
        // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
        transformerAttributify(),

        // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
        transformerClass(),
        transformerDirectives(),
        transformerVariantGroup(),
        transformerApplet()
    ]
}
