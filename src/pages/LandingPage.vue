<template>
  <div class="row align-content-stretch my-auto">
      <div class="col-lg-6 col-md-12 mx-auto">
        <h1 class="text-white font-bold">Put some love in your app!</h1>
        <div class="text-white">
          <p>What a nice API, is a very simple REST API (streaming
          is coming), that speaks nicely to you. Use
          it to greet your customers, make a cute website
          saying nice things, have it greet you every
          time you open a new bash terminal. It's free</p>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
          <h2 class="text-white font-title">It's as simple as doing</h2>
          <pre class="code-example shadow" v-highlightjs><code class="bash">curl --request GET https://api.whataniceapi.com/sentences/random</code></pre>
          <p class="text-white">Example output</p>
          <pre class="code-example shadow" v-highlightjs="sentenceFomatted"><code class="json"></code></pre>
      </div>
    </div>
</template>

<script>
import client from '../vendors/feathers/'
export default {
  name: 'home',
  data () {
    return {
      sourcecode: {
        _id: '5b8d3750cfae532b8e83e3d6',
        sentiment: { score: 0.800000000, magnitude: 0.800000000 },
        sentence: 'I love you!',
        language: 'en',
        createdAt: '2018-09-03T13:29:52.301Z',
        updatedAt: '2018-09-03T13:29:52.301Z'
      },
      sentenceFomatted: {}
    }
  },
  async  created () {
    const sentence = await client.service('sentences').get('random')
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
<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Ubuntu');

.font-title, h1, h2, h3, h4, h5, h6 {
  font-family: 'Comfortaa', cursive;
}

.font-text, p, span, #text {
  font-family: 'Ubuntu', sans-serif;
}

.font-bold {
  font-weight: 700;
}

.masthead {
  color: white;
  background: #957bbe;
  /* height: 100vh; */
}

.code-example {
  border-radius: 8px;
}
</style>
