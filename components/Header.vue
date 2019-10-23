<template>
  <div class="header">
    <nuxt-link class="" to="/">
      Home
    </nuxt-link>
    <nuxt-link class="" to="/task">
      Task
    </nuxt-link>
    <nuxt-link class="" to="/login">
      Log in
    </nuxt-link>
    <slot name="test"></slot>
  </div>
</template>
<style>
.header {
  flex: 0 0 auto;
  background-color: #7f828b;
  height: 44px;
}
</style>
