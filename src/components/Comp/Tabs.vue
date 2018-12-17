<template>
<el-row :gutter="30">
  <el-col :span="8">
    <label>Default</label>
  </el-col>
  <el-col :span="8">
    <label>More</label>
  </el-col>
  <el-col :span="8">
    <label>Using icons</label>
  </el-col>
  <el-col :span="8">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Active tab" name="first">
        <!-- Active tab -->
        </el-tab-pane>
      <el-tab-pane label="Inactive tab" name="second"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="third"></el-tab-pane>
    </el-tabs>
    <!-- <el-tabs value="1">
        <el-tab-pane label="Active tab" name="1"></el-tab-pane>
        <el-tab-pane label="Inactive tab" name="2"></el-tab-pane>
        <el-tab-pane label="Inactive tab" name="3"></el-tab-pane>
      </el-tabs> -->
  </el-col>
  <el-col :span="8">
    <el-tabs value="1">
      <el-tab-pane label="Active tab" name="1"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="2"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="3"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="4"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="5"></el-tab-pane>
      <el-tab-pane label="Inactive tab" name="6"></el-tab-pane>
    </el-tabs>
  </el-col>
  <el-col :span="8">
    <el-tabs value="1">
      <el-tab-pane  name="1">
          <i slot="label" class="el-icon-edit" ></i>
      </el-tab-pane>
      <el-tab-pane  name="2">
          <i class="el-icon-setting" slot="label"></i>
      </el-tab-pane>
    </el-tabs>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
</style>
