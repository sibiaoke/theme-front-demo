<template>
  <el-row :gutter="30">
    <el-col :span="6">
      <div>
        <label>No lines - all items collapsed</label>
      </div>
      <el-collapse accordion no-lines>
        <el-collapse-item :title="`Item item`"  :name="`${item}`" v-for="item in 3" :key="item">
          <div>Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</div>
        </el-collapse-item >
      </el-collapse>
    </el-col>
    <el-col :span="6">
      <div>
        <label>No lines - Item 02 expanded</label>
      </div>
      <el-collapse accordion no-lines value="2">
        <el-collapse-item  :title="`Item item`" :name="`${item}`" v-for="item in 3" :key="item">
          <div>Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</div>
        </el-collapse-item >
      </el-collapse>
    </el-col>
    <el-col :span="6">
      <div>
        <label>With lines - all items collapsed</label>
      </div>
      <el-collapse accordion>
        <el-collapse-item :title="`Item item`" :name="`${item}`" v-for="item in 3" :key="item">
          <div >Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</div>
        </el-collapse-item >
      </el-collapse>
    </el-col>
    <el-col :span="6">
      <div>
        <label>With lines - Item 02 expanded</label>
      </div>
      <el-collapse accordion value="2">
        <el-collapse-item :title="`Item item`"  :name="`${item}`" v-for="item in 3" :key="item">
          <div>Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</div>
        </el-collapse-item >
      </el-collapse>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style>
</style>
