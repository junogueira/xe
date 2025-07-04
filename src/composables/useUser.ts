const currentUser = ref<string>('Guest')

export const useUser = () => {
  const setCurrentUser = (name: string) => {
    currentUser.value = name
  }

  return {
    user: readonly(currentUser),
    setCurrentUser,
  }
}
