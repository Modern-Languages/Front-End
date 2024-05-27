<template>
  <div class="ma-0 pa-5">
    <v-col v-if="!existing_students" class="ma-0 pa-0">
      <ui-nav-log-out-false class="ma-0 pa-0" />

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
            :items="items_add_filter"
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
              <img class="ma-0 pa-0 mr-2" src="../../assets/teachers-students/search.svg" width="16px" height="16px">
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row class="ma-0 pa-0 px-16">
        <v-col class="ma-0 pa-0 px-8">
          <v-row class="ma-0 pa-0">
            <v-col class="ma-0 pa-0 students-section">
              <v-row class="ma-0 pa-0" align="center" justify="center">
                <img src="../../assets/teachers-students/koala.png" width="340px" height="255px">
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
    </v-col>

    <v-col v-if="existing_students" class="ma-0 pa-0 px-10">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
          <v-btn class="ma-0 pa-0 students-button-export-csv" elevation="0">
            <span class="ma-0 pa-0 students-button-export-csv-text">Export CSV</span>
          </v-btn>

          <v-btn class="ma-0 pa-0 ml-3 students-button-add-students" elevation="0" @click="show_add_student = true">
            <span class="ma-0 pa-0 students-button-add-students-text">Add Student</span>
          </v-btn>
        </v-col>

        <v-spacer />

        <v-btn icon>
          <img src="../../assets/teachers-students/bell.svg" width="24px" height="24px">
        </v-btn>

        <v-btn class="students-button-log-out" elevation="0" to="/">
          <span class="students-button-log-out-text">Log out</span>
        </v-btn>
      </v-row>

      <v-row class="ma-0 pa-0">
        <v-col cols="9" class="ma-0 pa-0">
          <v-row class="ma-0 pa-0 mt-8">
            <v-col cols="auto" class="ma-0 pa-0">
              <v-select
                :items="items_add_filter"
                placeholder="Add filter"
                class="students-button-add-filter"
                flat
                solo
                dense
              />
            </v-col>

            <v-col class="ma-0 pa-0 pl-8 d-flex align-end">
              <v-text-field
                solo
                flat
                placeholder="Search for a student by name or email"
                class="students-search"
                height="49px"
                background-color="#FCFAFA"
              >
                <template #prepend-inner>
                  <img class="ma-0 pa-0 mr-2" src="../../assets/teachers-students/search.svg" width="16px" height="16px">
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row class="ma-0 pa-0 mt-3">
            <v-data-table
              :headers="students_headers"
              :items="students"
              :items-per-page="12"
              style="width: 100% !important;"
              hide-default-footer
              @click:row="selectStudent"
            >
              <template #body="{ items }">
                <tbody>
                  <tr v-for="(item, index) in items" :key="index" :class="{ 'students-table-row-selected': item === student }" @click="selectStudent(item)">
                    <td>{{ item.name }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.gender }}</td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-row>
        </v-col>

        <v-col v-if="student" class="ma-0 pa-0 px-16" style=" height: 100vh; align-content: center !important;">
          <v-row class="ma-0 pa-0" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-id">
              {{ student.id }}
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-3" align="center" justify="center">
            <img class="ma-0 pa-0 students-details-photo" :src="student.photo" width="180px" height="180px">
          </v-row>

          <v-row class="ma-0 pa-0 mt-5" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-name">
              {{ student.name }}
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-1" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-carrer">
              {{ student.class }}
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-6" align="center" justify="center">
            <img class="ma-0 pa-0 mx-2" src="../../assets/teachers-students/graduate.svg" width="36px" height="36px">
            <img class="ma-0 pa-0 mx-2" src="../../assets/teachers-students/phone.svg" width="36px" height="36px">
            <img class="ma-0 pa-0 mx-2" src="../../assets/teachers-students/email.svg" width="36px" height="36px">
          </v-row>

          <v-row class="ma-0 pa-0 mt-10">
            <p class="ma-0 pa-0 students-details-about">
              About
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-10">
            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  Age
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-text">
                  {{ student.age }}
                </p>
              </v-row>
            </v-col>

            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  Gender
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-text">
                  {{ student.gender }}
                </p>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="ma-0 pa-0 mt-10">
            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  People from the same class
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-1">
                <v-col cols="8" class="ma-0 pa-0 students-details-people-images">
                  <img
                    v-for="index in 5"
                    :key="index"
                    class="ma-0 pa-0 students-details-people"
                    src="https://i.pravatar.cc/150?img=3"
                    width="38px"
                    height="38px"
                  >
                </v-col>

                <v-col class="ma-0 pa-0 ml-2 d-flex flex-column justify-center">
                  <p class="ma-0 pa-0 students-details-people-more">
                    +12 more
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-dialog v-model="show_add_student" class="ma-0 pa-0" content-class="students-dialog">
      <v-col class="ma-0 pa-8 px-16">
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
                  <v-col cols="2" class="ma-0 pa-0">
                    <img src="../../assets/teachers-students/add.svg" height="20" width="20" cover>
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
      items_add_filter: [],
      student_photo: '',
      student_name: '',
      student_email: '',
      student_phone: '',
      student_gender: ['M', 'F'],
      student_class: '',
      students_headers: [
        { text: 'Name', value: 'name', align: 'left', sortable: true },
        { text: 'Student ID', value: 'id', align: 'left', sortable: true },
        { text: 'Email Address', value: 'email', align: 'left', sortable: false },
        { text: 'Class', value: 'class', align: 'left', sortable: true },
        { text: 'Gender', value: 'gender', align: 'left', sortable: false }
      ],
      students: [
        { photo: 'https://i.pravatar.cc/150?img=1', name: 'x', id: '1', email: 'a@a.com', class: 'x', gender: 'x', age: '1' },
        { photo: 'https://i.pravatar.cc/150?img=2', name: 'x', id: '2', email: 'a@a.com', class: 'x', gender: 'x', age: '1' }
      ],
      student: null
    }
  },
  methods: {
    selectStudent (student) {
      this.student = student
    }
  }
}
</script>
