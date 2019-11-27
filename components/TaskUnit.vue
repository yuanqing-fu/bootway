<template>
  <transition name="fade">
    <div
      v-touch:longtap="onLongTap"
      class="task-unit"
      :class="{
        edit: task.isEdit,
        done: done
      }"
    >
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
        <client-only v-if="task.isEdit">
          <textarea-autosize
            ref="editTaskTextarea"
            v-model.trim="$attrs['task-values'].name"
            class="edit-task-textarea"
            @keyup.native.enter="sendTaskChangeEvent"
            @input.native="handleEditTaskTextareaInputEvent"
          />
        </client-only>
      </div>
      <span class="edit" @click="handelEditTaskEvent"
        ><fa :icon="['fas', 'pencil-alt']"
      /></span>
      <span class="cancel" @click="sendCancelTaskEditEvent"
        ><fa :icon="['fas', 'times']"
      /></span>
      <span class="delete" @click="handelDeleteTaskEvent"
        ><fa :icon="['fas', 'trash-alt']"
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
      isMobile: this.$device.isMobile,
      done: false
    }
  },
  computed: {},
  mounted() {
    this.done = this.task.done !== 0
  },
  methods: {
    handleEditTaskTextareaInputEvent() {
      this.$attrs['task-values'].name = this.$attrs['task-values'].name.replace(
        /\n/g,
        ''
      )
    },
    sendTaskChangeEvent() {
      this.$attrs['task-values'].name = this.$attrs['task-values'].name.replace(
        /\n/g,
        ''
      )
      if (!this.$attrs['task-values'].name) {
        this.sendCancelTaskEditEvent()
        return
      }
      this.$emit('taskChange')
    },
    onLongTap() {
      if (this.isMobile) {
        this.$emit('taskEdit', this.task)
      }
    },
    handelEditTaskEvent() {
      this.$emit('taskEdit', this.task)
      this.$nextTick(() => {
        this.$refs.editTaskTextarea.$el.focus()
      })
    },
    handelDeleteTaskEvent() {
      this.$emit('taskDelete', this.task)
    },
    sendCancelTaskEditEvent() {
      this.$emit('cancelTaskEdit')
    },
    taskStatusChange() {
      this.task.done = this.done ? 1 : 0
      this.$emit('taskStatusChange', this.task)
    }
  }
}
</script>
<style lang="scss">
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
  border: 2px solid $color-1;
  border-radius: 5px;
}

.task-unit .task-status {
  flex: 0 0 var(--leftbar-size);
  width: 30px;
  height: 18px;
}

.task-unit .task-start-date {
  flex: 0 0 auto;
  color: $color-11;
  user-select: none;
}

.task-unit:hover .task-start-date {
  color: gray;
}

.task-unit:hover .checkmark {
  background-color: $color-11;
}

.task-unit .task-name {
  flex: 1 1 auto;
  margin: 0 10px 0 0;
  word-break: break-word;
  .edit-task-textarea {
    display: none;
    width: 100%;
    border: none;
    outline: none;
  }
}

.mobile-mode .task-unit .task-name {
  user-select: none;
}

.task-unit.edit {
  .task-name {
    .text {
      display: none;
    }
    .edit-task-textarea {
      display: inline-block;
    }
  }
}

.task-unit.done .task-name .text {
  color: $color-11;
  background-image: linear-gradient(to bottom, $color-10 66%, $color-10);
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
  color: $color-1-lighter;
  user-select: none;
  cursor: pointer;
  margin-right: 8px;
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

.task-unit.edit:hover .delete {
  display: none;
}

.mobile-mode {
  .task-unit:hover .edit,
  .task-unit:hover .delete {
    display: none;
  }
  .task-unit.edit .delete {
    display: inline-block;
  }
}

.task-unit.edit .edit {
  display: none;
}
</style>
