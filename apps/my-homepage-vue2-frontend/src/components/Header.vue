<template>
  <section class="header mb-2">
    <date-greeter></date-greeter>
    <time-of-day-greeter></time-of-day-greeter>
    <b-button>Hello</b-button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import TimeOfDayGreeter from './TimeOfDayGreeter.vue';
import DateGreeter from './DateGreeter.vue';
export default Vue.extend({
  components: {
    TimeOfDayGreeter,
    DateGreeter
  }
});

</script>

<style scoped lang="scss">

.header {
  border-bottom: 0px solid var(--color-text-acc);
	z-index: 1;
}

</style>
