<template>
  <div id="app">
    <h1 v-if="vue > react">🎉 YES 🎉</h1>
    <h1 v-else>Soon...</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      react: 0,
      vue: 0
    }
  },
  beforeCreate () {
    fetch('https://api.github.com/repos/facebook/react')
      .then(response => response.json())
      .then(data => { this.react = data.stargazers_count })
    fetch('https://api.github.com/repos/vuejs/vue')
      .then(response => response.json())
      .then(data => { this.vue = data.stargazers_count })
  }
}
</script>
