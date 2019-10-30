<template>
  <div class="header">
    <nuxt-link class="" to="/">
      首页
    </nuxt-link>
    <nuxt-link class="" to="/tasks">
      任务
    </nuxt-link>
    <nuxt-link class="" to="/login">
      登录
    </nuxt-link>
    <nuxt-link class="" to="/register">
      注册
    </nuxt-link>
    <slot name="test"></slot>
    <client-only>
      <slot name="dateselect"></slot>
    </client-only>
  </div>
</template>
<style>
.header {
  flex: 0 0 auto;
  background-color: #7f828b;
  height: 65px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
