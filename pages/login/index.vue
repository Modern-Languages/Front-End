<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="login-centered"
        align="center"
        justify="center"
      >
        <h1
          class="login-text-title"
        >
          Welcome, Log into you account
        </h1>

        <v-card
          flat
          max-width="290px"
          style="padding: 21px;"
        >
          <v-card-subtitle
            class="login-text-subtitle"
          >
            It is our great pleasure to have you on board!
          </v-card-subtitle>

          <v-card-text style="padding: 0;">
            <v-form>
              <v-text-field
                v-model="nameAdmin"
                class="rounded login-fields"
                flat
                solo
                dense
                outlined
                placeholder="Enter the name of school"
                required
                type="text"
                :rules="requiredRule"
              />
              <v-text-field
                v-model="password"
                class="rounded login-fields"
                flat
                solo
                dense
                outlined
                placeholder="Enter Password"
                required
                type="password"
                :rules="requiredRule"
              />
            </v-form>
          </v-card-text>

          <v-card-actions
            style="padding: 0;"
          >
            <v-btn
              elevation="0"
              color="#2D88D4"
              block
              height="42px"
              class="login-btnNext"
              @click="login()"
            >
              Next
            </v-btn>
          </v-card-actions>
          <v-row style="margin-top: 10px;">
            <v-col cols="12">
              <span class="login-already-account">Already have an account?</span>
              <a href="/signup" class="login-already-account" style="text-decoration: none; color: #2D88D4; font-weight: 700;">Sign Up</a>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      nameSchool: '',
      emailSchool: '',

      // RULES
      requiredRule: [
        v => !!v || 'This field is required'
      ]
    }
  },

  methods: {
    login () {
      // eslint-disable-next-line no-console
      return console.log('LOGIN')
    }
  }

}
</script>

<style scoped>
.login-text-title {
  font-family: Kumbh Sans;
  font-size: 36px;
  font-weight: 600;
  line-height: 44.65px;
  text-align: center;
  margin-bottom: 80px;
  color: #4F4F4F;
}

.login-text-subtitle {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
  max-width: 238px;
  line-height: 25px;
  padding: 0;
  margin-bottom: 40px;
}

.login-fields {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  max-width: 248px;
}

.login-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-btnNext {
  font-family: Kumbh Sans;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
  height: 42px;
}

.login-already-account {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #667085;
  text-decoration: none;
}
</style>
