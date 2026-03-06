<script setup lang="ts">
const { params } = useRoute()
const { fetch, product } = useProduct()

await fetch()
</script>

<template>
  <div>
    <p>Product with ID: {{ params.id }}</p>

    <ProductCard />
    <ProductDetails />

    {{ product }}
  </div>
</template>