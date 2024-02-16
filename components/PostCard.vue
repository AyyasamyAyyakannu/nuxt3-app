<template>
  <div>
    <NuxtLink :to="`/${props.post.sys.id}`" class="group h-48 md:h-64 xl:h-80 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
      <div class="h-40">
        <img :src="props.post.fields.heroBannerImage.fields.file.url" class="h-full w-full object-cover" />
      </div>
      <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
      <div class="relative p-4 mt-auto">
        <h2 class="text-white text-sm font-semibold transition duration-100 mb-2"> {{ props.post.fields.heroTitle }} </h2>
        <span class="text-indigo-300 text-xs font-semibold">Read more</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props =  defineProps({post: Object})
</script>
