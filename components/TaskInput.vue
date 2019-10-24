<template>
  <div class="task-input-bar">
    <input
      ref="taskInput"
      v-model.trim="taskValues.name"
      type="text"
      placeholder="今天想做什么？"
      class="task-input-element"
      @keyup.enter="sendTaskChangeEvent"
      @focus="showTip = true"
      @blur="showTip = false"
    />
    <div class="task-type-radios">
      <label
        ><input
          v-model="taskValues.type"
          type="radio"
          name="taskTypeRadio"
          value="classC"
          @change="taskTypeChange"
      /></label>
      <label
        ><input
          v-model="taskValues.type"
          type="radio"
          name="taskTypeRadio"
          value="classA"
          @change="taskTypeChange"
      /></label>
      <label
        ><input
          v-model="taskValues.type"
          type="radio"
          name="taskTypeRadio"
          value="classD"
          @change="taskTypeChange"
      /></label>
      <label
        ><input
          v-model="taskValues.type"
          type="radio"
          name="taskTypeRadio"
          value="classB"
          @change="taskTypeChange"
      /></label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    taskValues: {
      type: Object,
      default() {
        return {
          name: '',
          type: 'classD'
        }
      }
    }
  },
  data() {
    return {
      showTip: false
    }
  },
  methods: {
    sendTaskChangeEvent() {
      if (!this.taskValues.name) {
        return
      }
      this.$emit('taskChange')
    },
    taskTypeChange() {
      this.$refs.taskInput.focus()
    }
  }
}
</script>
<style>
.task-input-bar {
  flex: 0 0 40px;
  display: flex;
  flex-direction: row;
}

.task-input-bar .task-input-element {
  border: none;
  background-color: green;
}
</style>
