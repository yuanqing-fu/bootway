<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
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
  background: darkorange;
  border-radius: 30px;
}

.middle-container::-webkit-scrollbar-track {
  background: black;
}

.middle-container .middle-container-inner {
  max-width: 680px;
  width: 100%;
  min-width: 300px;
  margin: 0 24px;
  position: relative;
}

.form-main {
  width: 100%;
}

.form-main form {
  margin: 20px 0 10px 0;
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
  border: 1px solid #ddd;
  width: 100%;
  height: 46px;
  border-radius: 5px;
  padding: 0 13px;
}

.form-main form input:focus {
  border: 2px solid cornflowerblue;
  padding: 0 12px;
}

.form-main a {
  color: #db4c3f;
  font-size: 13px;
}

.form-main .form-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-text {
  font-size: 30px;
  font-family: Verdana, sans-serif;
  color: #c4c4c4;
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
  color: #73809c;
  font-weight: 500;
}

.form-main .form-top .form-top-r .actions + .actions {
  margin-left: 14px;
}

.form-main .form-top .form-top-r a:hover {
  color: #1f4271;
}

.form-main .form-top .form-top-r .active {
  color: #0096ff;
  font-size: 14px;
  font-weight: 500;
}

.form-main .submit {
  width: 100%;
  height: 46px;
  background-color: #db4c3f;
  color: white;
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
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 5px;
}

.check-label:hover input ~ .checkmark {
  background-color: #ccc;
}

.check-label input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: '';
  position: absolute;
}

.check-label input:checked ~ .checkmark:after {
  display: block;
}

.check-label .checkmark:after {
  left: 7px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
