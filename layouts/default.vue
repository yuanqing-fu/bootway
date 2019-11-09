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
}

.form-main form input:focus {
  border: 2px solid $color-3;
  padding: 0 12px;
}

.form-main a {
  color: $color-3;
  font-size: 13px;
}

.form-main .form-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-main .message {
  color: $color-1;
  font-size: 13px;
  display: inline-block;
  height: 25px;
  line-height: 25px;
}

.logo-text {
  font-size: 30px;
  font-family: Verdana, sans-serif;
  color: $color-11;
  font-weight: bold;
  font-style: italic;
  text-shadow: 0px 0px 0 rgb(-59, -59, -59), 1px 1px 0 rgb(-314, -314, -314),
    2px 2px 1px rgba(0, 0, 0, 0.05), 2px 2px 1px rgba(0, 0, 0, 0.5),
    0px 0px 1px rgba(0, 0, 0, 0.2);
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
  font-size: 21px;
  font-weight: bold;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}

.middle-container .middle-container-inner.form-middle-container-inner {
  max-width: 410px;
  display: flex;
  align-items: center;
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
</style>
