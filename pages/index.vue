<template>
  <div class="day-page">
    <div class="header">Header</div>
    <div class="day-task-container">
      <task-type v-for="task in taskList" :key="task.task_id"></task-type>
    </div>
    <div class="footer">
      <div class="fun-area"></div>
      <div class="day-time-bar">123</div>
    </div>
  </div>
</template>

<script>
import TaskType from '~/components/TaskType.vue'

export default {
  components: {
    TaskType
  },
  data() {
    return {
      // tasks: [1, 2, 3]
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios.get(`http://api.test.com/tasks`)
    // eslint-disable-next-line no-console
    console.log(response.data)
    return { taskList: response.data }
  }
}
</script>
