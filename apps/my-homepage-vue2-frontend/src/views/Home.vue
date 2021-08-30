<template>
  <div>
    <search />
    <greeter-header></greeter-header>
    <applications></applications>
    <bookmarks></bookmarks>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '../components/Search.vue';
import GreeterHeader from '../components/Header.vue';
import Applications from '../components/Applications.vue';
import Bookmarks from '../components/Bookmarks.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Search,
    GreeterHeader,
    Applications,
    Bookmarks
  }
});
</script>
