const getPrimaryColor = () => {
    // @ts-ignore
    return (
        (typeof process !== 'undefined'
            ? process.env.VITE_APP_THEME
            : import.meta.env.VITE_APP_THEME) || '#61affe'
    )
}

export const themeColors = {
    // 基础语义色
    primary: getPrimaryColor(),
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',

    // 丰富常用的中性色 (用于文字、边框、背景)
    white: '#FFFFFF',
    black: '#000000',
    gray1: '#8E8E93', // 辅助文字
    gray2: '#AEAEB2', // 失效文字
    gray3: '#C7C7CC', // 占位文字
    gray4: '#D1D1D6', // 分割线
    gray5: '#E5E5EA', // 浅边框
    gray6: '#F2F2F7', // 浅背景

    // 特殊背景色
    background: '#F8FAFC',
    slate: '#1E293B'
}

export const unocssTheme = {
    colors: {
        ...themeColors
    }
}
