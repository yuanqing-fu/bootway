<template>
  <div class="task-action-bar">
    <div class="action-group">
      <slot name="switch-panel"></slot>
    </div>
  </div>
</template>
<style lang="scss">
.task-action-bar {
  position: fixed;
  top: 20%;
  left: 10px;
  display: flex;
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
  color: $color-11;
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
  color: $color-1;
}

.task-action-bar .action.compact input:checked + label {
  color: $color-3;
}

.task-action-bar .action input:checked + label:hover {
  filter: brightness(0.8);
}

.task-action-bar .action.classB input:checked + label {
  opacity: 0.8;
}

.task-action-bar .action.classC input:checked + label {
  opacity: 0.6;
}

.task-action-bar .action.classD input:checked + label {
  opacity: 0.4;
}
</style>
