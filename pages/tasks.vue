<template>
  <div class="wrapper task-day-page">
    <day-header class="task-header">
      <template v-slot:dateselect>
        <v-date-picker
          :modelvalue="currentDatepickerValues"
          @dateChange="dateChange"
        ></v-date-picker>
      </template>
    </day-header>
    <div class="middle-container day-task-container">
      <div class="middle-container-inner">
        <task-action-bar>
          <template v-slot:switch-panel>
            <div class="action">
              <input id="compactAction" v-model="showCompact" type="checkbox" />
              <label
                v-tooltip.left="'紧凑模式'"
                class="compact"
                for="compactAction"
              ></label>
            </div>
            <div class="action">
              <input id="ClassACheck" v-model="showClassA" type="checkbox" />
              <label
                v-tooltip.left="'重要且紧急'"
                class="ClassA"
                for="ClassACheck"
              ></label>
            </div>
            <div class="action">
              <input id="ClassBCheck" v-model="showClassB" type="checkbox" />
              <label
                v-tooltip.left="'紧急但不重要'"
                class="ClassB"
                for="ClassBCheck"
              ></label>
            </div>
            <div class="action">
              <input id="ClassCCheck" v-model="showClassC" type="checkbox" />
              <label
                v-tooltip.left="'重要但不紧急'"
                class="ClassC"
                for="ClassCCheck"
              ></label>
            </div>
            <div class="action">
              <input id="ClassDCheck" v-model="showClassD" type="checkbox" />
              <label
                v-tooltip.left="'不重要也不紧急'"
                class="ClassD"
                for="ClassDCheck"
              ></label>
            </div>
          </template>
        </task-action-bar>
        <div
          v-if="orderedTaskList.length !== 0"
          class="task-groups"
          :class="{ compact: showCompact }"
        >
          <task-type
            v-for="(taskByTypes, index) in orderedTaskList"
            :key="`task-by-types-${index}`"
            :task-by-types="taskByTypes"
            :class="taskByTypes.type"
          ></task-type>
        </div>
        <div
          v-else
          class="task-empty"
          @mouseover="focusInput"
          @click="focusInput"
        >
          <p class="title">你有什么想做的？</p>
          <div class="blinking">
            <fa :icon="['fas', 'hand-point-down']" class="hand-icon-svg" />
          </div>
        </div>
      </div>
    </div>
    <task-input
      ref="taskInput"
      :task-values="taskFormValues"
      @taskChange="addTask"
    ></task-input>
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
      newTaskMode: true,
      showCompact: true,
      showClassA: true,
      showClassB: true,
      showClassC: true,
      showClassD: true,
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

      if (this.showClassA) {
        resultArr.push(classATaskList)
      }

      if (this.showClassB) {
        resultArr.push(classBTaskList)
      }

      if (this.showClassC) {
        resultArr.push(classCTaskList)
      }

      if (this.showClassD) {
        resultArr.push(classDTaskList)
      }

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

    const response = await store.dispatch(
      'getTask',
      $moment(new Date()).format('YYYY-MM-DD'),
      {}
    )
    return {
      taskList: response.data
    }
  },
  methods: {
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
    addTask() {
      this.alert = null
      this.loading = true

      const newTask = {
        task_name: this.taskFormValues.name,
        important: this.getImportantValue(this.taskFormValues.type),
        urgent: this.getUrgentValue(this.taskFormValues.type),
        start_date: this.taskFormValues.start_date
      }

      this.$store
        .dispatch('addTask', newTask)
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false

          this.taskList.push(newTask)
          this.taskFormValues.name = ''
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
    }
  }
}
</script>

<style>
:root {
  --leftbar-size: 30px;
}

.task-empty {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task-empty .title {
  font-size: 20px;
  font-weight: bold;
  color: darkorange;
  margin-bottom: 37px;
}

.task-empty .hand-icon-svg {
  font-size: 100px;
  color: darkorange;
}

.blinking {
  animation: blinkingText 0.5s;
  animation-iteration-count: 1;
}
@keyframes blinkingText {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.day-task-container {
}

.day-task-container .task-groups {
  margin-top: 30px;
  position: relative;
}

.day-task-container .task-unit {
  font-size: 13px;
  line-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 7px 5px 5px;
}

.task-unit .task-status {
  flex: 0 0 var(--leftbar-size);
  width: 30px;
  height: 18px;
}

.task-unit .task-start-date {
  flex: 0 0 auto;
  color: lightgray;
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
  height: 31px;
  line-height: 31px;
  margin-bottom: 15px;
  font-weight: 500;
  color: darkorange;
  font-size: 13px;
}

.task-groups .task-group-name span {
  position: relative;
  background-color: #fefefe;
  padding: 0 5px;
  top: 12px;
  left: 26px;
}
</style>
