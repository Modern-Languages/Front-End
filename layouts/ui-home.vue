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
              <v-btn rounded color="#0A92DD" class="ma-0 pa-6">
                <span style="text-transform: none; color: white; font-size: 12px; font-weight: 700;">LogIn</span>
              </v-btn>
            </v-col>
          </v-app-bar>

          <v-row class="pa-0 ma-0 d-flex justify-center align-center" height="100vh" align="center" justify="center">
            <Nuxt />
          </v-row>
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
