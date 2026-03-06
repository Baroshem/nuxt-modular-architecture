<script setup lang="ts">
const { query } = useRoute()
const { results, fetch } = useSearch()

await fetch()
</script>

<template>
  <div>
    <p>Search results for query: {{ query.search }}</p>

    <SearchResults />

    {{ results }}
  </div>
</template>