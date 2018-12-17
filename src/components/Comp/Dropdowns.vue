<template>
<el-row>
  <el-col :span="12">
    <label>Dropdown button</label>
  </el-col>
  <el-col :span="12">
    <el-dropdown trigger="click">
      <el-button class="el-dropdown-link">
        Action
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Item1</el-dropdown-item>
        <el-dropdown-item>Item2</el-dropdown-item>
        <el-dropdown-item>Item3</el-dropdown-item>
        <el-dropdown-item>Item4</el-dropdown-item>
        <el-dropdown-item>Item5</el-dropdown-item>
        <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
  <el-col :span="12">
    <label>Combo box</label>
  </el-col>
  <el-col :span="10">
    <!-- <el-select :value="value" placeholder="Placeholder" filterable>
      <el-option v-for="(item, index) in 5" :key="item" :value="`Item ${index + 1}`">{{`Item ${index + 1}`}}</el-option>
    </el-select> -->
    <el-select filterable v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>

<style>
</style>
