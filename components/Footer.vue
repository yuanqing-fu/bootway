<template>
  <div class="footer">
    <slot />
  </div>
</template>
<style>
.footer {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
}

.footer .day-time-bar {
  flex: 1 0 auto;
  background-color: #3b8070;
}
</style>
