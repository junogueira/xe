<template>
  <div
    class="flex flex-row items-center gap-4 rounded-[20px] border border-red-100 bg-red-50 p-4 pr-5 lg:flex-col lg:rounded-4xl lg:p-12"
  >
    <div class="rounded-full bg-red-100 p-3 text-red-300 lg:p-5">
      <IconWeatherError class="size-9 lg:size-15" />
    </div>
    <div class="flex flex-col gap-1 lg:text-center">
      <span class="text-xl lg:text-[32px]">Ops.</span>
      <span class="text-xe-gray text-xs">Something went wrong. Please try again.</span>
    </div>
  </div>
</template>
