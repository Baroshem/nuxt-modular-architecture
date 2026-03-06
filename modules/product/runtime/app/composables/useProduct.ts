export const useProduct = () => {
  const product = useState<unknown>('product', () => null)

  const fetch = async () => {
    const result = await new Promise((resolve) => {
      resolve({ name: 'Product' })
    })

    product.value = result

    return result
  }

  return {
    product,
    fetch
  }
}