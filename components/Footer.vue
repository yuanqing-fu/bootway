<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>
<style>
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
