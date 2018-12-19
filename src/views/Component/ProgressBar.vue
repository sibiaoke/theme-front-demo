<template>
  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="7">
      <label>Thin</label>
    </el-col>
    <el-col :span="7">
      <label>Medium</label>
    </el-col>
    <el-col :span="7">
      <label>Large</label>
    </el-col>

    <el-col :span="3">
      <label>Default</label>
    </el-col>
    <el-col :span="7">
      <progress-bar thin :value="40" />
    </el-col>
    <el-col :span="7">
      <progress-bar :value="40" />
    </el-col>
    <el-col :span="7">
      <progress-bar large :value="40" />
    </el-col>

    <el-col :span="3">
      <label>Buffered</label>
    </el-col>
    <el-col :span="7">
      <progress-bar thin :value="40" :buffer="70" />
    </el-col>
    <el-col :span="7">
      <progress-bar :value="40" :buffer="70" />
    </el-col>
    <el-col :span="7">
      <progress-bar large :value="40" :buffer="70" />
    </el-col>

    <el-col :span="3">
      <label>Indeterminate</label>
    </el-col>
    <el-col :span="7">
      <progress-bar thin stripe />
    </el-col>
    <el-col :span="7">
      <progress-bar stripe />
    </el-col>
    <el-col :span="7">
      <progress-bar large stripe />
    </el-col>
  </el-row>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'

export default {
  components: {
    ProgressBar
  }
}
</script>

<style scoped>
.progressbar {
  width: 80%;
}
</style>
