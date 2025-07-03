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
      <li
        v-for="city in cities"
        :key="city.name"
        class="bg-xe-blue flex flex-row items-center gap-1 rounded-[10px] px-6 py-2 leading-tight whitespace-nowrap"
      >
        <span>{{ city.name }}</span>
        <span>{{ city.emoji }}</span>
      </li>
    </ul>
  </div>
</template>
