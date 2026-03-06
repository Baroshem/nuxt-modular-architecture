export const useListing = () => {
  const listing = useState<unknown>('listing', () => null)

  const fetch = async () => {
    const result = await new Promise((resolve) => {
      resolve({ name: 'Listing' })
    })

    listing.value = result

    return result
  }

  return {
    listing,
    fetch
  }
}