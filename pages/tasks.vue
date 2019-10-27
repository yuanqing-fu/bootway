<template>
  <div class="wrapper task-day-page">
    <day-header class="task-header">
      <template v-slot:test>
        <button @click="checkMe">Check Me</button>
        <button @click="logOut">Log Out</button>
        <p v-if="user">您好, {{ user.name }} {{ user.email }}</p>
        <p v-else>用户没有登录!</p>
      </template>
    </day-header>
    <div class="middle-container day-task-container">
      <div class="middle-container-inner">
        <div class="task-groups" :class="{ compact: compactTaskGroup }">
          <task-type
            v-for="(taskByTypes, index) in orderedTaskList"
            :key="`task-by-types-${index}`"
            :task-by-types="taskByTypes"
            :class="taskByTypes.type"
          ></task-type>
        </div>
      </div>
    </div>
    <task-input :task-values="taskValues" @taskChange="addTask"></task-input>
  </div>
</template>

<script>
import TaskType from '~/components/TaskType.vue'
import TaskInput from '~/components/TaskInput.vue'
import DayHeader from '~/components/Header.vue'

export default {
  components: {
    DayHeader,
    TaskType,
    TaskInput
  },
  data() {
    return {
      compactTaskGroup: true,
      taskValues: {
        name: '',
        type: 'classB',
        start_date: new Date()
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
      classATaskList.type = 'classA'
      classATaskList.name = '重要且紧急'

      classBTaskList = this.getTypedTaskList(this.taskList, {
        important: 0,
        urgent: 1
      })
      classBTaskList.type = 'classB'
      classBTaskList.name = '紧急但不重要'

      classCTaskList = this.getTypedTaskList(this.taskList, {
        important: 1,
        urgent: 0
      })
      classCTaskList.type = 'classC'
      classCTaskList.name = '重要但不紧急'

      classDTaskList = this.getTypedTaskList(this.taskList, {
        important: 0,
        urgent: 0
      })
      classDTaskList.type = 'classD'
      classDTaskList.name = '不重要也不紧急  '

      return [classATaskList, classBTaskList, classCTaskList, classDTaskList]
    }
  },
  async asyncData({ $axios }) {
    // async function stall(stallTime = 3000) {
    //   await new Promise((resolve) => window.setTimeout(resolve, stallTime))
    // }
    //
    // await stall() // 暂停执行，用来模拟慢速网络

    // const response = await $axios.get(`http://localhost:3003/tasks`)
    const response = await $axios.get('/tasks')
    return {
      taskList: response.data
    }
  },
  methods: {
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
    getTypedTaskList(taskList, typeObj) {
      return taskList
        .filter(function(el) {
          return (
            el.important === typeObj.important && el.urgent === typeObj.urgent
          )
        })
        .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
    },
    addTask() {
      this.alert = null
      this.loading = true

      const newTask = {
        task_name: this.taskValues.name,
        important: this.getImportantValue(this.taskValues.type),
        urgent: this.getUrgentValue(this.taskValues.type),
        start_date: new Date()
      }

      this.$store
        .dispatch('addTask', newTask)
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false

          this.taskList.push(newTask)
          this.taskValues.name = ''
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.response.status
            }
          }
        })
    },
    checkMe() {
      this.$store.dispatch('fetch').then((result) => {})
    },
    logOut() {
      this.$store.dispatch('reset').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
:root {
  --leftbar-size: 30px;
}

.day-task-container {
}

.day-task-container .task-groups {
  margin-top: 30px;
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

.task-unit .task-name {
  flex: 1 1 auto;
  margin: 0 10px 0 0;
}

.header.task-header {
  background-color: #db4c3f;
  color: white;
}

.header.task-header a {
  color: white;
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
  background: darkorange;
  border-radius: 5px;
}

.task-groups.compact .task-group-unit::-webkit-scrollbar-track {
  background: #dfdfdf;
}

.task-groups .task-group-name {
  border-bottom: 2px solid darkorange;
  height: 31px;
  line-height: 31px;
  margin-bottom: 15px;
}
</style>
