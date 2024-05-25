<template>
  <v-app class="ma-0 pa-0">
    <v-navigation-drawer app permanent width="241px" color="#152259">
      <v-sheet color="transparent" class="d-flex pa-4 justify-center align-center" height="170px">
        <v-col class="ma-0 pa-0 justify-center align-center">
          <v-row class="ma-0 pa-0 justify-center align-center">
            <img src="../assets/nav/logo.png" width="31.5%">
          </v-row>

          <v-row class="ma-0 pa-0 mt-4 justify-center align-center">
            <p class="ma-0 pa-0 justify-center align-center nav-title">Udemy Inter. school</p>
          </v-row>
        </v-col>
      </v-sheet>

      <v-divider style="border: 0.3px solid #BDBDBD;" />

      <v-col class="ma-0 pa-0 mt-4 justify-center align-center">
        <v-list class="ma-0 pa-0 d-flex flex-column align-center">
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            color="transparent"
            :to="item.route"
            link
            class="ma-0 pa-0 px-5 mb-2 nav-item"
            :class="{ 'nav-selected-item': selectedIndex === index }"
            @click="selectItem(index)"
          >
            <v-row class="ma-0 pa-0">
              <v-list-item-icon class="ma-0 pa-0">
                <img class="ma-0 pa-0" :src="item.icon" width="16px" height="16px">
              </v-list-item-icon>

              <v-list-item-content class="ma-0 pa-0 ml-2">
                <v-list-item-title class="ma-0 pa-0 nav-selected-item-text">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>

      <v-sheet color="transparent" class="d-flex ma-0 pa-0 mt-7 justify-center align-center v-navigation-drawer-footer" height="200">
        <v-list class="ma-0 pa-0 d-flex flex-column align-center">
          <v-list-item color="transparent" :to="link_footer" link class="ma-0 pa-0 px-5 mb-2 nav-item">
            <v-row class="ma-0 pa-0 justify-center align-center">
              <v-list-item-icon class="ma-0 pa-0">
                <img class="ma-0 pa-0" :src="link_footer.icon" width="16px" height="16px">
              </v-list-item-icon>

              <v-list-item-content class="ma-0 pa-0 ml-2">
                <v-list-item-title class="ma-0 pa-0 nav-selected-item-text">
                  {{ link_footer.text }}
                </v-list-item-title>
              </v-list-item-content>

              <v-col cols="3" class="ma-0 pa-0 justify-center align-center" align="center">
                <p class="ma-0 pa-0 nav-new-text justify-center align-center">NEW</p>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>

    <v-main>
      <v-container class="ma-0 pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedIndex: 0,
    links: [
      { icon: require('../assets/nav/dashboard_teachers.svg'), text: 'Dashboard', route: '/dashboard' },
      { icon: require('../assets/nav/dashboard_teachers.svg'), text: 'Teachers', route: '/teachers' },
      { icon: require('../assets/nav/students.svg'), text: 'Students / classes', route: 'students' },
      { icon: require('../assets/nav/billing_features.svg'), text: 'Billing', route: '' },
      { icon: require('../assets/nav/settings.svg'), text: 'Settings and profile', route: '' },
      { icon: require('../assets/nav/exams.svg'), text: 'Exams', route: '' }
    ],
    link_footer:
      { icon: require('../assets/nav/billing_features.svg'), text: 'Features', route: '' }
  }),
  methods: {
    selectItem (index) {
      this.selectedIndex = index
    }
  }
}
</script>
