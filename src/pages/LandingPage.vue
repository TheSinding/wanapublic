<template>
  <div>
    <header class="purple-bg pt-5" id="home">
      <b-container>
        <b-row class="justify-content-center">
          <h1 class="font-logo text-white">What A Nice API!</h1>
        </b-row>
      </b-container>
      <div class="container mt-5">
        <h1 class="text-bold">Put some love in your app!</h1>
        <p class="tagline ">What a nice API, is a free, very simple REST
          API, which spread love.
          <br/> Use it to greet your customers, make
          a cute website saying nice things, have it
          greet you, every time you open a new bash
          terminal.
        </p>
      </div>
      <div class="code-example-holder mt-5 ">
        <div class="col-lg-6 col-md-12 mx-auto ">
          <h2 class="text-white font-title ">It's as simple as doing</h2>
          <pre class="code-example text-left shadow
      " v-highlightjs><code class="bash ">curl --request GET https://api.whataniceapi.com/sentences/random</code></pre>
          <p class="text-white ">Example response</p>
          <pre class="code-example text-left shadow
      " v-highlightjs="sentenceFomatted "><code class="json "></code></pre>
        </div>
      </div>
    </header>
    <section class="pt-5 ">
      <b-container>
        <b-row class="pb-5 justify-content-center ">
          <h1 class="font-bold ">Metrics</h1>
        </b-row>
        <b-row class=" justify-content-center ">
          <h2 class="col-lg-6 col-md-12 font-bold
      font-text ">Total sentences served
            <span class="served float-right ">{{ aggregation.used }}
            </span>
          </h2>
        </b-row>
        <b-row class="pb-5 justify-content-center">
          <h2 class="col-lg-6 col-md-12 font-bold
      font-text ">Total sentences
            <span class="served float-right ">{{ aggregation.count }}
            </span>
          </h2>
        </b-row>
      </b-container>

    </section>
    <section class="pt-5 details ">
      <b-container>
        <!-- <b-row class="justify-content-center
      mb-4 ">
          {{button}}
          <b-button-group v-model="button ">
            <b-button>NodeJS</b-button>
            <b-button>Axios</b-button>
            <b-button>Curl</b-button>
            <b-button>PHP</b-button>
          </b-button-group>
        </b-row> -->
        <b-row class=" justify-content-center ">
          <h1 class="text-bold font-text ">How to use it</h1>
        </b-row>
        <b-row class="mt-3 justify-content-center ">
          <h3 class="col-lg-6 col-md-12 font-text
      text-left ">API URL</h3>
          <div class="col-lg-6 col-md-12 row ">
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code class="http ">https://api.whataniceapi.com/</code></pre>
          </div>
        </b-row>
        <b-row class="justify-content-center ">
          <h3 class="text-bold font-text mt-5 ">Sentences</h3>
        </b-row>
        <b-row class="mt-3 justify-content-center ">
          <h3 class="col-lg-6 col-md-12 font-text
      text-left ">Get a random sentence</h3>
          <div class="col-lg-6 col-md-12 row ">
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code class="http ">GET /sentence/random</code></pre>
          </div>
        </b-row>
        <b-row class="mt-3 justify-content-center ">
          <h3 class="col-lg-6 col-md-12 font-text
      text-left ">Get a specific sentence</h3>
          <div class="col-lg-6 col-md-12 row ">
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code class="http ">GET /sentence/{id}</code></pre>
          </div>
        </b-row>
        <b-row class="mt-3 justify-content-center ">
          <h3 class="col-lg-6 col-md-12 font-text
      text-left ">Create a new sentence</h3>
          <div class="col-lg-6 col-md-12 row ">
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code class="http ">POST /sentences</code></pre>
            <p>Headers</p>
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code class="http ">Content-Type: application/json; charset=utf-8</code></pre>
            <p>Example JSON data</p>
            <pre class="code-example w-100 text-left
      shadow " v-highlightjs><code>{{ jsonFormatter(exampleInput)}}</code></pre>
          </div>
        </b-row>
      </b-container>

    </section>
  </div>
</template>

<script>
import client from '../vendors/feathers/'

export default {
  name: 'home',
  data () {
    return {
      aggregation: {},
      language: 'nodejs',
      button: {},
      sourcecode: {
        _id: '5b8d3750cfae532b8e83e3d6',
        sentiment: { score: 0.800000000, magnitude: 0.800000000 },
        sentence: 'I love you!',
        language: 'en',
        createdAt: '2018-09-03T13:29:52.301Z',
        updatedAt: '2018-09-03T13:29:52.301Z'
      },
      exampleInput: {
        document: {
          type: 'PLAIN_TEXT // Required',
          content: '{your sentence} // Required'
        },
        metadata: {
          name: '{your name} // Required'
        }
      },
      sentenceFomatted: {}
    }
  },
  async  created () {
    const sentencesAggregation = await client.service('aggregations').find({ query: { type: 'sentences' } })
    this.aggregation = sentencesAggregation.data[0]
    const sentence = await client.service('sentences').get('random')
    this.sourcecode = sentence[0]
  },
  methods: {
    changeLanguage (event) {
      console.log(event)
    },
    jsonFormatter (data) {
      return JSON.stringify(data, null, 2)
    }
  },
  watch: {
    sourcecode: {
      immediate: true,
      handler (value) {
        this.sentenceFomatted = this.jsonFormatter(this.sourcecode)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Boogaloo|Caveat|Chelsea+Market|Cookie|Flavors|Knewave|Love+Ya+Like+A+Sister|Luckiest+Guy|Merienda|Montserrat');

.font-love-ya-like-a-sister, .font-sentence, .font-logo {
  font-family: 'Love Ya Like A Sister', cursive;
}

.font-title, h1, h2, h3, h4, h5, h6 {
  font-family: 'Comfortaa', cursive;
}

.font-text, p, span, #text {
  font-family: 'Ubuntu', sans-serif;
}

.logo {
  background: transparent !important;
  position: absolute;
}

.served {
  color: #654ea3;
}

.details {
  background-color: #34393f;
  color: white;
  padding-bottom: 10%;
}

.text-bold {
  font-weight: 700;
}

.masthead {
  color: white;
  background: #957bbe;
  /* height: 100vh; */
}

.purple-bg {
  /* background-color: #957bbe !important; */
  background: #654ea3; /* fallback for old browsers */
  /* background: -webkit-linear-gradient(120deg, #654ea3, #eaafc8); */
  background: linear-gradient(120deg, #654ea3, #eaafc8); /* W3C, IE 10+ */
  /* background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
}

.code-example {
  border-radius: 8px;
}
</style>
