<template>
  <div class="task-input-bar">
    <div class="date-slider-wrapper">
      <vue-slider
        v-model.lazy="start_date"
        :drag-on-click="true"
        :tooltip="'always'"
        :dot-size="16"
        :use-keyboard="true"
        :min="0"
        :max="86100"
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
        v-tooltip.auto="getTooltipOption('重要')"
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
        v-tooltip.auto="getTooltipOption('紧急')"
        class="urgent"
        for="urgentTypeCheckbox"
      ></label>
    </div>
    <input
      ref="taskInput"
      v-model.trim="taskValues.name"
      maxlength="255"
      type="text"
      placeholder="今天想做什么？"
      class="task-input-element"
      @keyup.enter="sendTaskChangeEvent"
      @mouseover="taskInputMouseover"
    />
    <button
      class="submit-task"
      :class="{ 'no-input-text': taskValues.name === '' }"
      @click="sendTaskChangeEvent"
    >
      <fa :icon="['fas', 'arrow-alt-circle-up']" />
    </button>
    <button class="cancel-task" @click="sendCancelTaskEditEvent">
      &#10006;
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
    setStartDate() {
      this.start_date =
        this.taskValues.start_date.getHours() * 3600 +
        this.taskValues.start_date.getMinutes() * 60
    },
    sendTaskChangeEvent() {
      if (!this.taskValues.name) {
        this.focusInput()
        return
      }
      this.$emit('taskChange')
    },
    sendCancelTaskEditEvent() {
      this.$emit('cancelTaskEdit')
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
      if (!this.$device.isMobile) {
        this.focusInput()
      }
    },
    sliderDragEnd() {
      this.taskValues.start_date.setHours(
        this.$moment.duration(this.start_date, 'seconds').hours()
      )
      this.taskValues.start_date.setMinutes(
        this.$moment.duration(this.start_date, 'seconds').minutes()
      )
      if (!this.$device.isMobile) {
        this.focusInput()
      }
    },
    getTooltipOption(content) {
      if (content === '重要') {
        content = this.important ? '重要' : '不重要'
      } else {
        content = this.urgent ? '紧急' : '不紧急'
      }
      return {
        content,
        hideOnTargetClick: false,
        trigger: this.$device.isMobile ? 'click' : 'hover'
      }
    }
  }
}
</script>
<style lang="scss">
.task-input-bar {
  z-index: 200;
  border-top: 3px solid $color-11;
  flex: 0 0 73px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  transition: all 0.2s ease;
  &:hover {
    border-color: $color-2;
  }
}

.task-input-bar .task-input-element {
  font-size: 13px;
  border: 2px solid $color-11;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  max-width: 615px;
  padding: 0 10px;
  margin-left: 13px;
  transition: all 0.2s ease;
}

.task-input-bar .task-input-element:focus {
  border: 2px solid $color-3;
  box-shadow: 0 0 5px $color-9;
}

.date-slider-wrapper {
  width: 100%;
  position: absolute;
  top: -11px;
  left: 0;
  padding: 0 50px;
  /*pointer-events: auto;*/
  display: none;
}

.task-input-bar:hover .date-slider-wrapper {
  display: block;
}

.task-input-bar.edit .date-slider-wrapper {
  display: block;
}

.date-slider-wrapper .vue-slider-rail {
  background-color: transparent;
}

.date-slider-wrapper .vue-slider-process {
  background-color: transparent;
}

.task-type-radios {
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 40px;
  height: 47px;
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
  background: $color-11;
  border-radius: 5px;
  padding: 2px;
  transition: all 0.4s ease;
}

.task-type-radios input + label.urgent {
  background: rgba($color-3-rgb-r, $color-3-rgb-g, $color-3-rgb-b, 0.5);
}

.task-type-radios input + label:after {
  position: relative;
  border-radius: 50%;
  background: $color-4;
  content: '';
  display: block;
  width: 50%;
  height: 100%;
  left: 0;
  transition: all 0.2s ease;
}

.task-type-radios input:checked + label {
  background: rgba($color-3-rgb-r, $color-3-rgb-g, $color-3-rgb-b, 1);
}

.task-type-radios input:checked + label:after {
  left: 50%;
}

.task-type-radios input + label.important {
  background: rgba($color-1-rgb-r, $color-1-rgb-g, $color-1-rgb-b, 0.5);
}

.task-type-radios input:checked + label.important {
  background: rgba($color-1-rgb-r, $color-1-rgb-g, $color-1-rgb-b, 1);
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
  cursor: pointer;
  &.no-input-text {
    color: $color-11;
  }
  &:hover {
    color: $color-1;
  }
}

.cancel-task {
  background: none;
  border: 0;
  padding: 0;
  margin-left: 10px;
  font-size: 23px;
  font-weight: bold;
  color: $color-1-lighter;
  cursor: pointer;
  display: none;
  &:hover {
    filter: brightness(90%);
  }
}

.task-input-bar.edit .cancel-task {
  display: inline-block;
}

.vue-slider-dot-tooltip-inner {
  border-color: $color-3;
  background-color: $color-3;
  padding: 1px 5px;
}
</style>
