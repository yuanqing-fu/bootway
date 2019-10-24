<template>
  <div class="task-unit">
    <div class="task-type-bar">{{ task.important }} {{ task.urgent }}</div>
    <div class="day-task-view">
      <div class="day-task">
        <div class="day-task-inner">
          {{ task.task_name }} {{ new Date(task.start_date) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {},
  methods: {}
}
</script>
