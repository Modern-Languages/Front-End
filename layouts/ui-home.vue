<template>
  <v-app class="ma-0 pa-0">
    <v-main class="ma-0 pa-0">
      <v-sheet
        class="pa-0 ma-0"
        style="height: 0px !important;"
      >
        <v-col class="ma-0 pa-0">
          <v-app-bar class="pa-0 ma-0" height="100" color="#100F57" elevation="0">
            <v-col cols="3" class="ma-0 pa-0 d-flex justify-center align-center" justify="center" align="center">
              <img src="../assets/home/logo.png" height="26" cover>
            </v-col>

            <v-spacer />

            <v-col cols="5" class="d-flex justify-center align-center" align="center" justify="center">
              <v-row justify="center" align="center" style="justify-content: center !important; margin: 20px 0;">
                <router-link v-for="opcion in opciones" :key="opcion.title" :to="opcion.path" style="text-decoration: none;">
                  <v-col style="color: white !important; font-size: 12px; padding: 0px 25px;">
                    {{ opcion.title }}
                  </v-col>
                </router-link>
              </v-row>
            </v-col>

            <v-spacer />

            <v-col cols="3" class="ma-0 pa-0 d-flex justify-center align-center" justify="center" align="center">
              <v-btn rounded color="#0A92DD" class="ma-0 pa-6" to="/login">
                <span style="text-transform: none; color: white; font-size: 12px; font-weight: 700;">LogIn</span>
              </v-btn>
            </v-col>
          </v-app-bar>

          <v-row class="pa-0 ma-0 d-flex justify-center align-center" height="100vh" align="center" justify="center">
            <Nuxt />
          </v-row>

          <v-footer class="ma-0 pa-5 pt-16 pb-16" color="#100F57" padless>
            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0" justify="center">
                <v-col cols="8" class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0 justify-center align-center">
                    <v-col cols="3" class="ma-0 pa-0">
                      <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 home-footer-title-option">
                          Lorem ipsum dolor
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-4">
                        <p class="ma-0 pa-0 home-footer-option">
                          Home jjjjjjjjj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Pricing hfdhdfj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Use cases jsksi
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Location hdhdhd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          FAQ kdkdkdd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Company jdksodk
                        </p>
                      </v-row>
                    </v-col>

                    <v-col cols="3" class="ma-0 pa-0">
                      <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 home-footer-title-option">
                          Lorem ipsum dolor
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-4">
                        <p class="ma-0 pa-0 home-footer-option">
                          Home jjjjjjjjj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Pricing hfdhdfj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Use cases jsksi
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Location hdhdhd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          FAQ kdkdkdd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Company jdksodk
                        </p>
                      </v-row>
                    </v-col>

                    <v-col cols="3" class="ma-0 pa-0">
                      <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 home-footer-title-option">
                          Lorem ipsum dolor
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-4">
                        <p class="ma-0 pa-0 home-footer-option">
                          Home jjjjjjjjj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Pricing hfdhdfj
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Use cases jsksi
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Location hdhdhd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          FAQ kdkdkdd
                        </p>
                      </v-row>

                      <v-row class="ma-0 pa-0 mt-2">
                        <p class="ma-0 pa-0 home-footer-option">
                          Company jdksodk
                        </p>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0">
                    <p class="ma-0 pa-0 home-footer-title">
                      Lorem ipsum dolor
                    </p>
                  </v-row>

                  <v-row class="ma-0 pa-0 mt-5">
                    <p class="ma-0 pa-0 home-footer-text">
                      Home jjjjjjjjj
                    </p>
                  </v-row>

                  <v-row class="ma-0 pa-0 mt-10 home-footer-consultation justify-center align-center" align="center" justify="center">
                    <v-col cols="7" class="ma-0 pa-0" align="center" justify="center">
                      <p class="ma-0 pa-0 home-footer-consultation-text">
                        Get your free consultation now
                      </p>
                    </v-col>

                    <v-col class="ma-0 pa-0 align-center justify-center" align="center" justify="center">
                      <v-btn class="ma-0 pa-0 home-footer-consultation-bottom align-center justify-center">
                        <p class="ma-0 pa-0 home-footer-consultation-bottom-text">
                          get started
                        </p>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-row class="ma-0 pa-0 mt-16">
                <v-col cols="8" class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0" justify="center">
                    <v-col cols="9" class="ma-0 pa-0">
                      <p class="ma-0 pa-0 home-footer-copyright">
                        @2022 Scholl management. Copyright and all rigts reserved.
                      </p>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0">
                    <v-col cols="2" class="ma-0 pa-0">
                      <p class="ma-0 pa-0 home-footer-conditions">
                        Privacy
                      </p>
                    </v-col>

                    <v-col cols="2" class="ma-0 pa-0">
                      <p class="ma-0 pa-0 home-footer-conditions">
                        Security
                      </p>
                    </v-col>

                    <v-col cols="2" class="ma-0 pa-0">
                      <p class="ma-0 pa-0 home-footer-conditions">
                        Terms
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-footer>
        </v-col>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      opciones: [
        { title: 'Home', path: '/' },
        { title: 'Pricing', path: '/' },
        { title: 'Use Cases', path: '/' },
        { title: 'Location', path: '/' },
        { title: 'FAQ', path: '/' },
        { title: 'Company', path: '/' }
      ]
    }
  }
}
</script>
