<template>
<el-form label-position="top">
  <el-row>
    <el-col :span="12">
      <label>Default</label>
    </el-col>
    <el-col :span="10">
      <el-switch v-model="value" size="small"/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Disabled</label>
    </el-col>
    <el-col :span="10">
      <el-switch size="small" disabled />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Toggled</label>
    </el-col>
    <el-col :span="10">
      <el-switch size="small" :value="true"></el-switch>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Toggled disabled</label>
    </el-col>
    <el-col :span="10">
      <el-switch size="small" :value="true" disabled></el-switch>
    </el-col>
  </el-row>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>

<style>
</style>
