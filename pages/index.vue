<template>
  <div class="day-page">
    <div class="header">Header</div>
    <div class="day-task-container">
      <div class="task-type-bar"></div>
      <div class="day-task-view"></div>
    </div>
    <div class="day-time-bar">123</div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //
  // }
}
</script>

<style>
body {
  overflow: hidden;
}

.day-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  flex: 0 0 auto;
  background-color: #7f828b;
  height: 44px;
}

.day-task-container {
  background-color: orange;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  display: flex;
}

.day-task-container .task-type-bar {
  flex: 0 0 30px;
  background-color: blueviolet;
}

.day-task-container .day-task-view {
  flex: 1 0 auto;
  background-color: green;
}

.day-time-bar {
  flex: 0 0 auto;
  background-color: #3b8070;
}
</style>
