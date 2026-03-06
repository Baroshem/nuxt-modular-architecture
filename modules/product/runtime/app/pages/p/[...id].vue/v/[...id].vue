<script setup lang="ts">
const { params } = useRoute()
const { fetch, product } = useProduct()

await fetch()
</script>

<template>
  <div>
    <p>Product ID {{ params.id }} with Variant ID: {{ params.variantId }}</p>

    <ProductCard />
    <ProductDetails />

    {{ product }}
  </div>
</template>