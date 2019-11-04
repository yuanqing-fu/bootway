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
  cursor: pointer;
  border-radius: 50%;
  margin-bottom: 10px;
  font-size: 34px;
}

.task-action-bar .action.compact {
  margin: 0 0 20px 3px;
  font-size: 27px;
}

.task-action-bar .action label {
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: lightgray;
  border-radius: 50%;
  user-select: none;
  transition: all 0.4s ease;
}

.task-action-bar .action input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.task-action-bar .action input:checked + label {
  color: darkorange;
}

.task-action-bar .action.classA input:checked + label {
  color: red;
}

.task-action-bar .action.classB input:checked + label {
  color: lightskyblue;
}

.task-action-bar .action.classC input:checked + label {
  color: orchid;
}

.task-action-bar .action.classD input:checked + label {
  color: yellowgreen;
}
</style>
