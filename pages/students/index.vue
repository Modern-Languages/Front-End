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

        <v-btn class="ma-0 pa-0 ml-3 students-button-add-students" elevation="0" @click="show_add_student = true">
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
              <p class="ma-0 pa-0 students-section-title">
                No students at this time
              </p>
            </v-row>

            <v-row class="ma-0 pa-0" align="center" justify="center">
              <p class="ma-0 pa-0 students-section-text">
                Students will appear here after they enroll in your school.
              </p>
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

    <v-dialog v-model="show_add_student" class="ma-0 pa-0" content-class="students-dialog">
      <v-col class="ma-0 pa-16">
        <v-row class="ma-0 pa-0 mt-10 px-8">
          <p class="ma-0 pa-0 students-dialog-title">
            Add Students
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 mt-8 px-8">
          <v-col cols="2" class="ma-0 pa-0">
            <p class="ma-0 pa-0 students-dialog-subtitle">
              Manually
            </p>
          </v-col>

          <v-col class="ma-0 pa-0">
            <p class="ma-0 pa-0 students-dialog-subtitle">
              Import CSV
            </p>
          </v-col>
        </v-row>

        <v-row class="ma-0 pa-0 pl-8 pr-16">
          <v-form class="ma-0 pa-0">
            <v-row class="ma-0 pa-0 mt-13">
              <p class="ma-0 pa-0 students-dialog-input-title">
                Name
              </p>
            </v-row>

            <v-row class="ma-0 pa-0 mt-1">
              <v-col cols="3" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_name"
                  type="text"
                  class="ma-0 pa-0 students-dialog-text-field"
                  height="42"
                  hide-details
                  outlined
                />
              </v-col>

              <v-col cols="1" />

              <v-col cols="3" class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                  <v-select
                    v-model="student_class"
                    class="ma-0 pa-0 students-dialog-text-field"
                    height="42"
                    hide-details
                    placeholder="Class"
                    outlined
                  />
                </v-row>
              </v-col>

              <v-col cols="1" />

              <v-col cols="3" class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                  <v-select
                    v-model="student_gender"
                    class="ma-0 pa-0 students-dialog-text-field"
                    height="42"
                    hide-details
                    placeholder="Gender"
                    outlined
                  />
                </v-row>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-13">
              <v-col cols="5" class="ma-0 pa-0">
                <p class="ma-0 pa-0 students-dialog-input-title">
                  Email address
                </p>
              </v-col>

              <v-col cols="1" />

              <v-col cols="5" class="ma-0 pa-0">
                <p class="ma-0 pa-0 students-dialog-input-title">
                  Phone number
                </p>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-1">
              <v-col cols="5" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_email"
                  type="email"
                  class="ma-0 pa-0 students-dialog-text-field"
                  height="7"
                  hide-details
                  outlined
                />
              </v-col>

              <v-col cols="1" />

              <v-col cols="5" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_phone"
                  type="text"
                  class="ma-0 pa-0 students-dialog-text-field"
                  height="7"
                  hide-details
                  outlined
                />
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-13">
              <v-col cols="5" class="ma-0 pa-0">
                <p class="ma-0 pa-0 students-dialog-input-title">
                  Password
                </p>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-1">
              <v-col cols="5" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_email"
                  type="password"
                  class="ma-0 pa-0 students-dialog-text-field"
                  height="7"
                  hide-details
                  outlined
                />
              </v-col>
            </v-row>
          </v-form>

          <v-card-actions class="ma-0 pa-0 mt-16" style="width: 100% !important;">
            <v-col cols="5" class="ma-0 pa-0">
              <v-row class="ma-0 pa-0">
                <v-btn class="ma-0 pa-0 students-dialog-button-add-another" elevation="0" to="">
                  <v-col cols="1" class="ma-0 pa-0">
                    <img src="../../assets/students/add.svg" height="20" width="20" cover>
                  </v-col>

                  <v-col class="ma-0 pa-0">
                    <span class="ma-0 pa-0 students-dialog-button-add-another-text">Add another</span>
                  </v-col>
                </v-btn>

                <v-spacer class="ma-0 pa-0" />

                <v-btn class="ma-0 pa-0 students-dialog-button-add-students" elevation="0" to="">
                  <span class="ma-0 pa-0 students-dialog-button-add-students-text">Add student</span>
                </v-btn>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-row>
      </v-col>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'ui-nav',
  data () {
    return {
      existing_students: false,
      show_add_student: false,
      student_name: '',
      student_class: ''
    }
  }
}
</script>
