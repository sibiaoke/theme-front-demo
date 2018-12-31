<template>
  <div>
    <el-pagination
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout=" prev, pager, next, sizes,jumper"
      :total="40000"
    />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
