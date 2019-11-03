<template>
  <div class="task-action-bar">
    <div class="action-group">
      <slot name="switch-panel"></slot>
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
  width: 35px;
  height: 35px;
  background-color: darkorange;
  cursor: pointer;
}

.task-action-bar .action label {
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.task-action-bar .action input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
