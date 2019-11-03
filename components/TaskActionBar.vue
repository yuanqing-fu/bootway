<template>
  <div class="task-action-bar">
    <div class="action-group">
      <slot name="switch-panel"></slot>
    </div>
    <div class="action-group">
      <slot name="action-panel"></slot>
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
  position: relative;
  left: -40px;
  top: 0;
}

.task-action-bar .action {
  width: 20px;
  height: 40px;
  background-color: darkorange;
  cursor: pointer;
}
</style>
