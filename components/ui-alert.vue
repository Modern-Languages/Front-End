<template>
  <v-alert :color="color" :type="type" shaped prominent style="position: absolute !important; top: 0; left: 0; ; z-index: 100 !important;">
    <span style="color: white; font-size: 17px; margin-left: 15px; text-transform: capitalize;">{{ text }}</span>
  </v-alert>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
