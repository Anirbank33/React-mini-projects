export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Anirbank33')

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`)
  }

  return response.json()
}
