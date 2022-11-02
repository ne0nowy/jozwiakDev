// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "~/assets/css/tailwind.css",
    ],
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
    ],
    components: {
        global: true,
        dirs: [
            '~/components',
             '~/containers',
        ]
    },
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
