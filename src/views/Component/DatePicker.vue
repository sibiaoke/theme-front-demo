<template>
<div>
  <el-row>
    <el-col :span="12">
      <label>Default input</label>
    </el-col>
    <el-col :span="10">
      <!-- :picker-options="pickerOptions1" -->
      <el-date-picker v-model="value1" type="date" placeholder="YYYY - MM - DD">
      </el-date-picker>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Range input</label>
    </el-col>
    <el-col :span="12">
      <el-date-picker v-model="value2" type="daterange" start-placeholder="YYYY - MM - DD" end-placeholder="YYYY - MM - DD" style="width: 100%"></el-date-picker>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: ''
    }
  }
}
</script>

<style>
</style>
