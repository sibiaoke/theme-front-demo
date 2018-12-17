<template>
  <el-row>
    <el-col :span="3">
      <label>Small</label>
      <br />
      <Loading small />
    </el-col>
    <el-col :span="3">
      <label>Medium</label>
      <br />
      <Loading />
    </el-col>
    <el-col :span="3">
      <label>Large</label>
      <br />
      <Loading large />
    </el-col>
  </el-row>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  components: {
    Loading
  }
}
</script>

<style>
</style>
