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
        <el-dropdown-item disabled>Item4</el-dropdown-item>
        <el-dropdown-item divided>Item5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
  <el-col :span="12">
    <label>Combo box</label>
  </el-col>
  <el-col :span="10">
    <el-select v-model="value" placeholder="Placeholder" filterable clearable>
      <el-option v-for="(item, index) in 5" :key="item" :value="`Item ${index + 1}`">{{`Item ${index + 1}`}}</el-option>
    </el-select>
  </el-col>
  <el-col :span="12">
    <label>Combo box grouped</label>
  </el-col>
  <el-col :span="10">
    <el-select v-model="value1" placeholder="Placeholder" filterable clearable>
      <el-option-group v-for="group in 2" :key="group" :label="`Group ${group}`">
        <el-option v-for="item in 5" :key="item" :value="`Item ${item}`">{{`Item ${item}`}}</el-option>
      </el-option-group>
    </el-select>
  </el-col>
  <el-col :span="12">
    <label>Multi select</label>
  </el-col>
  <el-col :span="10">
    <el-select v-model="value2" placeholder="Placeholder" multiple filterable clearable>
      <el-option v-for="item in 5" :key="item" :value="`Item ${item}`">{{`Item ${item}`}}</el-option>
    </el-select>
  </el-col>
  <el-col :span="12">
    <label>Multi select collapsable</label>
  </el-col>
  <el-col :span="10">
    <el-select v-model="value2" placeholder="Placeholder" multiple collapse-tags filterable clearable>
      <el-option v-for="item in 5" :key="item" :value="`Item ${item}`">{{`Item ${item}`}}</el-option>
    </el-select>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value1: '',
      value2: []
    }
  }
}
</script>

<style>
</style>
