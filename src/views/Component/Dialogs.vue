<template>
<el-row>
  <el-col :span="12">
    <label>Default</label>
  </el-col>
  <el-col :span="12">
    <label>Destructive action</label>
  </el-col>
  <el-col :span="12">
    <el-button @click="modal1 = true">Open</el-button>
    <el-dialog title="Dialog header" :visible.sync="modal1" :before-close="handleClose">
      <span>description</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Action</el-button>
        <el-button type="primary" @click="dialogVisible = false">Affirmative action</el-button>
      </span>
    </el-dialog>

  </el-col>
  <el-col :span="12">
    <el-button @click="modal2 = true">Open</el-button>
    <el-dialog :visible.sync="modal2" title="Dialog header">
      <p>Description</p>
      <div slot="footer">
        <el-button type="danger" @click="modal2 = false">Destructive action</el-button>
        <el-button @click="modal2 = false">Action</el-button>
      </div>
    </el-dialog>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false
    }
  },
  methods: {
    handleClose(done) {
      // this.$confirm('确认关闭？')
      //   .then(e => {
      //     console.log('e :', e)
      //     done()
      //   })
      //   .catch(() => {})
      done()
    }
  }
}
</script>

<style>
</style>
