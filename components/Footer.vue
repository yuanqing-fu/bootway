<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="info-a">
        <!--        <span class="wechat-wrapper">-->
        <!--          <img class="wechat" src="~/assets/img/wechat.png" />-->
        <!--          <img class="qr-code" src="~/assets/img/wechat-qrcode.png" />-->
        <!--        </span>-->
        <!--        <a-->
        <!--          class="email"-->
        <!--          target="_top"-->
        <!--          title="kofbossyagami@163.com"-->
        <!--          href="mailto:kofbossyagami@163.com"-->
        <!--          >&#9993;</a-->
        <!--        >-->
        <nuxt-link to="/about">关于</nuxt-link>
        <!--        <span class="contact">-->
        <!--          联系我-->
        <!--          <div class="info">-->
        <!--            <ul>-->
        <!--              <li><b>微信</b> kofbossyagami</li>-->
        <!--              <li><b>Email</b> kofbossyagami@163.com</li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </span>-->
      </div>
      <div class="copyright">&copy; 2019 Bootway.com <span>版权所有</span></div>
      <div class="info-b">
        <a target="_blank" href="http://www.beian.miit.gov.cn/"
          >蜀ICP备19032658号</a
        >
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010602001021"
          ><img src="~/assets/img/beian.png" />川公网安备51010602001021号</a
        >
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
}

.footer .wechat-wrapper {
  display: inline-block;
  height: 16px;
  margin-right: 10px;
  position: relative;

  .wechat {
    height: 100%;
    filter: grayscale(1) brightness(1.5);

    &:hover {
      filter: grayscale(0) brightness(1);
    }
  }

  .qr-code {
    display: none;
    position: absolute;
    top: -210px;
    left: 0;
    max-width: none;
    width: 200px;
    height: 200px;
  }

  &:hover {
    .qr-code {
      display: inline-block;
    }
  }
}

.footer .contact {
  position: relative;
  display: inline-block;
  cursor: pointer;
  .info {
    cursor: text;
    display: none;
    background: $color-7;
    border-radius: 5px;
    border: 1px solid $color-9;
    position: absolute;
    top: -71px;
    left: 0;
    padding: 20px;
    color: $color-3;
    li {
      white-space: nowrap;
      b {
        color: $color-6;
        margin-right: 3px;
      }
    }
  }
  &:hover .info {
    display: inline-block;
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

.footer .info-b {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  a {
    color: $color-12;
    margin-left: 5px;
    img {
      height: 15px;
      vertical-align: -3px;
      margin-right: 1px;
    }
  }
}

.footer .copyright {
  color: $color-11;
  white-space: nowrap;
}
</style>
