<template>
  <form @submit.prevent="addHeroes">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input v-model="HeroesInfo.heroesName" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <br />
      <input v-model="HeroesInfo.heroesGender" type="radio" value="男" />男
      <input v-model="HeroesInfo.heroesGender" type="radio" value="女" />女
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      HeroesInfo: {
        heroesName: "",
        heroesGender: "",
        cTime: new Date()
      }
    };
  },
  methods: {
    addHeroes() {
      this.$http
        .post("heroes", this.HeroesInfo)
        .then(() => {
          // 添加成功后跳转到英雄列表
          this.$router.push("/heroes");
        })
        .catch(() => {
          alert("添加失败!");
        });
    }
  }
};
</script>

<style ></style>