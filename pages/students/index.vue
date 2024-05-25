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

    <v-row class="ma-0 pa-0 pr-16 mt-8">
      <v-col cols="1" class="ma-0 pa-0">
        <p class="students-title">
          Students
        </p>
      </v-col>

      <v-spacer />

      <v-col class="ma-0 pa-0 pr-8" align="end" justify="end">
        <v-btn class="ma-0 pa-0 students-button-export-csv" elevation="0">
          <span class="ma-0 pa-0 students-button-export-csv-text">Export CSV</span>
        </v-btn>

        <v-btn class="ma-0 pa-0 ml-3 students-button-add-students" elevation="0">
          <span class="ma-0 pa-0 students-button-add-students-text">Add Student</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0 px-16 mt-8">
      <v-col cols="auto" class="ma-0 pa-0 px-8">
        <v-select
          :items="items"
          placeholder="Add filter"
          class="students-button-add-filter"
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
          class="students-search"
          height="49px"
          background-color="#FCFAFA"
        >
          <template #prepend-inner>
            <img class="ma-0 pa-0 mr-2" src="../../assets/students/search.svg" width="16px" height="16px">
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="!existing_students" class="ma-0 pa-0 px-16">
      <v-col class="ma-0 pa-0 px-8">
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pa-0 students-section">
            <v-row class="ma-0 pa-0" align="center" justify="center">
              <img src="../../assets/students/koala.png" width="340px" height="255px">
            </v-row>

            <v-row class="ma-0 pa-0 mt-10" align="center" justify="center">
              <p class="ma-0 pa-0 students-section-title">No students at this time</p>
            </v-row>

            <v-row class="ma-0 pa-0" align="center" justify="center">
              <p class="ma-0 pa-0 students-section-text">Students will appear here after they enroll in your school.</p>
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
  </div>
</template>

<script>
export default {
  layout: 'ui-nav',
  data () {
    return {
      existing_students: false
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

.techers-btn-add-filter {
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
