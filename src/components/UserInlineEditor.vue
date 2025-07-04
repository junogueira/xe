<script setup lang="ts">
const { user, setCurrentUser } = useUser()

const name = ref(user.value)
const isEditing = ref(false)

const input = ref<HTMLInputElement | null>(null)

const handleEdit = () => {
  isEditing.value = true
  name.value = user.value
  nextTick(() => input.value?.focus())
}

const onSave = () => {
  if (name.value.trim()) {
    setCurrentUser(name.value.trim())
  }

  isEditing.value = false
}

const onCancel = () => {
  name.value = user.value
  isEditing.value = false
}
</script>

<template>
  <span
    v-if="!isEditing"
    @click="handleEdit"
    @keydown.enter="handleEdit"
    class="hover:text-xe-gray focus-visible:text-xe-gray cursor-pointer underline decoration-dashed decoration-2 underline-offset-6 transition-colors duration-300 focus-visible:outline-0"
    tabindex="0"
  >
    {{ user }}
  </span>
  <input
    v-else
    v-model="name"
    name="user-name"
    @blur="onSave"
    @keydown.enter="onSave"
    @keydown.esc="onCancel"
    class="border-xe-dark-blue inline-block border-b-2 px-1 focus:outline-none"
    ref="input"
  />
</template>
