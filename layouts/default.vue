<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
button {
  color: $color-1;
}
button:hover {
  filter: brightness(90%);
}
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.middle-container {
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
}

@keyframes loadingRotate {
  100% {
    transform: rotate(1turn) scale(30);
  }
}

.loading-page {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 100;
  opacity: 0.7;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: calc(200%);
    height: calc(200%);
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient($color-1, $color-1),
      linear-gradient($color-2, $color-2), linear-gradient($color-3, $color-3);
    animation: loadingRotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
  }
}

.middle-container::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}

.middle-container::-webkit-scrollbar-thumb {
  background: $color-1;
  border-radius: 0;
}

.middle-container::-webkit-scrollbar-thumb:hover {
  background: $color-1-darker;
}

.middle-container::-webkit-scrollbar-track {
  background: $color-11;
}

.middle-container .middle-container-inner {
  max-width: 900px;
  width: 100%;
  min-width: 300px;
  margin: 0 24px 0 56px;
  position: relative;
  transition: all 0.2s ease;
}

.form-main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-main form {
  margin: 0 0 10px 0;
}

.form-main form fieldset {
  height: 71px;
}

.form-main form .label {
  display: block;
  margin: 0 0 4px;
  font-weight: bold;
}

.form-main form input {
  border: 1px solid $color-13;
  width: 100%;
  height: 46px;
  border-radius: 5px;
  padding: 0 13px;
  &:focus {
    border: 2px solid $color-3;
    padding: 0 12px;
  }
}

.form-main a {
  color: $color-3;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
}

.form-main .form-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-main .message {
  color: $color-1;
  font-size: 13px;
  height: 25px;
  line-height: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  span {
    flex: 1 1 auto;
  }
}

.logo-text {
  font-size: 23px;
  font-family: Verdana, sans-serif;
  color: $color-3;
  font-weight: bold;
}

.form-main .form-top .form-top-r {
  flex: 1 0 auto;
}

.form-main .form-top .form-top-r a {
  font-size: 14px;
  font-weight: 500;
}

.form-main .form-top .form-top-r .actions + .actions {
  margin-left: 14px;
}

.form-main .form-top .form-top-r a:hover {
  filter: brightness(80%);
}

.form-main .form-top .form-top-r .active {
  color: $color-1;
  font-size: 14px;
  font-weight: 500;
}

.form-main .submit {
  width: 100%;
  height: 46px;
  background-color: $color-1;
  color: $color-4;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}

.register-complete-info {
  font-size: 16px;
  color: $color-3;
  div {
    margin-bottom: 15px;
  }
  .email {
    color: $color-1;
  }
}

.middle-container .middle-container-inner.form-middle-container-inner {
  max-width: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-label {
  display: block;
  position: relative;
  height: 25px;
  cursor: pointer;
  user-select: none;
}

.check-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 15px;
  background-color: $color-9;
  border-radius: 3px;
  transition: all 0.2s ease;
}

.check-label:hover input ~ .checkmark {
  background-color: $color-11;
}

.check-label input:checked ~ .checkmark {
  background-color: $color-3;
}

.checkmark:after {
  content: '';
  position: absolute;
}

.check-label input:checked ~ .checkmark:after {
  display: block;
}

.check-label .checkmark:after {
  left: 6px;
  top: 2px;
  width: 4px;
  height: 10px;
  border: solid $color-4;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.vue-dialog div {
  box-sizing: border-box;
}
.vue-dialog .dialog-flex {
  width: 100%;
  height: 100%;
}
.vue-dialog .dialog-content {
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}
.vue-dialog .dialog-c-title {
  font-weight: 600;
  padding-bottom: 15px;
}
.vue-dialog .dialog-c-text {
}
.vue-dialog .vue-dialog-buttons {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}
.vue-dialog .vue-dialog-buttons-none {
  width: 100%;
  padding-bottom: 15px;
}
.vue-dialog-button {
  font-size: 12px !important;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
}
.vue-dialog-button:hover {
  background: rgba(0, 0, 0, 0.01);
}
.vue-dialog-button:active {
  background: rgba(0, 0, 0, 0.025);
}
.vue-dialog-button:not(:first-of-type) {
  border-left: 1px solid #eee;
}

.v--modal-block-scroll {
  overflow: hidden;
  width: 100vw;
}
.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 1;
}
.v--modal-overlay.scrollable {
  height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.v--modal-overlay .v--modal-background-click {
  width: 100%;
  min-height: 100%;
  height: auto;
}
.v--modal-overlay .v--modal-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.v--modal-overlay.scrollable .v--modal-box {
  margin-bottom: 2px;
}
.v--modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
}
.v--modal.v--modal-fullscreen {
  width: 100vw;
  height: 100vh;
  margin: 0;
  left: 0;
  top: 0;
}
.v--modal-top-right {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: all 0.2s;
}
.overlay-fade-enter,
.overlay-fade-leave-active {
  opacity: 0;
}
.nice-modal-fade-enter-active,
.nice-modal-fade-leave-active {
  transition: all 0.4s;
}
.nice-modal-fade-enter,
.nice-modal-fade-leave-active {
  opacity: 0;
  transform: translateY(-20px);
}

.v--modal .vue-dialog-buttons .vue-dialog-button:first-child {
  background: $color-1-lighter;
  color: $color-4;
  font-weight: bold;
}

.v--modal .vue-dialog-buttons .vue-dialog-button:first-child:hover {
  filter: brightness(95%);
}

@media screen and (max-width: 824px) {
  .middle-container {
    overflow-x: hidden;
  }
  .home-middle-inner {
    width: auto !important;
  }

  .scene-wrapper .intro {
    width: 100%;
    height: auto !important;
  }

  .scene {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 500px) {
  .scene {
    transform: scale(0.65);
    position: relative;
    top: -16px;
  }

  .task-groups .task-group-unit {
    padding: 5px 0 !important;
  }

  .home-link {
    width: 109px !important;
  }

  .middle-container {
    .middle-container-inner {
      margin: 0 10px;
    }
  }

  .scene-wrapper {
    position: relative;
    top: -50px;
    .intro {
      position: relative;
      top: -87px;
      background: none !important;
      h1 {
        margin-bottom: 30px !important;
      }
    }
  }

  .try-btn {
    margin-top: 27px !important;
  }

  .sidebar-menu-button {
    display: inline-block !important;
  }
  .task-action-bar {
    align-items: flex-start !important;
    left: -46px !important;
    width: 46px;
    top: 65px !important;
    bottom: 73px !important;
    background-color: $color-7;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    padding-top: 33px;
  }

  .sidebar-mode .task-action-bar {
    left: 0 !important;
  }

  .sidebar-mode .middle-container .middle-container-inner {
    margin: 0 10px 0 57px !important;
  }

  .home-link {
    top: 3px !important;
  }
  .middle-container::-webkit-scrollbar {
    width: 3px !important;
    height: 3px !important;
  }

  .task-groups.compact .task-group-unit::-webkit-scrollbar {
    width: 2px !important;
    height: 2px !important;
  }

  .alertDialog.v--modal-overlay .v--modal-box {
    width: 300px !important;
    left: auto !important;
    margin: 0 auto !important;
  }

  .task-groups .task-group-name .name > span {
    padding: 0 20px !important;
  }

  .task-unit {
    padding: 5px 0 !important;
  }
}
</style>
