<template>
  <div
    class="task-input-bar"
    @mouseover="showSliderTooltip = true"
    @mouseout="showSliderTooltip = false"
  >
    <div
      v-show="showSliderTooltip"
      class="date-slider-wrapper"
      @mouseover="showSliderTooltip = true"
    >
      <vue-slider
        v-model.lazy="start_date"
        :drag-on-click="true"
        :tooltip="'always'"
        :use-keyboard="true"
        :min="0"
        :max="86400"
        :interval="300"
        :tooltip-formatter="formatted_start_date"
        @drag-end="sliderDragEnd"
      />
    </div>
    <div class="task-type-radios">
      <input
        id="importantTypeCheckbox"
        ref="importantCheck"
        type="checkbox"
        :checked="important"
        @change="taskTypeChange"
      />
      <label
        v-tooltip.auto="'重要'"
        class="important"
        for="importantTypeCheckbox"
      ></label>
      <input
        id="urgentTypeCheckbox"
        ref="urgentCheck"
        type="checkbox"
        :checked="urgent"
        @change="taskTypeChange"
      />
      <label
        v-tooltip.auto="'紧急'"
        class="urgent"
        for="urgentTypeCheckbox"
      ></label>
    </div>
    <input
      ref="taskInput"
      v-model.trim="taskValues.name"
      type="text"
      placeholder="今天想做什么？"
      class="task-input-element"
      autofocus
      @keyup.enter="sendTaskChangeEvent"
      @mouseover="taskInputMouseover"
    />
    <button class="submit-task" @click="sendTaskChangeEvent">
      <fa :icon="['fas', 'arrow-alt-circle-up']" />
    </button>
  </div>
</template>
<script>
// import component
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'

export default {
  components: {
    VueSlider
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
  data() {
    return {
      showSliderTooltip: false,
      startDraggingTimeOut: undefined,
      start_date:
        this.taskValues.start_date.getHours() * 3600 +
        this.taskValues.start_date.getMinutes() * 60
    }
  },
  computed: {
    important() {
      return (
        this.taskValues.type === 'classA' || this.taskValues.type === 'classC'
      )
    },
    urgent() {
      return (
        this.taskValues.type === 'classA' || this.taskValues.type === 'classB'
      )
    },
    formatted_start_date() {
      return this.$moment
        .utc(this.$moment.duration(this.start_date, 'seconds').asMilliseconds())
        .format('HH:mm')
    }
  },
  methods: {
    focusInput() {
      this.$refs.taskInput.focus()
    },
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
      this.focusInput()
    },
    taskInputMouseover() {
      this.focusInput()
    },
    sliderDragEnd() {
      this.taskValues.start_date.setHours(
        this.$moment.duration(this.start_date, 'seconds').hours()
      )
      this.taskValues.start_date.setMinutes(
        this.$moment.duration(this.start_date, 'seconds').minutes()
      )

      this.$refs.taskInput.focus()
    }
  }
}
</script>
<style>
.date-slider-wrapper {
  width: 100%;
  position: absolute;
  top: -11px;
  left: 0;
  padding: 0 50px;
  pointer-events: auto;
}

.date-slider-wrapper .vue-slider-rail {
  background-color: transparent;
}

.date-slider-wrapper .vue-slider-process {
  background-color: transparent;
}

.task-input-bar {
  border-top: 3px solid darkorange;
  flex: 0 0 73px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}

.task-input-bar .task-input-element {
  font-size: 13px;
  border: 2px solid lightgray;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  max-width: 500px;
  padding: 0 10px;
  margin-left: 10px;
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
  transform: rotate(-90deg);
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

.task-type-radios input + label.urgent {
  background: #ddd;
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

.task-type-radios input:checked + label.important {
  background: red;
}

.task-type-radios input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}
.submit-task {
  background: none;
  border: 0;
  padding: 0;
  margin-left: 10px;
  font-size: 35px;
  color: orange;
  cursor: pointer;
}
.submit-task:hover {
  color: darkorange;
}
</style>
