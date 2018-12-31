<template>
  <el-row>
    <el-col :span="8">
      <div>
        <label>One line</label>
      </div>
      <el-button @click="oneLine">Open</el-button>
    </el-col>
    <el-col :span="8">
      <div>
        <label>With body text</label>
      </div>
      <el-button @click="withBodyText">Open</el-button>
    </el-col>
    <el-col :span="8">
      <div>
        <label>With actions</label>
      </div>
      <el-button @click="withActions">Open</el-button>
    </el-col>
    <el-col :span="8">
      <div>
        <label>Success</label>
      </div>
      <el-button @click="success" type="success">Open</el-button>
    </el-col>
    <el-col :span="8">
      <div>
        <label>Error</label>
      </div>
      <el-button @click="error" type="danger">Open</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { Button } from 'element-ui'

export default {
  methods: {
    oneLine() {
      this.$notify({
        title: 'Notification header',
        duration: 100000000
      })
    },
    withBodyText() {
      this.$notify({
        title: 'Notification header',
        message: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod'
      })
    },
    withActions() {
      // eslint-disable-next-line
      let getMessage = h => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>30-day trial expires on 2016-12-31.</div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '24px' }}>
              <div style={{ marginBottom: '8px' }}>
                <Button
                  size="small"
                  style={{ width: '100%' }}
                  onClick={() => this.handleAction('Launch')}
                >
                  Launch
                </Button>
              </div>
              <div>
                <Button
                  size="small"
                  style={{ width: '100%' }}
                  onClick={() => this.handleAction('Dismiss')}
                >
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        )
      }
      this.$notify({
        title: 'NMaas is ready to use',
        message: getMessage(this.$createElement),
        duration: 0
      })
    },
    success() {
      this.$notify({
        title: 'Order is sent',
        message: 'You will be notified of its progress.',
        type: 'success'
      })
      // this.$notify.success({
      //   title: 'Order is sent',
      //   message: 'You will be notified of its progress.',
      //   duration: 10000000
      // })
    },
    error() {
      this.$notify.error({
        title: 'order is rejected'
      })
    },
    handleAction(action) {
      this.$message(`${action} clicked`)
    }
  }
}
</script>

<style>
</style>
