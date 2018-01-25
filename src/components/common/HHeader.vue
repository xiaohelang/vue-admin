<template>
  <div class="header">
    {{msg}}
  </div>
</template>

<script>
import { Row, Col } from 'element-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Row,
    Col
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .header { width: 100%; height: 60px; background: red;}

</style>
