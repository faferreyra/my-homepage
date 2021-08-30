<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  moz-box-sizing: border-box;
  webkit-box-sizing: border-box;
  webkit-text-size-adjust: none;
}

html,
body {
  background-color: var(--color-background);
  color: var(--color-text-pri);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: auto;
  letter-spacing: -0.012em;
  margin: 0;
  padding: 0;
  webkit-font-smoothing: antialiased;
  width: 100vw;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  moz-box-sizing: inherit;
  webkit-box-sizing: inherit;
}

:root {
  module-spacing: 3vh;
}
</style>
