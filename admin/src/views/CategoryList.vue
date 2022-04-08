<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="lists">
      <el-table-column prop="_id" label="ID" width="260"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: []
    }
  },
  methods: {
    async getData () {
      const res = await this.$http.get('categories')
      this.lists = res.data
    }
  },
  created () {
    this.getData()
  }
}
</script>