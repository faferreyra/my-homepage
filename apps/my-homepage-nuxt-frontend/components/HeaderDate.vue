<template>
  <h2>{{ date }}</h2>
</template>

<script lang="ts">
  export default {
    props: {
      locale: { type: String, default: 'en-US' },
    },
    computed: {
      date() {
        const currentDate = new Date();
        return currentDate.toLocaleDateString(this.locale, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }
  }
</script>
