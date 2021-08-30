<template>
  <div>
    <search />
    <greeter-header></greeter-header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '../components/Search.vue';
import GreeterHeader from '../components/Header.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Search,
    GreeterHeader
  }
});
</script>
