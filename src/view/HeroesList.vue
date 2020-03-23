<template>
  <div class="list-container">
    <router-link to="/heroes/add" class="btn btn-primary">添加英雄</router-link>
    <hr />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in HeroesList" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.heroesName}}</td>
          <td>{{item.heroesGender}}</td>
          <td>{{item.cTime|formatTime}}</td>
          <td>
            <button class="btn btn-success">编辑</button>&nbsp;
            <button class="btn btn-danger" @click="delHeroes(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      HeroesList: []
    };
  },
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  created() {
    this.getHeroes();
  },
  methods: {
    // 获取后台数据并渲染表格
    getHeroes() {
      this.$http
        .get("heroes")
        .then(res => {
          this.HeroesList = res.data;
        })
        .catch(() => {
          alert("获取失败!");
        });
    },
    //删除英雄
    delHeroes(id) {
      if (confirm("确定删除吗？")) {
        this.$http
          .delete("heroes/" + id)
          .then(() => {
            // alert("删除成功!");
            this.getHeroes();
          })
          .catch(() => {
            alert("删除失败!");
          });
      }
    }
  }
};
</script>

<style></style>