<template>
<!-- <el-pagination :total="100" size="small" show-elevator show-sizer /> -->
<el-pagination :current-page="1" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout=" prev, pager, next, sizes,jumper" :total="40000">
</el-pagination>
</template>

<script>
export default {}
</script>

<style>
</style>
