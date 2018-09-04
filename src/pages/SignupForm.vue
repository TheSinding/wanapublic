<template>
    <b-container class="h-100">
        <div class="row align-items-center">
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group label="Email address:"
                                label-for="email"
                                description="We'll never share your email with anyone else.">
                    <b-form-input id="email"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Password" label-for="password">
                    <b-form-input id="password"
                                type="password"
                                v-model="form.password"
                                required
                                placeholder="Enter a new password">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Retype password" label-for="retyped-password">
                    <b-form-input id="retyped-password"
                                type="password"
                                v-model="form.retyped"
                                required
                                placeholder="Retype the password">
                    </b-form-input>
                </b-form-group>
                <b-btn type="submit">Sign up</b-btn>
            </b-form>
        </div>
    </b-container>
</template>

<script>
import client from '../vendors/feathers'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        retyped: ''
      }
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const { password, email, retyped } = this.form
      if (password !== retyped) throw new Error('Wrong password')

      await client.service('users').create({ email, password })
      this.$router.push('/users/success')
    },
    onReset () {

    }
  }
}
</script>
