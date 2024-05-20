<template>
  <v-container fill-height>
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
            <v-form>
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
              class="btnNext"
              @click="stepper()"
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
                  <v-form align="start" justify="start">
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
                    @click="e1 = 3"
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
                  <v-form align="center" justify="center">
                    <v-select
                      v-model="numberStaf"
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
                      v-model="schoolAdress"
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
                    @click="e1 = 4"
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
      title: ['Welcome, create your school account', 'Udemy school, Choose your password', 'Udemy school, Choose your staffs'],
      stepperEnable: false,

      // STEPPER
      e1: 1,

      // STEP 1
      nameAdmin: '',
      nameSchool: '',
      emailSchool: '',

      // RULES
      requiredRule: [
        v => !!v || 'This field is required'
      ]
    }
  },

  methods: {
    stepper () {
      this.stepperEnable = true
      this.e1 = 2
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
;
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
