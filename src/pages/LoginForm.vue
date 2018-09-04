<template>
  <b-container class="h-100">
    <div class="row">
      <div class="mx-auto">
        <b-card title="Sign in" class="shadow-lg">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group label="Email address:" label-for="email">
              <b-form-input id="email" type="email" v-model="form.email"
                required placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <b-form-input id="password" type="password" v-model="form.password"
                required placeholder="Enter a new password">
              </b-form-input>
            </b-form-group>
            <b-btn variant="link" class="w-100" type="submit">Sign in</b-btn>
            <hr class="hr-text">
            <b-btn class="text-white nav-link" href="http://localhost:3030/auth/github">
              <i class="fab fa-github-square"></i>
              Sign in with Github
            </b-btn>
            <hr class="hr-text" data-content="or">
            <a class="btn btn-primary w-100" href="#/signup">Sign up</a>
          </b-form>
        </b-card>
      </div>

    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {

      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const { password, email } = this.form
      if (password === '') throw new Error('Wrong password')
      if (email === '') throw new Error('Wrong password')

      await this.$root.store.authenticateWithEmail(email, password)
      this.$router.push('/')
    },
    onReset () {

    }
  }
}
</script>

<style scoped>
a {
}
</style>
