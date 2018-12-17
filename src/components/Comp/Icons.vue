<template>
  <div>
    <el-tooltip placement="top" :content="item" v-for="item of menuIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </el-tooltip>
    <el-tooltip placement="top" :content="item" v-for="item of icons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </el-tooltip>
    <br />
    <el-tooltip placement="top" :content="item" v-for="(item, index) of alarmIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" :style="{ fontSize: `${18 - 2 * index}px` }" />
    </el-tooltip>
    <el-tooltip placement="top" :content="item" v-for="item of severityIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </el-tooltip>
  </div>
</template>

<script>
import { menuIcons, alarmIcons, severityIcons, icons } from './iconList'

export default {
  data() {
    return {
      menuIcons,
      alarmIcons,
      severityIcons,
      icons
    }
  }
}
</script>

<style scoped lang="scss">
.icon-item {
  margin: 0 10px 10px;
}
</style>
