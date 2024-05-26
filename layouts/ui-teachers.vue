<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
      relative
      fill-width
    >
      <v-btn
        class="teacher-bar-export-btn"
        text
      >
        <span class="teacher-bar-export-text">
          Export CSV
        </span>
      </v-btn>

      <v-btn
        class="rounded teacher-bar-add-btn"
        elevation="0"
        color="#509CDB"
      >
        <span class="teacher-bar-add-text">
          Add Teachers
        </span>
      </v-btn>

      <v-spacer />

      <v-btn
        icon
      >
        <v-icon class="teacher-bar-export-text" color="#424242">
          mdi-bell-outline
        </v-icon>
      </v-btn>

      <v-btn
        class="teacher-bar-export-btn"
        text
      >
        <span class="teacher-bar-logout-text">
          Log out
        </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Teachers',

  data () {
    return {
      existingTeachers: false
    }
  }
}
</script>

<style scoped>
.teacher-bar-export-btn {
  width: Hug (106px)px;
  height: Hug (41px)px;
  padding: 12px 14px 12px 14px;
  opacity: 0px;
}

.teacher-bar-export-text {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.36px;
  text-align: center;
  color: #2671B1;
  text-transform: none;
}
.teacher-bar-add-btn {
  width: Hug (118px)px;
  height: Hug (41px)px;
  padding: 12px 14px 12px 14px;
  background-color: #2671B1;
}

.teacher-bar-add-text {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.36px;
  text-align: center;
  text-transform: none;
  color: white;
}

.teacher-bar-logout-text {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.36px;
  text-align: center;
  color: #424242;
  text-transform: none;
}

.teachers-btn-add-filter {
  max-width: 132.49px;
  padding: 16px 0px 0px 0px;
  background: #FFFFFF;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
}

.teachers-search {
  max-width: 819.51px;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  background: #8A8A8A;
  padding: 16px 20px 16px 16px;
}

.teacher-message {
  font-family: Kumbh Sans;
  position: fixed;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #4F4F4F;
}

.teachers-btn-support {
  width: 181px !important;
  height: 60px !important;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
  left: 110%;
  top: 70%;
}
</style>
