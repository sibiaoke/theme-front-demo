<template>
<el-row :gutter="50">
  <el-col :span="12">
    <div>
      <label>Solid line</label>
    </div>
    <el-table :data="data">
      <el-table-column v-for="(column, index) in basicColumns" :key="index" :prop="column.key" :label="column.title"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span="12">
    <div>
      <label>Solid line -- sortable</label>
    </div>
    <el-table :data="data" :default-sort="{prop: 'title', order: 'descending'}">
      <el-table-column v-for="(column, index) in sortableColumns" :key="index" :sortable="column.sortable" :prop="column.key" :label="column.title"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span="12">
    <div>
      <label>Solid line -- selectable</label>
    </div>
    <el-table  @selection-change="handleSelectionChange" :data="data">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column v-for="(column, index) in selectableColumns" :key="index" :prop="column.key" :label="column.title"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span="12">
    <div>
      <label>Dashed line -- selectable + sortable</label>
    </div>
    <el-table :default-sort="{prop: 'title', order: 'descending'}"  @selection-change="handleSelectionChange" :data="data" dashed>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column :sortable="column.sortable" v-for="(column, index) in fullColumns" :key="index" :prop="column.key" :label="column.title"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span="12">
    <div>
      <label>Striped line -- selectable + sortable</label>
    </div>
    <el-table :default-sort="{prop: 'title', order: 'descending'}"  @selection-change="handleSelectionChange" :data="data" stripe>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column :sortable="column.sortable" v-for="(column, index) in fullColumns" :key="index" :prop="column.key" :label="column.title"></el-table-column>
    </el-table>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    const basicColumns = [
      {
        title: 'Title 1',
        key: 'k1'
      },
      {
        title: 'Title 2',
        key: 'k2'
      },
      {
        title: 'Title 3',
        key: 'k3'
      },
      {
        title: 'Title 4',
        key: 'k4'
      }
    ]
    return {
      basicColumns,
      sortableColumns: basicColumns.map(item => ({
        ...item,
        sortable: true
      })),
      selectableColumns: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        ...basicColumns
      ],
      fullColumns: [
        ...basicColumns.map(item => ({
          ...item,
          sortable: true
        }))
      ],
      data: new Array(3).fill(0).map(() => ({
        k1: 'Item 1',
        k2: 'Item 2',
        k3: 'Item 3',
        k4: 'Item 4'
      })),
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange(val) {
      console.log('val :', val)
      this.multipleSelection = val
    }
  }
}
</script>

<style>
</style>
