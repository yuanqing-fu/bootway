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
  margin: 0 24px;
}

.form-main {
  width: 100%;
}

.form-main form {
  margin: 20px 0 10px 0;
}

.form-main form fieldset {
  margin-bottom: 10px;
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

.form-main .submit {
  width: 100%;
  height: 46px;
  background-color: #db4c3f;
  color: white;
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
</style>
