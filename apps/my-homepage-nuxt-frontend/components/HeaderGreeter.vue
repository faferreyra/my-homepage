<template>
  <h1>{{ greet }}</h1>
</template>

<script lang="ts">
  export default {
    computed: {
      greet: () => {
        const currentTime = new Date();
        const greet = Math.floor(currentTime.getHours() / 6);
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
      }
    }
  }
</script>
