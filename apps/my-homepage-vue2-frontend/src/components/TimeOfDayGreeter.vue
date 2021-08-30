<template>
  <h1>{{ greeting }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    greeting: () => {
      let currentTime = new Date();
      let greet = Math.floor(currentTime.getHours() / 6);
      switch (greet) {
        case 0:
          return 'Good night!';
        case 1:
          return 'Good morning!';
        case 2:
          return 'Good afternoon!';
        case 3:
          return 'Good evening!';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4em;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  text-align: left;
}
</style>
