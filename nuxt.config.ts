// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "~/assets/css/tailwind.css",
    ],
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
})
