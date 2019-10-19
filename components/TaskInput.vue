<template>
  <div class="task-input-bar">
    <input
      ref="taskInput"
      v-model.trim="taskValues.name"
      type="text"
      placeholder="今天想做什么？"
      class=""
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
  data() {
    return {
      showTip: false
    }
  },
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
<style></style>
