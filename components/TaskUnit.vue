<template>
  <transition name="fade">
    <div class="task-unit" :class="{ edit: task.isEdit, done: task.done }">
      <div class="task-status">
        <label class="check-label">
          <input
            v-model="done"
            class="check-input"
            type="checkbox"
            name="task-status"
            @change="taskStatusChange"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="task-name">
        <span class="text">{{ task.task_name }}</span>
      </div>
      <span class="edit" @click="handelEditTaskEvent"
        ><fa :icon="['fas', 'pencil-alt']"
      /></span>
      <span class="delete" @click="handelDeleteTaskEvent"
        ><fa :icon="['fas', 'trash-alt']"
      /></span>
      <span class="cancel" @click="sendCancelTaskEditEvent"
        ><fa :icon="['fas', 'times']"
      /></span>
      <span class="task-start-date">{{
        $moment(task.start_date).format('HH:mm')
      }}</span>
    </div>
  </transition>
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
  data() {
    return {
      done: false
    }
  },
  computed: {},
  mounted() {
    this.done = this.task.done
  },
  methods: {
    handelEditTaskEvent() {
      this.$emit('taskEdit', this.task)
    },
    handelDeleteTaskEvent() {
      this.$emit('taskDelete', this.task)
    },
    sendCancelTaskEditEvent() {
      this.$emit('cancelTaskEdit')
    },
    taskStatusChange() {
      this.task.done = this.done
      this.$emit('taskStatusChange', this.task)
    }
  }
}
</script>
<style>
.task-unit {
  font-size: 13px;
  line-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 7px 5px 5px;
  transition: all 0.4s ease;
}

.task-unit.edit {
  border: 2px solid darkorange;
  border-radius: 5px;
}

.task-unit .task-status {
  flex: 0 0 var(--leftbar-size);
  width: 30px;
  height: 18px;
}

.task-unit .task-start-date {
  flex: 0 0 auto;
  color: lightgray;
  user-select: none;
}

.task-unit:hover .task-start-date {
  color: gray;
}

.task-unit:hover .checkmark {
  background-color: lightgray;
}

.task-unit .task-name {
  flex: 1 1 auto;
  margin: 0 10px 0 0;
}

.task-unit.done .task-name .text {
  color: gray;
  background-image: linear-gradient(to bottom, darkorange 66%, darkorange);
  background-position: 0 7px;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  font-style: italic;
  transition: all 0.4s ease;
}

.task-unit .edit,
.task-unit .cancel,
.task-unit .delete {
  font-size: 12px;
  color: darkorange;
  user-select: none;
  cursor: pointer;
  margin-right: 5px;
  display: none;
}

.task-unit .cancel {
  display: none;
}

.task-unit.edit .cancel {
  display: inline-block;
}

.task-unit:hover .edit,
.task-unit:hover .delete {
  display: inline-block;
}

.task-unit.edit .edit {
  display: none;
}
</style>
