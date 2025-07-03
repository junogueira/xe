<script setup lang="ts"></script>

<template>
  <AppSkeleton
    class="bg-xe-gray/20 flex flex-row items-center gap-4 rounded-[20px] p-4 pr-5 lg:flex-col lg:rounded-4xl lg:p-12"
  >
    <AppSkeleton class="size-15 shrink-0 rounded-full lg:size-25" />
    <div class="flex w-full flex-col gap-2 lg:text-center">
      <AppSkeleton class="h-6 w-2/3 lg:mx-auto lg:h-10" />
      <AppSkeleton class="h-3 w-1/3 lg:mx-auto lg:w-1/3" />
    </div>
    <div class="ml-auto lg:mt-16 lg:ml-0">
      <AppSkeleton class="h-32 w-25" />
    </div>
  </AppSkeleton>
</template>
