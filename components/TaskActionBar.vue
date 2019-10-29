<template>
  <div class="task-action-bar">
    <div class="action-group">
      <div class="action">重要</div>
      <div class="action">紧急</div>
      <div class="action">删除</div>
    </div>
  </div>
</template>
<style>
.task-action-bar {
  width: 50px;
  position: fixed;
  top: 125px;
  display: flex;
}

.task-action-bar .action-group {
  position: absolute;
  left: -20px;
  top: 0;
}

.task-action-bar .action {
  width: 20px;
  height: 40px;
  background-color: darkorange;
  cursor: pointer;
}
</style>
