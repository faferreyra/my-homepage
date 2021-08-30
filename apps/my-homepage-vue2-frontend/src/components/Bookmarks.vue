<template>
  <section id="apps">
    <h3>Bookmarks</h3>
    <div class="bookmarks">
      {{ bookmarks }}
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    bookmarks: function () {
      return this.$store.state.bookmarks.bookmarks;
    },
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  height: 10px;
  font-weight: 900;
}

.bookmarks {
  display: grid;
  flex-wrap: nowrap;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}
</style>
