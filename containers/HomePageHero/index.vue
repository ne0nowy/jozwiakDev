<template>
    <div class="min-h-screen">
        <div class="absolute w-full h-screen top-0 z-0 opacity-90">
            <nuxt-img src="/images/hero-background.png" fit="cover" class="w-full h-screen bg-mask"/>
        </div>
        <NavBar class="relative"/>
        <div class="relative container mx-auto text-center md:pt-10">
            <h1 class="text-[4rem] font-bold">Full stack developer</h1>
            <p class="w-3/5 mx-auto text-white/80 mt-4 tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laborum harum sunt illum molestias earum quas ut obcaecati consequuntur porro eos quisquam provident, at impedit dolore quibusdam est maxime nisi!</p>
        </div>
    </div>
</template>

<style scoped>
.bg-mask{
    -webkit-mask-image: -webkit-gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>