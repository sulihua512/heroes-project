<template>
  <div class="edit-container">
    <form @submit.prevent="editHeroes">
      <legend>编辑英雄</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input v-model="heroesForm.heroesName" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <br />
        <input v-model="heroesForm.heroesGender" type="radio" value="男" />男
        <input v-model="heroesForm.heroesGender" type="radio" value="女" />女
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroesForm: {
        heroesName: "",
        heroesGender: ""
      }
    };
  },
  created() {
    this.getHeroesInfo();
  },
  methods: {
    getHeroesInfo() {
      const id = this.$route.params.id;
      this.$http
        .get(`heroes/${id}`)
        .then(res => {
          console.log(res.data);
          this.heroesForm.heroesName = res.data.heroesName;
          this.heroesForm.heroesGender = res.data.heroesGender;
        })
        .catch(() => {
          alert("获取用户信息失败");
        });
    },
    editHeroes() {
      const id = this.$route.params.id;
      this.$http
        .put(`heroes/${id}`, this.heroesForm)
        .then(() => {
          this.$router.push("/heroes");
        })
        .catch(() => {
          alert("编辑失败!");
        });
    }
  }
};
</script>

<style></style>