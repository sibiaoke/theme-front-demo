<template>
<div>
  <el-row>
    <el-col :span="12">
      <label>Input and action</label>
    </el-col>
    <el-col :span="10">
      <el-input placeholder="Placeholder" suffix-icon="el-icon-search">
        <!-- <i slot="suffix" class="el-input__icon el-icon-search"></i> -->
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="10" :offset="12">
      <el-input placeholder="Placeholder" class="hover">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Input and button</label>
    </el-col>
    <el-col :span="10">
      <el-input placeholder="Placeholder">
        <el-button slot="append">Browser</el-button>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="10" :offset="12">
      <el-input placeholder="Placeholder">
        <el-button slot="append" class="hover">Browser</el-button>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <label>Input and primary button</label>
    </el-col>
    <el-col :span="10">
      <el-input placeholder="Placeholder">
        <el-button type="primary" slot="append">Browser</el-button>
      </el-input>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
