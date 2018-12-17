<template>
  <el-form label-position="top">
    <el-row>
      <el-col :span="12">
        <label>Default</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-checkbox-group v-model="value">
            <el-checkbox label="Option"></el-checkbox>
            <el-checkbox label="Option 2"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Disabled</label>
      </el-col>
      <el-col :span="10">
        <el-checkbox label="Option" disabled>Option</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Selected</label>
      </el-col>
      <el-col :span="10">
        <el-checkbox label="Option" :value="true">Option</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Selected disabled</label>
      </el-col>
      <el-col :span="10">
        <el-checkbox label="Option" :value="true" disabled>Option</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Indeterminated selected</label>
      </el-col>
      <el-col :span="10">
        <el-checkbox label="Option" indeterminate>Option</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Indeterminated disabled</label>
      </el-col>
      <el-col :span="10">
        <el-checkbox label="Option" indeterminate disabled>Option</el-checkbox>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  }
}
</script>

<style>
</style>
