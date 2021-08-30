<template>
  <h2>{{ date }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    locale: {
      type: String,
      default: 'en-US'
    }
  },
  computed: {
    date: function() {
      let currentDate = new Date();
      return currentDate.toLocaleDateString(this.locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 16px;
	height: 30px;
  text-transform: uppercase;
}
</style>
