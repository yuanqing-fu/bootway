<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  overflow: hidden;
}

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.middle-container {
  background-color: orange;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>
