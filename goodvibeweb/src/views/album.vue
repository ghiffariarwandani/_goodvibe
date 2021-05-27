<template>
  <div class="small-container">
    <p> ALBUM </p>
  </div>
</template>

<script>

export default ({
  mounted() {
    this.$store.dispatch('fetchAlbum');
  },
})
</script>


<style>

</style>