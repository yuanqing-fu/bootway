<template>
  <div class="group">
    <div class="task-group-name">
      <span class="name">
        <span
          class="important"
          :class="{
            highlight:
              taskByTypes.type === 'classA' || taskByTypes.type === 'classC'
          }"
          >重要</span
        >
        <span class="line"></span>
        <span
          class="urgent"
          :class="{
            highlight:
              taskByTypes.type === 'classA' || taskByTypes.type === 'classB'
          }"
          >紧急</span
        >
      </span>
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
<style lang="scss">
.task-groups .task-group-unit {
  padding: 5px 10px;
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
  background: $color-1;
  border-radius: 0;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-thumb:hover {
  background: $color-1-darker;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-track {
  background: $color-11;
}

.task-groups .task-group-name {
  border-bottom: 3px solid $color-1;
  height: 19px;
  line-height: 19px;
  margin-bottom: 15px;
  font-weight: 500;
  color: $color-2;
  font-size: 13px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: $color-8;
}

.task-groups .group {
  background-color: $color-8;
  border-radius: 5px;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  margin-bottom: 15px;
}

.task-groups .task-group-name .name,
.task-groups .task-group-name .count {
  position: relative;
  background-color: $color-8;
  padding: 0 5px;
  top: 7px;
  left: 39px;
}

.task-groups .task-group-name .name {
  display: inline-flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: center;
  align-items: center;
}

.task-groups .task-group-name .name span {
  display: inline-block;
  background-color: $color-11;
  padding: 0 35px;
  position: relative;
  color: $color-12;
  user-select: none;
}

.task-groups .task-group-name .name span.important {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.task-groups .task-group-name .name span.urgent {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.task-groups .task-group-name .name span.highlight {
  color: $color-4;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}

.task-groups .task-group-name .name span.important.highlight {
  background-color: $color-1-lighter;
}

.task-groups .task-group-name .name span.urgent.highlight {
  background-color: $color-3;
}

.task-groups .task-group-name .count {
  position: absolute;
  right: 19px;
  left: auto;
  display: none;
}

.task-groups .task-group-name span.line {
  display: inline-block;
  height: 3px;
  background-color: $color-1;
  width: 10px;
  margin: 0 2px;
  padding: 0;
}
</style>
