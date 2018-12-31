<template>
  <el-form ref="form" :model="formModel" :rules="rules" label-position="top">
    <el-row>
      <el-col :span="12">
        <label>Default</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Textarea</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" type="textarea" :rows="3" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Disabled</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" disabled value="Text" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>On hover</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" class="hover" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Selected</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" class="focus" value="Text" ref="focusedInput" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Changed value</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" class="dirty" value="Text" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Validation</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label" prop="mail">
          <el-input placeholder="Placeholder" v-model="formModel.mail" />
        </el-form-item>
        <el-form-item label="Label" prop="validMail">
          <el-input placeholder="Placeholder" :value="formModel.validMail" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <label>Read only</label>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Label">
          <el-input placeholder="Placeholder" value="Read only value" readonly />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        mail: 'Text',
        validMail: 'abc@example.com'
      },
      rules: {
        mail: [{ type: 'email', message: 'Error: Invalid e-mail format', trigger: 'blur' }],
        validMail: [{ type: 'email', message: 'Error: Invalid e-mail format', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.$refs.form.validate()
    this.$refs.focusedInput.focus()
  }
}
</script>

<style>
</style>
