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
<style lang="scss">
.datepicker-wrapper {
  color: $color-3;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.datepicker-wrapper .datepicker-input {
  width: 124px;
  border: none;
  background: none;
  color: $color-4;
  cursor: pointer;
  text-align: center;
}

.datepicker-wrapper .vdp-datepicker__calendar {
  right: 0;
  border-radius: 5px;
  border: 2px solid $color-1;
}

.vdp-datepicker__calendar header .next:after {
  border-left: 10px solid $color-3 !important;
}

.vdp-datepicker__calendar header .prev:after {
  border-right: 10px solid $color-3 !important;
}

.datepicker-wrapper .vdp-datepicker__calendar {
  border: 2px solid $color-3 !important;
}

.datepicker-wrapper .vdp-datepicker__calendar .cell {
  border-radius: 50%;
  &:hover {
    border-color: $color-3 !important;
  }
  &.selected {
    &:hover {
      background-color: $color-3 !important;
      border-color: $color-3 !important;
    }
    background-color: $color-3;
  }
}

.vdp-datepicker__calendar .cell.selected {
  color: white;
}

.datepicker-wrapper .date-icon-svg {
  margin-top: 2px;
  color: white;
}
</style>
