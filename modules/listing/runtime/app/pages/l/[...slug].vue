<script setup lang="ts">
const { params } = useRoute()
const { listing, fetch } = useListing()

await fetch()
</script>

<template>
  <div>
    <p>Listing for a category with slug: {{ params.slug }}</p>

    <CategoriesList />
    <ListingFilters />

    {{ listing }}
  </div>
</template>