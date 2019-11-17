<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="info-a">
        <a
          class="email"
          title="kofbossyagami@163.com"
          href="mailto:kofbossyagami@163.com"
          >&#9993;</a
        >
        <nuxt-link class="" to="/">
          关于我
        </nuxt-link>
      </div>
      <div class="copyright">
        &copy; 2019 Bootway.com 版权所有
      </div>
      <div class="info-b">
        <a href="http://www.beian.miit.gov.cn/">蜀ICP备19032658号</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer {
  padding: 0 10px;
  flex: 0 0 40px;
  display: flex;
  flex-direction: row;
  background-color: $color-2;
  color: $color-4;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.footer .footer-inner {
  height: 100%;
  max-width: 1200px;
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.footer a {
  color: $color-4;
  font-size: 12px;
  &:hover {
    filter: brightness(90%);
  }
}

.footer .info-a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    margin-right: 10px;
    &.email {
      font-size: 18px;
    }
  }
}

.footer .info-b a {
  color: $color-12;
}

.footer .copyright {
  color: $color-11;
}
</style>
