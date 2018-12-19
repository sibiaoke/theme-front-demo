<template>
  <el-row>
    <el-col :span="12">
      <label>Default</label>
    </el-col>
    <el-col :span="12">
      <!-- <el-input-number controls-position="right" v-model="num1"  placeholder="000" /> -->
      <el-input type="number" v-model="num1" :min="0" :max="5"  placeholder="000" />
    </el-col>
    <el-col :span="12">
      <label>Disabled</label>
    </el-col>
    <el-col :span="12">
      <el-input type="number"  v-model="num2" :disabled="true" placeholder="000" />
    </el-col>
    <el-col :span="12">
      <label>On hover</label>
    </el-col>
    <el-col :span="12">
      <el-input type="number"  class="hover" placeholder="000" value="0" />
    </el-col>
    <el-col :span="12">
      <label>Selected</label>
    </el-col>
    <el-col :span="12">
      <el-input type="number"  class="focus" placeholder="000" value="0" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0
    }
  }
}
</script>

<style>
</style>
