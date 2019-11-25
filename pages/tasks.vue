<template>
  <div class="wrapper task-day-page" :class="{ 'sidebar-mode': sidebarMode }">
    <day-header class="task-header with-other-actions">
      <template v-if="taskList.length !== 0" v-slot:menu>
        <button class="sidebar-menu-button" @click="toggleSidebar">
          &#8801;
        </button>
      </template>
      <template v-slot:dateselect>
        <v-date-picker
          :modelvalue="currentDatepickerValues"
          @dateChange="dateChange"
        ></v-date-picker>
      </template>
    </day-header>
    <div class="middle-container day-task-container">
      <div class="middle-container-inner">
        <task-action-bar v-if="taskList.length !== 0">
          <template v-slot:switch-panel>
            <div v-if="showCompact" class="action compact">
              <input id="compactAction" v-model="compact" type="checkbox" />
              <label
                v-tooltip.left="getTooltipOption('紧凑模式')"
                for="compactAction"
                ><fa :icon="['fas', 'compress-arrows-alt']"
              /></label>
            </div>
            <div v-if="hasClassA" class="action classA">
              <input id="ClassACheck" v-model="showClassA" type="checkbox" />
              <label
                v-tooltip.left="getTooltipOption('重要且紧急')"
                for="ClassACheck"
                ><fa :icon="['fas', 'grin-stars']"
              /></label>
            </div>
            <div v-if="hasClassB" class="action classB">
              <input id="ClassBCheck" v-model="showClassB" type="checkbox" />
              <label
                v-tooltip.left="getTooltipOption('紧急但不重要')"
                for="ClassBCheck"
                ><fa :icon="['fas', 'grin-beam']"
              /></label>
            </div>
            <div v-if="hasClassC" class="action classC">
              <input id="ClassCCheck" v-model="showClassC" type="checkbox" />
              <label
                v-tooltip.left="getTooltipOption('重要但不紧急')"
                for="ClassCCheck"
                ><fa :icon="['fas', 'grin-wink']"
              /></label>
            </div>
            <div v-if="hasClassD" class="action classD">
              <input id="ClassDCheck" v-model="showClassD" type="checkbox" />
              <label
                v-tooltip.left="getTooltipOption('不重要也不紧急')"
                class="ClassD"
                for="ClassDCheck"
                ><fa :icon="['fas', 'grin-alt']"
              /></label>
            </div>
          </template>
        </task-action-bar>
        <div
          v-if="taskList.length !== 0"
          class="task-groups"
          :class="{ compact: compact }"
        >
          <task-type
            v-for="(taskByTypes, index) in orderedTaskList"
            v-show="isTaskGroupShow(taskByTypes.type)"
            :key="`task-by-types-${index}`"
            :task-by-types="taskByTypes"
            :class="taskByTypes.type"
            @taskEdit="enterEditMode"
            @taskDelete="showDeleteModal"
            @cancelTaskEdit="cancelTaskEdit"
            @taskStatusChange="editTask"
          ></task-type>
        </div>
        <div
          v-else
          class="task-empty"
          @mouseover="focusInput"
          @click="focusInput"
        >
          <p class="title">你有什么想做的？</p>
          <div class="pointer">
            &#10140;
          </div>
        </div>
      </div>
    </div>
    <task-input
      ref="taskInput"
      :class="{ edit: editMode }"
      :task-values="taskFormValues"
      @taskChange="addOrEditTask"
      @cancelTaskEdit="cancelTaskEdit"
    ></task-input>
    <v-dialog class="alertDialog" />
  </div>
</template>

<script>
import TaskType from '~/components/TaskType.vue'
import TaskInput from '~/components/TaskInput.vue'
import DayHeader from '~/components/Header.vue'
import TaskActionBar from '~/components/TaskActionBar.vue'
import VDatePicker from '~/components/VDatePicker'

export default {
  components: {
    DayHeader,
    TaskType,
    TaskInput,
    TaskActionBar,
    VDatePicker
  },
  data() {
    return {
      sidebarMode: false,
      editMode: false,
      compact: false,
      showClassA: true,
      showClassB: true,
      showClassC: true,
      showClassD: true,
      tempTaskForEdit: null,
      taskFormValues: {
        name: '',
        type: 'classD',
        start_date: new Date()
      },
      currentDatepickerValues: {
        dateSelected: new Date()
      },
      taskList: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user ? this.$store.state.user : null
    },
    showCompact() {
      return this.$device.isMobile
        ? this.taskList.length > 20
        : this.taskList.length > 30
    },
    hasClassA() {
      const list = this.orderedTaskList.filter((el) => {
        return el.type === 'classA'
      })[0]
      return list && list.length !== 0
    },
    hasClassB() {
      const list = this.orderedTaskList.filter((el) => {
        return el.type === 'classB'
      })[0]
      return list && list.length !== 0
    },
    hasClassC() {
      const list = this.orderedTaskList.filter((el) => {
        return el.type === 'classC'
      })[0]
      return list && list.length !== 0
    },
    hasClassD() {
      const list = this.orderedTaskList.filter((el) => {
        return el.type === 'classD'
      })[0]
      return list && list.length !== 0
    },
    orderedTaskList() {
      let classATaskList = [] // type: { important:1, urgent:1 }
      let classBTaskList = [] // type: { important:0, urgent:1 }
      let classCTaskList = [] // type: { important:1, urgent:0 }
      let classDTaskList = [] // type: { important:0, urgent:0 }

      classATaskList = this.getTypedTaskList(this.taskList, {
        important: 1,
        urgent: 1
      })

      classBTaskList = this.getTypedTaskList(this.taskList, {
        important: 0,
        urgent: 1
      })

      classCTaskList = this.getTypedTaskList(this.taskList, {
        important: 1,
        urgent: 0
      })

      classDTaskList = this.getTypedTaskList(this.taskList, {
        important: 0,
        urgent: 0
      })

      const resultArr = []

      // if (this.showClassA) {
      //   resultArr.push(classATaskList)
      // }
      //
      // if (this.showClassB) {
      //   resultArr.push(classBTaskList)
      // }
      //
      // if (this.showClassC) {
      //   resultArr.push(classCTaskList)
      // }
      //
      // if (this.showClassD) {
      //   resultArr.push(classDTaskList)
      // }

      resultArr.push(classATaskList)

      resultArr.push(classBTaskList)

      resultArr.push(classCTaskList)

      resultArr.push(classDTaskList)

      return resultArr.filter(function(el) {
        return el.length !== 0
      })
    }
  },
  async asyncData({ store, $moment }) {
    // async function stall(stallTime = 3000) {
    //   await new Promise((resolve) => window.setTimeout(resolve, stallTime))
    // }
    //
    // await stall() // 暂停执行，用来模拟慢速网络
    let response = {}

    try {
      response = await store.dispatch(
        'getTask',
        $moment(new Date()).format('YYYY-MM-DD'),
        {}
      )
    } catch (error) {
      response.data = []
    }

    return {
      taskList: response.data
    }
  },
  methods: {
    completedTasksLength(taskByTypes) {
      return taskByTypes.filter((el) => el.done === 1).length
    },
    isTaskGroupShow(type) {
      if (this.showClassA && type === 'classA') {
        return true
      }
      if (this.showClassB && type === 'classB') {
        return true
      }
      if (this.showClassC && type === 'classC') {
        return true
      }
      if (this.showClassD && type === 'classD') {
        return true
      }
    },
    focusInput() {
      this.$refs.taskInput.focusInput()
    },
    async getTask() {
      try {
        const response = await this.$store.dispatch(
          'getTask',
          this.$moment(this.currentDatepickerValues.dateSelected).format(
            'YYYY-MM-DD'
          ),
          {}
        )
        return response.data
      } catch (error) {
        window.location.reload()
      }
    },
    async dateChange() {
      this.cancelTaskEdit()
      this.taskFormValues.start_date = this.currentDatepickerValues.dateSelected
      this.taskList = await this.getTask()
      this.focusInput()
    },
    getImportantValue(type) {
      if (type.includes('classA') || type.includes('classC')) {
        return 1
      } else {
        return 0
      }
    },
    getUrgentValue(type) {
      if (type.includes('classA') || type.includes('classB')) {
        return 1
      } else {
        return 0
      }
    },
    getTypedTaskList(tasks, typeObj) {
      const taskList = tasks
        .filter(function(el) {
          return (
            el.important === typeObj.important && el.urgent === typeObj.urgent
          )
        })
        .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))

      if (typeObj.important) {
        if (typeObj.urgent) {
          taskList.type = 'classA'
          taskList.name = '重要且紧急'
        } else {
          taskList.type = 'classC'
          taskList.name = '重要但不紧急'
        }
      } else if (typeObj.urgent) {
        taskList.type = 'classB'
        taskList.name = '紧急但不重要'
      } else {
        taskList.type = 'classD'
        taskList.name = '不重要也不紧急'
      }
      return taskList
    },
    addOrEditTask() {
      if (!this.editMode) {
        this.addTask()
      } else {
        this.editTask()
      }
    },
    addTask() {
      this.alert = null
      this.loading = true

      const newTask = {
        task_name: this.taskFormValues.name,
        important: this.getImportantValue(this.taskFormValues.type),
        urgent: this.getUrgentValue(this.taskFormValues.type),
        done: 0,
        start_date: this.taskFormValues.start_date
      }

      this.$store
        .dispatch('addTask', newTask)
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false

          newTask.task_id = result.data[0]
          this.taskList.push(newTask)
          this.taskFormValues.name = ''
          this.$refs.taskInput.focusInput()
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.response.status
            }
          }
          window.location.reload()
        })
    },
    editTask(taskToBeInstantEdited) {
      this.alert = null
      this.loading = true

      let task = {}
      if (taskToBeInstantEdited) {
        task = {
          task_id: taskToBeInstantEdited.task_id,
          done: taskToBeInstantEdited.done
        }
      } else {
        task = {
          task_id: this.tempTaskForEdit.task_id,
          done: this.tempTaskForEdit.done,
          task_name: this.taskFormValues.name,
          important: this.getImportantValue(this.taskFormValues.type),
          urgent: this.getUrgentValue(this.taskFormValues.type),
          start_date: this.taskFormValues.start_date
        }
      }

      this.$store
        .dispatch('editTask', task)
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false

          if (!taskToBeInstantEdited) {
            this.tempTaskForEdit.task_name = task.task_name
            this.tempTaskForEdit.done = task.done
            this.tempTaskForEdit.important = task.important
            this.tempTaskForEdit.urgent = task.urgent
            this.tempTaskForEdit.start_date = task.start_date

            this.cancelTaskEdit()
          }
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.response.status
            }
          }
          window.location.reload()
        })
    },
    showDeleteModal(task) {
      this.$modal.show('dialog', {
        // title: 'Alert!',
        text: '确定要删除吗？',
        buttons: [
          {
            title: '删除',
            default: true,
            handler: () => {
              this.$modal.hide('dialog')
              this.deleteTask(task)
            }
          },
          {
            title: '取消'
          }
        ]
      })
    },
    deleteTask(task) {
      this.alert = null
      this.loading = true

      const data = { task_id: task.task_id }
      this.$store
        .dispatch('deleteTask', { data })
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false

          this.taskList.splice(
            this.taskList.indexOf(
              this.taskList.find((element) => {
                return element.task_id === task.task_id
              })
            ),
            1
          )
          if (this.editMode) {
            this.cancelTaskEdit()
          }
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.response.status
            }
          }
          // window.location.reload()
        })
    },
    enterEditMode(task) {
      // 进入编辑模式
      this.editMode = true
      if (this.tempTaskForEdit != null) {
        this.tempTaskForEdit.isEdit = false
      }
      this.$set(task, 'isEdit', true)
      this.tempTaskForEdit = task

      this.taskFormValues.name = task.task_name
      this.taskFormValues.type = this.$refs.taskInput.getClassType(
        task.important,
        task.urgent
      )
      this.taskFormValues.start_date = new Date(task.start_date)

      this.$refs.taskInput.setStartDate()
      this.$refs.taskInput.focusInput()
    },
    cancelTaskEdit() {
      this.editMode = false
      this.taskFormValues.name = ''
      if (this.tempTaskForEdit != null) {
        this.tempTaskForEdit.isEdit = false
        this.tempTaskForEdit = null
      }
    },
    getTooltipOption(content) {
      return {
        content,
        hideOnTargetClick: false,
        trigger: this.$device.isMobile ? 'click' : 'hover'
      }
    },
    toggleSidebar() {
      this.sidebarMode = !this.sidebarMode
    }
  }
}
</script>

<style lang="scss">
:root {
  --leftbar-size: 30px;
}

.task-empty {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.task-empty .title {
  font-size: 20px;
  font-weight: bold;
  color: $color-1-lighter;
  margin-bottom: 37px;
}

.task-empty .pointer {
  font-size: 82px;
  color: $color-3;
  transition: all 0.1s ease;
  transform: rotate(90deg);
  &:hover {
    transform: rotate(90deg) translateX(10px);
  }
}

.day-task-container {
}

.day-task-container .task-groups {
  margin-top: 30px;
  position: relative;
}
</style>
