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
      <input
        id="importantTypeCheckbox"
        ref="importantCheck"
        type="checkbox"
        :checked="imporant"
        @change="taskTypeChange"
      />
      <label class="important" for="importantTypeCheckbox"></label>
      <input
        id="urgentTypeCheckbox"
        ref="urgentCheck"
        type="checkbox"
        :checked="urgent"
        @change="taskTypeChange"
      />
      <label class="important" for="urgentTypeCheckbox"></label>
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
  computed: {
    imporant() {
      return (
        this.taskValues.type === 'classA' || this.taskValues.type === 'classC'
      )
    },
    urgent() {
      return (
        this.taskValues.type === 'classA' || this.taskValues.type === 'classB'
      )
    }
  },
  methods: {
    sendTaskChangeEvent() {
      if (!this.taskValues.name) {
        return
      }
      this.$emit('taskChange')
    },
    getClassType(important, urgent) {
      if (important) {
        if (urgent) {
          return 'classA'
        } else {
          return 'classC'
        }
      } else if (urgent) {
        return 'classB'
      } else {
        return 'classD'
      }
    },
    taskTypeChange(event) {
      this.taskValues.type = this.getClassType(
        this.$refs.importantCheck.checked,
        this.$refs.urgentCheck.checked
      )
      this.$refs.taskInput.focus()
    }
  }
}
</script>
<style>
.task-input-bar {
  border-top: 3px solid darkorange;
  flex: 0 0 73px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.task-input-bar .task-input-element {
  font-size: 16px;
  border: 2px solid lightgray;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  max-width: 500px;
  padding: 0 10px;
  margin-right: 10px;
}

.task-input-bar .task-input-element:focus {
  border: 2px solid cornflowerblue;
  box-shadow: 0 0 10px cornflowerblue;
}

.task-type-radios {
  display: flex;
  position: relative;
  width: 40px;
  height: 45px;
  flex-wrap: wrap;
  overflow: hidden;
  align-content: space-between;
}

.task-type-radios input + label {
  display: inline-block;
  flex: 0 0 auto;
  width: 40px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  background: lightgray;
  border-radius: 5px;
  padding: 2px;
  transition: all 0.4s ease;
}

.task-type-radios input + label:after {
  position: relative;
  border-radius: 100px;
  background: #fff;
  content: '';
  display: block;
  width: 50%;
  height: 100%;
  left: 0;
  transition: all 0.2s ease;
}

.task-type-radios input:checked + label {
  background: darkorange;
}

.task-type-radios input:checked + label:after {
  left: 50%;
}

.task-type-radios input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
