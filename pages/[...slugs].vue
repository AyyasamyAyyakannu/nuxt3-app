<template>
  <main class="relative" v-if="data">
    <div class="relative px-6 lg:px-8 hero" :style="'background-image: url('+data.fields.heroBannerImage.fields.file.url+')'">
      <div class="relative mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="rounded-full py-1 px-3 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {{ $route.params.slugs[0] }}
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {{ data.fields.heroTitle  }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-white">
            {{ data.fields.heroDescription }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="container m-auto px-4">
        <div class="relative mx-auto max-w-4xl py-20" v-html="objToHtml(data.fields.mainContent)"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import {useNuxtApp} from "nuxt/app";
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  definePageMeta({
    layout: "custom",
  });

  const route = useRoute()
  const slug = route.params.slugs[0];
  const {$client} = useNuxtApp()
  const {data} = await useAsyncData(slug,()=> $client.getEntry(slug));
  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, next) => `<h3 class="text-3xl font-extrabold tracking-tight text-slate-900">${next(node.content)}</h3>`,
      [BLOCKS.PARAGRAPH]: (node, next) => `<p class="text-base leading-7 text-gray-700">${next(node.content)}</p>`,
      [BLOCKS.LIST_ITEM]: (node, next) => `<li class="mb-4">${next(node.content)}</li>`
    }
  }
  function objToHtml(objData){
    return documentToHtmlString(objData, options)
  }
</script>

<style>
  .hero{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }
  .hero::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  hr{
    opacity: 0;
    margin: 8px;
  }
</style>
