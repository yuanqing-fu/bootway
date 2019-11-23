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

.v--modal .vue-dialog-buttons .vue-dialog-button:first-child {
  background: $color-1-lighter;
  color: $color-4;
  font-weight: bold;
}

.v--modal .vue-dialog-buttons .vue-dialog-button:first-child:hover {
  filter: brightness(95%);
}

@media screen and (max-width: 900px) {
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
    transform: scale(0.65);
  }
}
</style>
