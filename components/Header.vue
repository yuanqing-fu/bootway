<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-links">
        <nuxt-link class="" to="/">
          首页
        </nuxt-link>
        <nuxt-link class="" to="/tasks">
          任务
        </nuxt-link>
      </div>
      <div class="header-actions">
        <span class="user-actions">
          <span v-if="user">{{ user.email }}</span>
          <nuxt-link v-if="!user" class="" to="/login">
            登录
          </nuxt-link>
          <nuxt-link v-if="!user" class="" to="/register">
            注册
          </nuxt-link>
          <button v-if="user" class="logout" @click="logOut">
            <fa :icon="['fas', 'door-open']" class="signout-icon-svg" />
          </button>
        </span>
        <span class="other-actions">
          <client-only>
            <slot name="dateselect"></slot>
          </client-only>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user ? this.$store.state.user : null
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('reset').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style lang="scss">
.header {
  flex: 0 0 auto;
  background-color: $color-2;
  color: $color-4;
  height: 65px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2);
  z-index: 200;
}

.header .header-inner {
  height: 100%;
  max-width: 1022px;
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.header.task-header {
  background-color: $color-2;
}

.header,
.header a,
.header button {
  color: $color-4;
}
.header .header-links {
  flex: 1 0 auto;
}

.header .header-links a {
  margin-right: 24px;
}

.header .header-actions {
  font-size: 13px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
}

.header .other-actions {
  display: none;
  flex-direction: row;
  padding-right: 13px;
}

.header.with-other-actions .other-actions {
  display: flex;
}

.header .user-actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    margin-left: 10px;
  }
}

.header .logout {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  margin: 0 0 0 10px;
  &:hover {
    filter: brightness(90%);
  }
}
</style>
