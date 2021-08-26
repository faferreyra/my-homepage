<template>
  <Nuxt />
</template>

<style>
html {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-text-size-adjust: none;
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
  width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  module-spacing: 3vh;
}

/* TEXT STYLES */

h1,
h2 {
  font-weight: 300;
  margin: 0;
  padding: 0;
  text-align: left;
}

h2,
h3,
h4 {
  text-transform: uppercase;
}

h1 {
  font-size: 4em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 16px;
  height: 30px;
}

h3 {
  font-size: 20px;
  font-weight: 900;
  height: 10px;
}

h4 {
  font-size: 1.1em;
  font-weight: 400;
  height: 10px;
}

/* SECTIONS */

#header{
	border-bottom: 0px solid var(--color-text-acc);
	z-index: 1;
}

</style>
