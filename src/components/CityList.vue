<script setup lang="ts">
const cities = [
  { name: 'Denver', emoji: '🏔' },
  { name: 'Rio de Janeiro', emoji: '⛱️' },
  { name: 'Madrid', emoji: '💃' },
  { name: 'Japan', emoji: '🍣' },
  { name: 'Australia', emoji: '🐨' },
]
</script>

<template>
  <div class="flex">
    <ul class="flex flex-row flex-nowrap gap-2 overflow-x-auto">
      <li v-for="city in cities" :key="city.name"
        class="flex flex-row whitespace-nowrap items-center gap-1 px-6 py-2 rounded-[10px] bg-xe-blue leading-tight">
        <span>{{ city.name }}</span>
        <span>{{ city.emoji }}</span>
      </li>
    </ul>
  </div>
</template>