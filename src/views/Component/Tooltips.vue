<template>
  <div>
    <el-row type="flex" align="middle" style="height: 100px;">
      <el-col :span="8">
        <el-tooltip effect="light" placement="right" content="Short info about this" v-model="value" :manual="manual">
          <label>Right</label>
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
  mounted() {
    this.value = !this.value
  }
}
</script>

<style>
</style>
