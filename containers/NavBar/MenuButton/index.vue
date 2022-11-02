<template>
    <NuxtLink :to="to" :href="href" class="px-4 py-1 leading-normal transition duration-150 ease-in-out bg-white bg-opacity-0 hover:bg-opacity-10 rounded-3xl text-base cursor-pointer"><slot /></NuxtLink>
</template>

<script setup>
defineProps({
    to: String,
    href: String,
})
</script>