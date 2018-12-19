<template>
  <div>
    <el-row type="flex" align="middle" style="height: 100px;">
      <el-col :span="8">
        <el-tooltip  effect="light" placement="right" content="Short info about this" :value="value" v-model="value" :manual="manual">
          <label>Right1</label>
        </el-tooltip>
      </el-col>
      <el-col :span="8">
        <el-tooltip effect="light" placement="top" content="Tooltip text" v-model="value" :manual="manual" >
          <label>Top</label>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" style="height: 100px;">
      <el-col :span="8">
        <el-tooltip placement="right" content="Short info about this" v-model="value" :manual="manual" >
          <label>Right</label>
        </el-tooltip>
      </el-col>
      <el-col :span="8">
        <el-tooltip placement="top" content="Tooltip text" v-model="value" :manual="manual">
          <label>Top</label>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      manual: true
      // hideAfter: 0
    }
  },
  created() {
    setTimeout(() => {
      this.value = !this.value
    })
    // setInterval(() => {
    //   console.log('this.value :', this.value)
    //   this.value = !this.value
    // }, 1000)
  }
}
</script>

<style>
</style>
