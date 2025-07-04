<script setup lang="ts">
const greeting = computed(() => {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'Good morning'
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon'
  } else {
    return 'Good evening'
  }
})
</script>

<template>
  <div class="mx-auto max-w-[1132px] space-y-12 px-4 py-6 md:py-14">
    <header>
      <h1 class="text-2xl font-semibold text-[#192E4E] md:text-5xl">
        <span>{{ greeting }},&nbsp;</span>
        <UserInlineEditor /> 🌞
      </h1>
    </header>
    <main class="text-xe-dark-blue text-lg font-semibold">
      <RouterView />
    </main>
  </div>
</template>
