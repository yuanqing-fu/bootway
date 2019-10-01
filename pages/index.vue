<template>
  <div class="day-page">
    <div class="header">Header</div>
    <div class="day-task-container">
      <div class="task-type-unit">
        <div class="task-type-bar">重要</div>
        <div class="day-task-view">
          <div class="day-task"><div class="day-task-inner">task 1</div></div>
          <div class="day-task"><div class="day-task-inner">task 2</div></div>
          <div class="day-task"><div class="day-task-inner">task 3</div></div>
          <div class="day-task"><div class="day-task-inner">task 4</div></div>
        </div>
      </div>

      <div class="task-type-unit">
        <div class="task-type-bar">有趣</div>
        <div class="day-task-view">
          <div class="day-task"><div class="day-task-inner">task 1</div></div>
          <div class="day-task"><div class="day-task-inner">task 2</div></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="fun-area"></div>
      <div class="day-time-bar">123</div>
    </div>
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
:root {
  --leftbar-size: 30px;
}

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
  flex-direction: column;
}

.day-task-container .task-type-unit {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
}

.day-task-container .task-type-unit .task-type-bar {
  flex: 0 0 var(--leftbar-size);
  background-color: blueviolet;
}

.day-task-container .task-type-unit .day-task-view {
  flex: 1 0 auto;
  background-color: green;
  display: flex;
  flex-direction: column;
}

.day-task-container .task-type-unit .day-task {
  flex: 0 0 30px;
  position: relative;
}

.day-task-container .task-type-unit .day-task .day-task-inner {
  position: absolute;
  top: 0;
  left: 100px;
}

.footer {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
}

.footer .fun-area {
  flex: 0 0 var(--leftbar-size);
}

.footer .day-time-bar {
  flex: 1 0 auto;
  background-color: #3b8070;
}
</style>
