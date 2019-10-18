<template>
  <div class="wrapper task-day-page">
    <day-header></day-header>
    <div class="middle-container day-task-container">
      <task-type
        v-for="task in taskList"
        :key="task.task_id"
        :task="task"
      ></task-type>
    </div>
    <day-footer class="day-footer">
      <template>
        <div class="fun-area"></div>
        <div class="day-time-bar">123</div>
      </template>
    </day-footer>
  </div>
</template>

<script>
import TaskType from '~/components/TaskType.vue'
import DayHeader from '~/components/Header.vue'
import DayFooter from '~/components/Footer.vue'

export default {
  components: {
    DayHeader,
    DayFooter,
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

<style>
:root {
  --leftbar-size: 30px;
}

.day-task-container {
}

.day-task-container .task-type-unit {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
}

.day-task-container .task-type-unit .task-type-bar {
  flex: 0 0 var(--leftbar-size);
  background-color: blueviolet;
}

.day-task-container .task-type-unit .day-task-view {
  flex: 1 0 auto;
  background-color: green;
  display: flex;
  flex-direction: column;
}

.day-task-container .task-type-unit .day-task {
  flex: 0 0 30px;
  position: relative;
}

.day-task-container .task-type-unit .day-task .day-task-inner {
  font-size: 13px;
  position: absolute;
  top: 6px;
  left: 0;
  border-radius: 5px;
  background-color: orange;
  padding: 0 10px;
}
</style>
