<template>
  <section>
    <header-date></header-date>
    <header-greeter></header-greeter>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderDate from './HeaderDate.vue';
import HeaderGreeter from './HeaderGreeter.vue';

export default Vue.extend({
  components: { HeaderDate, HeaderGreeter },
});
</script>

<style>
section {
  border-bottom: 0px solid var(--color-text-acc);
  z-index: 1;
}
</style>
