<template>
  <div class="wrapper about-page">
    <day-header class="home-header" />
    <div class="middle-container about-middle">
      <div class="about-middle-inner">
        <section>
          <h1>网站架构</h1>
          <div class="sub">
            <h3>后端</h3>
            <div class="info">Koa.js</div>
            <h3>前端</h3>
            <div class="info">Nuxt.js</div>
            <h3>描述</h3>
            <div class="info">
              该网站全部由我独立完成，内容有：
              <ul>
                <li
                  v-for="(content, index) in jobsDone"
                  :key="`job-done-${index}`"
                >
                  {{ content }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h1>关于我</h1>
          <div class="sub">
            <h3>介绍</h3>
            <div class="info">
              富有激情的前端开发程序员，对开发，产品设计有着自己的理解。能独立打造全栈应用。兴趣广泛，热爱读书、健身、音乐和弹吉他。
            </div>
            <h3>技术栈</h3>
            <ul>
              <li v-for="(skill, index) in skills" :key="`job-done-${index}`">
                {{ skill }}
              </li>
            </ul>
            <h3>联系我</h3>
            <div class="info contact">
              付元卿
              <ul>
                <li><b>邮箱</b> kofbossyagami@163.com</li>
                <li><b>微信</b> kofbossyagami</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <home-footer />
  </div>
</template>
<script>
import DayHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'

export default {
  components: {
    DayHeader,
    HomeFooter
  },
  data() {
    return {
      jobsDone: [
        '概念设计（主题；功能等）',
        '页面设计（网站结构；主色、配色的选取；Logo 设计；主页动画设计）',
        '开发语言、框架选型（Vue、Nuxt、Node.js、Koa）',
        '数据库选型、表设计（MySQL）',
        '后端接口 API 设计、开发',
        '前端页面、功能的实现',
        '网站安全（Helmet.js）',
        '适配移动端浏览器',
        '远程 Linux 服务器开发环境搭建，项目部署并上线'
      ],
      skills: ['JavaScript, HTML5, CSS3', 'Vue.js, Nuxt.js', 'Node.js, Koa.js']
    }
  }
}
</script>
<style lang="scss">
.about-middle-inner {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  section {
    padding: 20px;

    h1 {
      background-color: $color-7;
      position: sticky;
      top: 0;
      text-align: center;
      border-bottom: 2px solid $color-1;
      font-size: 25px;
      line-height: 73px;
      color: $color-3;
    }
    .sub {
      padding: 0 10px;
    }
    h2,
    h3 {
      margin-top: 15px;
    }
    .info {
      font-size: 16px;
      color: $color-12;
      padding: 10px 0 10px 17px;
      max-width: 900px;
      line-height: 2rem;
      text-align: justify;
      &:before {
        content: '\27A5';
        color: $color-3;
        margin-right: 10px;
      }
    }
    ul {
      margin: 10px 0 0 22px;
      li {
        font-weight: 700;
        padding: 5px 0;
        font-size: 16px;
        color: $color-12;
        &:before {
          content: '\27B1';
          color: $color-1;
          margin-right: 10px;
        }
      }
    }
    .info.contact ul li {
      font-weight: normal;
    }
  }
}
</style>
