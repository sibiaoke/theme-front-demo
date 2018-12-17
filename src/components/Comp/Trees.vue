<template>
<el-row :gutter="30">
  <el-col :span="6">
    <div>
      <label>Collapsed</label>
    </div>
    <el-tree :data="data1"></el-tree>
  </el-col>
  <el-col :span="6">
    <div>
      <label>Item 03 expanded</label>
    </div>
    <el-tree :data="data2"></el-tree>
  </el-col>
  <el-col :span="6">
    <div>
      <label>Item 02 expanded with checkboxes</label>
    </div>
    <el-tree :data="data3" node-key="label" show-checkbox :default-expanded-keys="['Item 03']" :default-checked-keys="['Sub-item 01','Sub-item 03 C']"></el-tree>
  </el-col>
  <el-col :span="6">
    <div>
      <label>Third level with checkboxes</label>
    </div>
    <el-tree :data="data4" node-key="label" show-checkbox :default-expanded-keys="['Item 03']" :default-checked-keys="['Sub-item 01','Sub-item 03','Sub-item 03 B','Sub-item 03 C']"></el-tree>
  </el-col>
</el-row>
</template>

<script>
import { cloneDeep, set as _set } from 'lodash'

export default {
  data() {
    const subItems = [
      {
        label: 'Sub-item 01'
      },
      {
        label: 'Sub-item 02'
      },
      {
        label: 'Sub-item 03',
        children: [
          {
            label: 'Sub-item 03 A'
          },
          {
            label: 'Sub-item 03 B'
          },
          {
            label: 'Sub-item 03 C'
          }
        ]
      }
    ]
    const basicData = new Array(3).fill(1).map((_, index) => ({
      label: `Item 0${index + 1}`,
      children: cloneDeep(subItems)
    }))
    return {
      data1: basicData,
      data2: _set(cloneDeep(basicData), [2, 'expand'], true),
      data3: _set(
        _set(
          _set(
            _set(cloneDeep(basicData), [1, 'expand'], true),
            [1, 'children', 1, 'checked'],
            true
          ),
          [1, 'children', 2, 'children', 1, 'checked'],
          true
        ),
        [1, 'children', 2, 'children', 2, 'checked'],
        true
      ),
      data4: _set(
        _set(
          _set(
            _set(
              _set(cloneDeep(basicData), [1, 'expand'], true),
              [1, 'children', 2, 'expand'],
              true
            ),
            [1, 'children', 1, 'checked'],
            true
          ),
          [1, 'children', 2, 'children', 1, 'checked'],
          true
        ),
        [1, 'children', 2, 'children', 2, 'checked'],
        true
      )
    }
  }
}
</script>

<style>
</style>
