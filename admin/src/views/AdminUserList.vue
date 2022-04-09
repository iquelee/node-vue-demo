<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="lists">
      <el-table-column prop="_id" label="ID" width="260"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <!-- eslint-disable-next-line -->
        <template slot-scope="scope">
          <el-button type="text" size="small"
          @click='$router.push(`/admin_users/edit/${scope.row._id}`)'>编辑</el-button>
          <el-button type="text" size="small"
          @click='remove(scope.row)'>删除</el-button>
        </template>
      </el-table-column>
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
    async fetch () {
      const res = await this.$http.get('/admin_users')
      this.lists = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认要删除 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$http.delete(`/admin_users/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created () {
    this.fetch()
  }
}
</script>