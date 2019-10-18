<template>
  <div class="task-type-unit" :class="classObject">
    <div class="task-type-bar">{{ task.important }}</div>
    <div class="day-task-view">
      <div class="day-task">
        <div class="day-task-inner" :style="styleObject">
          {{ task.task_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskType',
  props: {
    task: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: ''
    }
  },
  data() {
    return {
      classObject: {
        'important-urgent': true,
        'important-not-urgent': true,
        'not-important-urgent': true,
        'not-important-not-urgent': true
      },
      styleObject: {
        left: this.getLeftPosition(new Date(this.task.start_date)) + '%'
      }
    }
  },
  methods: {
    // a computed getter
    getLeftPosition(taskStartDate) {
      return (
        (taskStartDate - new Date(taskStartDate).setHours(0, 0, 0, 0)) /
        1000 /
        864
      )
    }
  }
}
</script>
