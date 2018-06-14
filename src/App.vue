<template>
  <div id="app">
    <Ribbon />
    <main v-if="vue && react">
      <div v-if="vue > react">
        <span class="emoji">🎉</span>
        <h1>yaaaass!</h1>
        <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener">+{{vue-react}} ⭐️</a>
      </div>
      <div v-else>
        <span class="emoji">✊</span>
        <h1>soon</h1>
        <h2></h2>
        <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener">-{{react-vue}} ⭐️</a>
        <br><br><br>
        <img class="itshappening" src="https://media.giphy.com/media/sa5Hd8qIVK6Eo/giphy.gif">
      </div>
    </main>
  </div>
</template>

<script>
import Ribbon from '@/components/Ribbon'

export default {
  name: 'app',
  components: {
    Ribbon
  },
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

<style>
  body {
    margin: 0;
  }
  #app {
    background: #42b983;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h1, a {
    font-weight: bolder;
    line-height: 1em;
  }
  h1 {
    margin: -0.2em auto 0.2em auto;
    font-size: 20vw;
  }
  a, a:hover, a:visited {
    color: white;
    text-decoration: none;
    font-size: 4vw;
  }
  .emoji {
    font-size: 128px;
  }

  .itshappening {
    width: 90vw;
    height: auto;
    max-width: 500px;
  }

  @media screen and (max-width: 1024px) {
    .emoji {
      font-size: 12vw;
    }
  }

</style>
