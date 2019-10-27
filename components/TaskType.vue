<template>
  <div>
    <div class="task-group-name">{{ taskByTypes.name }}</div>
    <div class="task-group-unit">
      <task-unit
        v-for="task in taskByTypes"
        :key="task.id"
        :task="task"
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
  computed: {},
  methods: {}
}
</script>
