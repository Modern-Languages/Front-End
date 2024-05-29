<template>
  <v-container fill-height data-app>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="centered"
        align="center"
        justify="center"
      >
        <h1
          :hidden="stepperEnable === false && e1 === 1 ? false : true"
          class="text-title"
        >
          {{ title[0] }}
        </h1>

        <h1
          :hidden="stepperEnable === true && e1 === 2 ? false : true"
          class="text-title"
        >
          {{ title[1] }}
        </h1>

        <h1
          :hidden="stepperEnable === true && e1 === 3 || e1 === 4 ? false : true"
          class="text-title"
        >
          {{ title[2] }}
        </h1>

        <v-card
          v-if="stepperEnable===false"
          flat
          max-width="290px"
          style="padding: 21px;"
        >
          <v-card-subtitle
            class="text-subtitle"
          >
            It is our great pleasure to have you on board!
          </v-card-subtitle>

          <v-card-text style="padding: 0;">
            <v-form
              ref="form0"
              v-model="validForm[0]"
              lazy-validation
            >
              <v-text-field
                v-model="nameAdmin"
                class="rounded fields"
                flat
                solo
                dense
                outlined
                placeholder="Enter the name of admin"
                required
                type="text"
                :rules="requiredRule"
              />
              <v-text-field
                v-model="nameSchool"
                class="rounded fields"
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
                v-model="emailSchool"
                class="rounded fields"
                flat
                solo
                dense
                outlined
                placeholder="Enter the school email"
                required
                type="email"
                :rules="emailRule"
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
              class="btnNext"
              @click="validForms(0)"
            >
              Next
            </v-btn>
          </v-card-actions>
          <v-row style="margin-top: 10px;">
            <v-col cols="12">
              <span class="already-account">Already have an account?</span>
              <a href="/login" class="already-account" style="text-decoration: none; color: #2D88D4; font-weight: 700;">Sign In</a>
            </v-col>
          </v-row>
        </v-card>

        <v-stepper
          v-if="stepperEnable===true"
          v-model="e1"
          elevation="0"
          flat
          alt-labels
        >
          <v-stepper-items
            style="max-width: 512px; height: 354px;"
          >
            <v-stepper-content step="2">
              <v-card
                flat
                max-width="290px"
                style="padding: 21px;"
              >
                <v-card-text style="padding: 0;">
                  <v-form
                    ref="form1"
                    v-model="validForm[1]"
                    lazy-validation
                    align="start"
                    justify="start"
                  >
                    <span class="password-title">Choose a password</span>
                    <v-text-field
                      v-model="password"
                      class="rounded fields"
                      flat
                      solo
                      dense
                      outlined
                      required
                      type="password"
                      :rules="passwordRule"
                    />
                    <span class="fields">Confirm password</span>
                    <v-text-field
                      class="rounded fields"
                      flat
                      solo
                      dense
                      outlined
                      required
                      type="password"
                      :rules="confirmPasswordRule"
                    />
                    <span class="already-account">Must be at least 8 characters.</span>
                  </v-form>
                </v-card-text>

                <v-card-actions
                  style="padding: 0; margin-top: 20px;"
                >
                  <v-btn
                    elevation="0"
                    color="#2D88D4"
                    block
                    height="42px"
                    class="btnNext"
                    @click="validForms(1)"
                  >
                    Next
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                flat
                max-width="290px"
                style="padding: 21px;"
              >
                <v-card-text style="padding: 0;">
                  <v-form
                    ref="form2"
                    v-model="validForm[2]"
                    lazy-validation
                    align="center"
                    justify="center"
                  >
                    <v-select
                      v-model="numberStaff"
                      :items="itemsStaff"
                      class="rounded fields"
                      placeholder="Number of staff"
                      flat
                      solo
                      dense
                      outlined
                      required
                      :rules="requiredRule"
                    />
                    <v-text-field
                      v-model="schoolAddress"
                      class="rounded fields"
                      placeholder="School address"
                      flat
                      solo
                      dense
                      outlined
                      required
                      :rules="requiredRule"
                    />
                  </v-form>
                </v-card-text>

                <v-card-actions
                  style="padding: 0; margin-top: 20px;"
                >
                  <v-btn
                    elevation="0"
                    color="#2D88D4"
                    block
                    height="42px"
                    class="btnNext"
                    @click="validForms(2)"
                  >
                    Next
                  </v-btn>
                </v-card-actions>

                <v-row style="margin-top: 10px;">
                  <v-col cols="12">
                    <span class="already-account">Must be at least 8 characters.</span>
                  </v-col>
                </v-row>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-btn
                elevation="0"
                color="#2D88D4"
                block
                height="42px"
                class="btnNext"
                @click="register()"
              >
                Register
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-header
            elevation="0"
            flat
            class="stepper-header"
          >
            <v-stepper-step
              color="#2D88D4"
              step="1"
              :complete="e1 > 1"
              class="headers-stepper-title"
            >
              Your details
              <small class="headers-stepper-small">Name and email</small>
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              color="#2D88D4"
              step="2"
              edit-icon="mdi-check"
              :complete="e1 > 2"
              class="headers-stepper-title"
            >
              Choose a password
              <small class="headers-stepper-small">Choose a secure password</small>
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              color="#2D88D4"
              step="3"
              edit-icon="mdi-check"
              :complete="e1 > 3"
              class="headers-stepper-title"
            >
              Invite your team
              <small class="headers-stepper-small">Start collaborating</small>
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              color="#2D88D4"
              step="4"
              edit-icon="mdi-check"
              :complete="e1 > 4"
              class="headers-stepper-title"
            >
              Upload school’s document
              <small class="headers-stepper-small">For account verification</small>
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // RANDOM
      title: [
        'Welcome, create your school account',
        'Udemy school, Choose your password',
        'Udemy school, Choose your staffs'
      ],
      validForm: [false, false, false],
      stepperEnable: false,

      // STEPPER
      e1: 1,

      // STEP 1
      nameAdmin: '',
      nameSchool: '',
      emailSchool: '',

      // STEP 2
      password: '',
      confirmPassword: '',

      // STEP 3
      numberStaff: '',
      itemsStaff: [
        'Staff 1',
        'Staff 2',
        'Staff 3',
        'Staff 4',
        'Staff 5',
        'Staff 6',
        'Staff 7',
        'Staff 8',
        'Staff 9',
        'Staff 10'
      ],
      schoolAddress: '',

      // RULES
      requiredRule: [
        v => !!v || 'This field is required'
      ],
      emailRule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters'
      ],
      confirmPasswordRule: [
        v => v === this.password || 'Password does not match'
      ]
    }
  },

  methods: {
    stepper () {
      this.stepperEnable = true
      this.e1 = 2
    },

    validForms (i) {
      if (i === 0) {
        this.validForm[i] = this.$refs.form0.validate()
        if (this.validForm[0]) {
          this.stepperEnable = true
          this.e1 = 2
        }
      } else if (i === 1) {
        this.validForm[i] = this.$refs.form1.validate()
        if (this.validForm[1]) {
          this.e1 = 3
        }
      } else if (i === 2) {
        this.validForm[i] = this.$refs.form2.validate()
        if (this.validForm[2]) {
          this.e1 = 4
        }
      }
    },

    register () {
      if (this.validForm[0] && this.validForm[1] && this.validForm[2]) {
        const url = '/signup'
        const data = {
          sch_email: this.emailSchool,
          sch_password: this.password,
          sch_usuario: this.nameAdmin,
          sch_nombre: this.nameSchool,
          sch_Staff: this.numberStaff,
          sch_direccion: this.schoolAddress
        }

        this.$axios.post(url, data)
          .then((res) => {
            if (res.data.message === 'Usuario Registrado Satisfactoriamente') {
              this.$router.push({ path: '/login' })
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('🚀 ~ register ~ error:', error)
          })
      }
    }
  }
}
</script>

<style scoped>
.text-title {
  font-family: Kumbh Sans;
  font-size: 36px;
  font-weight: 600;
  line-height: 44.65px;
  text-align: center;
  margin-bottom: 80px;
  color: #4F4F4F;
  letter-spacing: normal;
}

.text-subtitle {
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

.fields {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  max-width: 248px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btnNext {
  font-family: Kumbh Sans;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
  height: 42px;
}

.already-account {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #667085;
  text-decoration: none;
}

.headers-stepper-title {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
}

.headers-stepper-small {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

.stepper-header {
  max-width: 1008px;
  box-shadow: none;
}

.password-title {
  font-family: Kumbh Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}
</style>
