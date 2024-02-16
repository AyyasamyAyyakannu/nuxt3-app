<template>
	<div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl py-20">
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
			<span v-for="post in data?.items" :key="post.id">
				<PostCard :post="post" />
			</span>
		</div>
	</div>
</template>

<script setup>
  import {useNuxtApp} from "nuxt/app";
  const {$client} = useNuxtApp()
  const data =await $client.getEntries({
    skip: 10,
    limit: 10,
	'content_type': 'caseStudies',
    order: 'sys.createdAt',
  })
</script>
