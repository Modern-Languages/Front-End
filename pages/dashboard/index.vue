<template>
  <div class="ma-0 pa-0">
    <v-row class="ma-0 pa-7 pl-16 dashboard-learn">
      <v-col cols="7" class="ma-0 pa-0 pl-16">
        <v-row class="ma-0 pa-0 pl-5">
          <p class="ma-0 pa-0 dashboard-learn-title">
            Learn  how to launch faster
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 pl-5">
          <p class="ma-0 pa-0 dashboard-learn-text">
            watch our webinar for tips from our experts and get a limited time offer.
          </p>
        </v-row>
      </v-col>

      <v-col class="ma-0 pa-0 px-16 ml-13">
        <v-row class="ma-0 pa-0 align-center" align="center">
          <v-col cols="5" class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
            <img src="@/assets/dashboard/bell.svg" width="28px" height="28px">
          </v-col>

          <v-col cols="4" class="ma-0 pa-0 align-center justify-center" align="center">
            <v-btn class="ma-0 pa-0 dashboard-button-log-out">
              <p class="ma-0 pa-0 dashboard-button-log-out-text">
                Log out
              </p>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-16 pr-0 pt-13">
      <v-col class="ma-0 pa-0 pl-16">
        <v-row class="ma-0 pa-0 pl-5">
          <p class="ma-0 pa-0 dasboard-title">
            Welcome to your dashboard, Udemy school
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 px-8">
          <v-col class="ma-0 pa-0 px-16">
            <v-row class="ma-0 pa-0 mt-6">
              <p class="ma-0 pa-0 dasboard-subtitle">
                Uyo/school/@teachable.com
              </p>
            </v-row>

            <v-row class="ma-0 pa-0 mt-16">
              <v-col class="ma-0 pa-0 mt-2">
                <v-row class="ma-0 pa-0">
                  <v-col cols="1" class="ma-0 pa-0">
                    <img src="@/assets/dashboard/admins.svg" width="36px">
                  </v-col>

                  <v-col class="ma-0 pa-0 ml-3">
                    <v-row class="ma-0 pa-0">
                      <p class="ma-0 pa-0 dashboard-topic">
                        Add other admins
                      </p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4">
                      <p class="ma-0 pa-0 dashboard-topic-description">
                        Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!
                      </p>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-8">
                  <v-col cols="1" class="ma-0 pa-0">
                    <img src="@/assets/dashboard/classes.svg" width="36px">
                  </v-col>

                  <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                      <p class="ma-0 pa-0 dashboard-topic">
                        Add classes
                      </p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4">
                      <p class="ma-0 pa-0 dashboard-topic-description">
                        Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!
                      </p>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-8">
                  <v-col cols="1" class="ma-0 pa-0">
                    <img src="@/assets/dashboard/students.svg" width="36px">
                  </v-col>

                  <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                      <p class="ma-0 pa-0 dashboard-topic">
                        Add students
                      </p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4">
                      <p class="ma-0 pa-0 dashboard-topic-description">
                        Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-col cols="3" class="ma-0 pa-0 pb-16 d-flex flex-column justify-end">
      <v-btn class="ma-0 pa-0 dashboard-button-support">
        <v-row class="ma-0 pa-0" align="center">
          <v-col cols="3" class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
            <v-row class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
              <img src="@/assets/dashboard/support.svg" width="13.3px" height="13.3px">
            </v-row>
          </v-col>

          <v-col class="ma-0 pa-0">
            <p class="ma-0 pa-0 dashboard-button-support-text">
              Support
            </p>
          </v-col>

          <v-col cols="4" class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
            <v-row class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
              <img src="@/assets/dashboard/arrow.svg" width="8px" height="4px">
            </v-row>
          </v-col>
        </v-row>
      </v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: 'ui-nav',
  data () {
    return {
      //
    }
  }
}
</script>
