<template>
  <div
    class="flex flex-row items-center gap-4 rounded-[10px] border border-red-100 bg-red-50 px-4 py-3 lg:flex-col lg:rounded-[30px] lg:px-8 lg:py-4"
  >
    <IconWeatherError class="size-12 text-red-300 lg:mx-auto" />
    <div class="flex flex-col lg:items-center">
      <span class="text-xe-dark-blue text-lg lg:text-xl">Ops.</span>
      <span class="text-xe-gray text-xs lg:text-center">
        Something went wrong. Please try again.
      </span>
    </div>
  </div>
</template>
