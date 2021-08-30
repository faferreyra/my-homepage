<template>
  <section>
    <h3>Applications</h3>
    <div class="apps-loop"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  height: 10px;
  font-weight: 900;
}

.apps-loop {
  border-bottom: 0px solid var(--color-text-acc);
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 64px;
  padding-bottom: var(--module-spacing);
}
</style>
