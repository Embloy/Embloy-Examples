<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://about.embloy.com" target="_blank" rel="noopener">About</a></li>
      <li><a href="https://postman.com/embloy" target="_blank" rel="noopener">Postman</a></li>
      <li><a href="https://github.com/embloy" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://github.com/embloy/embloy-examples" target="_blank" rel="noopener">This repository</a></li>
    </ul>
    <h3>Contact</h3>
    <ul>
      <li><a href="mailto:bortolanoffice@embloy.com" target="_blank" rel="noopener">Carlo Bortolan</a></li>
      <li><a href="mailto:hummeloffice@embloy.com" target="_blank" rel="noopener">Jan Hummel</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
