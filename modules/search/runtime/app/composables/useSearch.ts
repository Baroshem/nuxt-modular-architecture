export const useSearch = () => {
  const results = useState<unknown>('results', () => null)

  const fetch = async () => {
    const result = await useFetch('/api/route')

    results.value = result.data.value

    return result
  }

  return {
    results,
    fetch
  }
}