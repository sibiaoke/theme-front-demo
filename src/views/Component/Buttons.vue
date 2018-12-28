<template>
  <el-row>
    <el-col :span="6">
      <label>Default</label>
    </el-col>
    <el-col :span="6">
      <label>Primary</label>
    </el-col>
    <el-col :span="6">
      <label>Destructive</label>
    </el-col>
    <el-col :span="6">
      <label>Icon positions</label>
    </el-col>

    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4">
      <el-button>Action</el-button>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4">
      <el-button type="primary">Action</el-button>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4">
      <el-button type="danger">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Left</label>
    </el-col>
    <el-col :span="4">
      <el-button><svg-icon icon-class="arrow_left" style="margin-right: 14px;" />Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Disabled</label>
    </el-col>
    <el-col :span="4">
      <el-button disabled>Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Disabled</label>
    </el-col>
    <el-col :span="4">
      <el-button disabled type="primary">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Disabled</label>
    </el-col>
    <el-col :span="4">
      <el-button disabled type="danger">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Right</label>
    </el-col>
    <el-col :span="4">
      <el-button>Action<svg-icon icon-class="arrow_right" style="margin-left: 14px;" /></el-button>
    </el-col>

    <el-col :span="2">
      <label>On hover</label>
    </el-col>
    <el-col :span="4">
      <el-button class="hover">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>On hover</label>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" class="hover">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>On hover</label>
    </el-col>
    <el-col :span="10">
      <el-button type="danger" class="hover">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Pressed</label>
    </el-col>
    <el-col :span="4">
      <el-button class="active">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Pressed</label>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" class="active">Action</el-button>
    </el-col>
    <el-col :span="2">
      <label>Pressed</label>
    </el-col>
    <el-col :span="10">
      <el-button type="danger" class="active">Action</el-button>
    </el-col>

  </el-row>
</template>

<script>
export default {}
</script>

<style>
</style>
