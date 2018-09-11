<template>
    <b-container class="">
        <h1>Dashboard</h1>
        <div class="row h-100">
            <div class="row col-7">
                <div class="col-12">
                    <h1>Your apikey</h1>
                    <b-btn class="my-2" @click="generateKey">Generate new key</b-btn>
                    <pre class="code-example shadow" v-highlightjs="apikey.apikey"><code class="bash"></code></pre>
                </div>
            </div>

            <div class="row col-4">
                <h1>Your apikey</h1>
            </div>
        </div>
    </b-container>
</template>
<script>
import {keyService} from '../vendors/feathers/'
export default {
  props: ['user'],
  data () {
    return {
      apikey: {}
    }
  },
  async created () {
    this.getKey()
  },
  methods: {
    async getKey () {
      const query = await keyService.find()
      if (query.total === 0) return
      console.log(query)

      this.apikey = query.data[0]
      console.log(this.apikey)
    },
    async generateKey () {
      try {
        const key = await keyService.create({userId: this.user._id})
        this.apikey = key
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.code-example {
    border-radius: 3px;
}
</style>
