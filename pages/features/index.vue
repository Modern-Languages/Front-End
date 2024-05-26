<template>
  <div class="ma-0 pa-5">
    <v-row class="ma-0 pa-0">
      <v-spacer />

      <v-btn icon>
        <img src="../../assets/students/bell.svg" width="24px" height="24px">
      </v-btn>

      <v-btn class="students-button-log-out" elevation="0">
        <span class="students-button-log-out-text">Log out</span>
      </v-btn>
    </v-row>

    <v-row class="ma-0 pa-0 mt-16" align="center" justify="center">
      <p class="ma-0 pa-0 mt-16 comming-soon">Cooming Soon</p>
    </v-row>
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
