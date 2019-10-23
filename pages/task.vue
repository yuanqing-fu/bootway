<template>
  <div class="wrapper task-day-page">
    <day-header>
      <template v-slot:test>
        <button @click="checkMe">Check Me</button>
        <button @click="logOut">Log Out</button>
        <p v-if="user">Hello, {{ user.name }} {{ user.email }}</p>
        <p v-else>The user is not authenticated!</p>
      </template>
    </day-header>
    <div class="middle-container day-task-container">
      <task-type
        v-for="task in orderedTaskList"
        :key="task.task_id"
        :task="task"
      ></task-type>
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
      taskValues: {
        name: '',
        type: 'classB'
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

      const filteredTaskList = classATaskList
        .concat(classBTaskList)
        .concat(classCTaskList)
        .concat(classDTaskList)

      // filteredTaskList.push(classATaskList)
      // filteredTaskList.push(classBTaskList)
      // filteredTaskList.push(classCTaskList)
      // filteredTaskList.push(classDTaskList)

      // eslint-disable-next-line no-console
      // console.log('filteredTaskList ', filteredTaskList)
      return filteredTaskList
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
    // eslint-disable-next-line no-console
    // console.log('*********** asyncData ', response.data)
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
      // eslint-disable-next-line no-console
      console.log('add task', this.taskValues.name, this.taskValues.type)
      this.taskList.push({
        task_name: this.taskValues.name,
        important: this.getImportantValue(this.taskValues.type),
        urgent: this.getUrgentValue(this.taskValues.type),
        start_date: new Date().toISOString()
      })
      this.taskValues.name = ''
    },
    checkMe() {
      this.$store.dispatch('fetch').then((result) => {
        // eslint-disable-next-line no-console
        console.log('Check Me Result:', result)
      })
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
