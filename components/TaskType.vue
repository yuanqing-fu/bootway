<template>
  <div>
    <div class="task-group-name">
      <span>{{ taskByTypes.name }}</span>
      <span>总：{{ taskByTypes.length }} 完成：{{ completedTasksLength }}</span>
    </div>
    <div class="task-group-unit">
      <task-unit
        v-for="task in taskByTypes"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      ></task-unit>
    </div>
  </div>
</template>

<script>
import TaskUnit from '~/components/TaskUnit'

export default {
  name: 'TaskType',
  components: {
    TaskUnit
  },
  props: {
    taskByTypes: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    completedTasksLength() {
      return this.taskByTypes.filter((el) => el.done === 1).length
    }
  },
  methods: {}
}
</script>
