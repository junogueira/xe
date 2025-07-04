<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center gap-4 rounded-[10px] border border-red-100 bg-red-50 px-8 py-12 lg:rounded-[30px]"
  >
    <div class="rounded-full bg-red-100 p-3 text-red-300 lg:p-5">
      <IconWeatherError class="size-10" />
    </div>
    <div class="flex flex-col">
      <span class="text-xl">Ops.</span>
      <span class="text-xe-gray text-lg">Something went wrong. Please try again.</span>
    </div>
  </div>
</template>
