<template>
  <el-row>
    <el-col :span="2">
      <label>Severity</label>
    </el-col>
    <el-col :span="22">
      <Pill v-for="item in pills" :key="item.type" :type="item.type">{{item.count}}</Pill>
    </el-col>
    <el-col :span="2">
      <label>Minimized</label>
    </el-col>
    <el-col :span="22">
      <Pill mini v-for="item in pills" :key="item.type" :type="item.type" :class="{ selected: item.type === 'major'}">{{item.count}}</Pill>
    </el-col>
  </el-row>
</template>

<script>
import Pill from '@/components/Pill'

export default {
  components: {
    Pill
  },
  data() {
    const pillTypes = ['critical', 'major', 'minor', 'warning', 'indeterminate', 'cleared']
    const counts = ['25', '10', '07', '43', '18', '27']
    return {
      pills: pillTypes.map((type, index) => ({ type, count: counts[index] }))
    }
  }
}
</script>

<style>
</style>
