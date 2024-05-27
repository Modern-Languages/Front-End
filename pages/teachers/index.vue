<template>
  <div class="ma-0 pa-5">
    <v-row class="ma-0 pa-0">
      <v-spacer />

      <v-btn icon>
        <img src="../../assets/teachers-students/bell.svg" width="24px" height="24px">
      </v-btn>

      <v-btn class="teachers-button-log-out" elevation="0" to="/">
        <span class="teachers-button-log-out-text">Log out</span>
      </v-btn>
    </v-row>

    <v-row class="ma-0 pa-0 pr-16 mt-8">
      <v-col cols="1" class="ma-0 pa-0">
        <p class="teachers-title">
          Teachers
        </p>
      </v-col>

      <v-spacer />

      <v-col class="ma-0 pa-0 pr-8" align="end" justify="end">
        <v-btn class="ma-0 pa-0 teachers-button-export-csv" elevation="0">
          <span class="ma-0 pa-0 teachers-button-export-csv-text">Export CSV</span>
        </v-btn>

        <v-btn class="ma-0 pa-0 ml-3 teachers-button-add-teachers" elevation="0" @click="show_add_teacher = true">
          <span class="ma-0 pa-0 teachers-button-add-teachers-text">Add Teachers</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0 px-16 mt-8">
      <v-col cols="auto" class="ma-0 pa-0 px-8">
        <v-select
          :items="items"
          placeholder="Add filter"
          class="teachers-button-add-filter"
          flat
          solo
          dense
        />
      </v-col>

      <v-col class="ma-0 pa-0 px-8 d-flex align-end">
        <v-text-field
          solo
          flat
          placeholder="Search for a student by name or email"
          class="teachers-search"
          height="49px"
          background-color="#FCFAFA"
        >
          <template #prepend-inner>
            <img class="ma-0 pa-0 mr-2" src="../../assets/teachers-students/search.svg" width="16px" height="16px">
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="!existing_teachers" class="ma-0 pa-0 px-16">
      <v-col class="ma-0 pa-0 px-8">
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pa-0 pb-16 teachers-section">
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pa-0 pb-7">
                <v-row class="ma-0 pa-0" align="center" justify="center">
                  <p class="ma-0 pa-0 teachers-section-title">
                    No Teachers at this time
                  </p>
                </v-row>

                <v-row class="ma-0 pa-0" align="center" justify="center">
                  <p class="ma-0 pa-0 teachers-section-text">
                    Teachers will appear here after they enroll in your school.
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

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

    <v-dialog v-model="show_add_teacher" class="ma-0 pa-0" content-class="teachers-dialog">
      <ui-add-teacher class="ma-0 pa-0" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'ui-nav',

  data () {
    return {
      existing_teachers: false,
      show_add_teacher: false,
      items: []
    }
  }
}
</script>
