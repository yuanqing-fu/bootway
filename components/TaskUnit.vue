<template>
  <div class="task-unit">
    <div class="task-type-bar">{{ task.important }} {{ task.urgent }}</div>
    <div class="day-task-bar">
      <div class="day-task">
        {{ task.task_name }}
        {{ $moment(task.start_date).format('h:mm') }}
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
