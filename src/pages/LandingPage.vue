<template>
  <div class="row  align-content-stretch  h-100">
    <div class="col-lg-12 my-auto">
      <div class="header-content mx-auto">
        <h1 class="mb-5 text-white">Put some love in your app!</h1>
        <h2 class="mb-5 text-white">It's as simple as doing</h2>
        <pre class="code-example shadow" v-highlightjs><code class="bash">curl --request GET https://api.whataniceapi.com/v1/sentences/random</code></pre>
        <p class="text-white">Example output</p>
        <pre class="code-example shadow" v-highlightjs="sentenceFomatted"><code class="json"></code></pre>
      </div>
    </div>
    <div class="device-mockup iphone6_plus portrait white">
      <div class="device text-white">
        What a nice API, is a very simple REST API (streaming
        is coming), that speaks nicely to you. Use
        it to greet your customers, make a cute website
        saying nice things, have it greet you every
        time you open a new bash terminal. It's free
      </div>
    </div>
  </div>
</template>

<script>
import client from '../vendors/feathers/'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sourcecode: {
        _id: '5b8d3750cfae532b8e83e3d6',
        sentence: 'I love you!',
        sentiment: { score: 0.800000000, magnitude: 0.800000000 },
        language: 'en',
        createdAt: '2018-09-03T13:29:52.301Z',
        updatedAt: '2018-09-03T13:29:52.301Z'
      },
      sentenceFomatted: {}
    }
  },
  async  created () {
    const sentence = await client.service('sentences').find({ query: { random: true } })
    this.sourcecode = sentence[0]
  },
  watch: {
    sourcecode: {
      immediate: true,
      handler (value) {
        this.sentenceFomatted = JSON.stringify(this.sourcecode, null, 2)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masthead {
  color: white;
  background: #957bbe;
  /* height: 100vh; */
}
.code-example {
  border-radius: 8px;
}
</style>
