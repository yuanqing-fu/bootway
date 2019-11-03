<template>
  <div class="datepicker-wrapper">
    <client-only>
      <date-picker
        v-model="$attrs.modelvalue.dateSelected"
        :language="zh"
        :input-class="'datepicker-input'"
        :format="customFormatter"
        @input="dateInputChange"
      ></date-picker>
    </client-only>
    <!--    <fa :icon="['fas', 'calendar-alt']" class="date-icon-svg" />-->
  </div>
</template>
<script>
import { en, zh } from 'vuejs-datepicker/dist/locale'
export default {
  data() {
    return {
      en,
      zh
    }
  },
  methods: {
    customFormatter(date) {
      return this.$moment(date).format('YYYY年MM月DD日')
    },
    dateInputChange() {
      this.$emit('dateChange')
    }
  }
}
</script>
<style>
.datepicker-wrapper {
  color: darkorange;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.datepicker-wrapper .datepicker-input {
  width: 124px;
  border: none;
  background: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.datepicker-wrapper .vdp-datepicker__calendar {
  right: 0;
  border-radius: 5px;
  border: 2px solid darkorange;
}

.datepicker-wrapper .vdp-datepicker__calendar .cell {
  border-radius: 50px;
}

.vdp-datepicker__calendar .cell.selected {
  color: white;
}

.datepicker-wrapper .date-icon-svg {
  margin-top: 2px;
  color: white;
}
</style>
