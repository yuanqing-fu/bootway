<template>
  <div>
    <div class="task-group-name">
      <span class="name">{{ taskByTypes.name }}</span>
      <span class="count"
        >总：{{ taskByTypes.length }} 完成：{{ completedTasksLength }}</span
      >
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
<style>
.task-groups .task-group-unit {
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2);
}

.task-groups.compact .task-group-unit {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 0;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-thumb:hover {
  background: darkorange;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-track {
  background: #dfdfdf;
}

.task-groups .task-group-name {
  border-bottom: 2px solid darkorange;
  height: 19px;
  line-height: 19px;
  margin-bottom: 15px;
  font-weight: 500;
  color: darkorange;
  font-size: 13px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fefefe;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.task-groups .task-group-name span {
  position: relative;
  background-color: #fefefe;
  padding: 0 5px;
  top: 7px;
  left: 26px;
}

.task-groups .task-group-name .count {
  position: absolute;
  right: 19px;
  left: auto;
}
</style>
