<template>
  <AppSkeleton
    class="bg-xe-gray/20 flex flex-row items-center gap-4 rounded-[10px] px-4 py-3 lg:flex-col lg:gap-6 lg:rounded-[30px] lg:px-8 lg:py-4"
  >
    <AppSkeleton class="size-12 rounded-full" />
    <div class="flex w-full flex-col gap-1 lg:items-center">
      <AppSkeleton class="h-6 w-full" />
      <AppSkeleton class="h-4 w-2/3" />
    </div>
    <AppSkeleton class="h-6 w-1/3" />
  </AppSkeleton>
</template>
