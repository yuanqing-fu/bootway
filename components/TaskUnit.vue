<template>
  <div class="task-unit">
    <div class="task-status">
      <label class="check-label">
        <input class="check-input" type="checkbox" name="task-status" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="task-name">{{ task.task_name }}</div>
    <span class="task-start-date">{{
      $moment(task.start_date).format('hh:mm')
    }}</span>
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
