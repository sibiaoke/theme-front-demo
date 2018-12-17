<template>
  <el-form label-position="top">
    <el-row>
      <el-col :span="12">
        <label>Default</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-radio-group v-model="value">
            <el-radio label="Option"></el-radio>
            <el-radio label="Option 2"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Disabled</label>
      </el-col>
      <el-col :span="10">
        <el-radio label="Option" disabled></el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Selected</label>
      </el-col>
      <el-col :span="10">
        <el-radio label="Option" value="Option"></el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Selected disabled</label>
      </el-col>
      <el-col :span="10">
        <el-radio label="Option" value="Option" disabled></el-radio>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style>
</style>
