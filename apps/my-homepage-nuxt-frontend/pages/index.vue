<template>
  <div v-themer>
    <main class="container fade">
      <Nuxt />
      <section id="search">
        <input
          id="keywords"
          name="keywords"
          type="text"
          size="50"
          spellcheck="false"
          autofocus="true"
          class="form-control"
        />
      </section>

      <header-section></header-section>

      <applications-list></applications-list>

      <bookmarks-list></bookmarks-list>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderSection from '../components/HeaderSection.vue';
import ApplicationsList from '../components/applications/List.vue';
import BookmarksList from '../components/bookmarks/List.vue';

export default Vue.extend({
  components: { HeaderSection, ApplicationsList, BookmarksList },
});
</script>

<style>
.container {
  align-items: stretch;
  justify-items: stretch;
  margin-top: 5vh;
}

@keyframes fadeseq {
  100% {
    opacity: 1;
  }
}

.fade {
  animation: fadeseq 0.3s forwards;
}

.fade:nth-child(2) {
  animation-delay: 0.4s;
}
</style>
