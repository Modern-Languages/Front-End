<template>
  <div class="ma-0 pa-5">
    <v-row v-if="!existing_teachers" class="ma-0 pa-0">
      <ui-nav-log-out-false class="ma-0 pa-0" />
    </v-row>

    <v-row v-if="!existing_teachers" class="ma-0 pa-0 pr-16 mt-8">
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

    <v-row v-if="!existing_teachers" class="ma-0 pa-0 px-16 mt-8">
      <v-col cols="auto" class="ma-0 pa-0 px-8">
        <v-select
          :items="itemsFilter"
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
          placeholder="Search for a teachers by name or email"
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

    <v-btn v-if="!existing_teachers" class="ma-0 pa-0 dashboard-button-support">
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

    <v-col v-if="existing_teachers" class="ma-0 pa-0 px-10">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
          <v-btn class="ma-0 pa-0 students-button-export-csv" elevation="0">
            <span class="ma-0 pa-0 students-button-export-csv-text">Export CSV</span>
          </v-btn>

          <v-btn class="ma-0 pa-0 ml-3 students-button-add-students" elevation="0" @click="show_add_teacher = true">
            <span class="ma-0 pa-0 students-button-add-students-text">Add Teachers</span>
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

      <v-row class="ma-0 pa-0 d-flex justify-start">
        <v-col cols="9" class="ma-0 pa-0">
          <v-row class="ma-0 pa-0 mt-8">
            <v-col cols="auto" class="ma-0 pa-0 pt-1 d-flex align-start">
              <v-select
                :items="items_add_filter"
                placeholder="Add filter"
                class="ma-0 pa-0 students-button-add-filter"
                flat
                solo
                dense
              />
            </v-col>

            <v-col class="ma-0 pa-0 pl-8 d-flex align-center">
              <v-text-field
                v-model="searchText"
                solo
                flat
                placeholder="Search for a teachers by name or email"
                class="ma-0 pa-0 teachers-search"
                height="49px"
                background-color="#FCFAFA"
                @input="searchStudents()"
              >
                <template #prepend-inner>
                  <img class="ma-0 pa-0 mr-2" src="../../assets/teachers-students/search.svg" width="16px" height="16px">
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row class="ma-0 pa-0">
            <v-data-table
              :headers="headers"
              :items="filteredTeachers"
              :items-per-page="12"
              style="width: 100% !important;"
              hide-default-footer
              @click:row="selectTeacher(item, index)"
            >
              <template #body="{ items }">
                <tbody>
                  <tr
                    v-for="(item, index) in items"
                    :key="index"
                    class="teachers-table-row-selected black--text"
                    @click="selectTeacher(item)"
                  >
                    <td>
                      <v-avatar
                        size="24"
                      >
                        <v-img :src="item.photo" />
                      </v-avatar>&nbsp;&nbsp;
                      {{ item.Pro_Nombre }}
                    </td>
                    <td>{{ item.Pro_Sujeto }}</td>
                    <td>{{ item.Pro_Class }}</td>
                    <td>{{ item.Pro_Email }}</td>
                    <td>{{ item.Pro_Gen }}</td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-dialog v-model="show_add_teacher" class="ma-0 pa-0" max-width="800px" content-class="teachers-dialog">
      <ui-add-teacher class="ma-0 pa-0" @closeDialog="closeDialog" />
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
      itemsFilter: [],
      existing_students: false,
      show_add_student: false,
      items_add_filter: [],
      teacherSelected: [],

      // TABLE
      headers: [
        { text: 'Name', value: 'Pro_Nombre', align: 'left', sortable: true },
        { text: 'Subject', value: 'Pro_Sujeto', align: 'left', sortable: true },
        { text: 'Class', value: 'Pro_Class', align: 'left', sortable: false },
        { text: 'Email Address', value: 'Pro_Email', align: 'left', sortable: true },
        { text: 'Gender', value: 'Pro_Gen', align: 'left', sortable: false }
      ],
      teachers: [],

      // TOKEN Y USUARIO
      user_school: '',
      token: '',

      // FILTRO
      searchText: '',
      filteredTeachers: []
    }
  },

  mounted () {
    this.get_token()
    this.getAllTeachers()
  },

  methods: {
    get_token () {
      const token = localStorage.getItem('Token')
      const user = localStorage.getItem('Usuario')
      this.token = token
      this.user_school = user
    },

    closeDialog () {
      this.show_add_teacher = false
      this.getAllTeachers()
    },

    selectTeacher (teacher) {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ selectTeacher ~ teacher:', teacher)
      this.$store.commit('setTeacherSelected', teacher)
      this.$router.push('/teachers/profile')
    },

    getAllTeachers () {
      const url = `/get-allProfesores/${this.user_school}`
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }

      this.$axios.get(url, config)
        .then((res) => {
          if (res.data.message === 'Success') {
            this.existing_teachers = true
            this.teachers = res.data.users
            // eslint-disable-next-line no-console
            console.log('🚀 ~ .then ~ this.teachers:', this.teachers)

            this.teachers = res.data.users.map(teacher => ({
              ...teacher,
              photo: teacher.Pro_Gen === 'Female' ? `https://avatar.iran.liara.run/public/girl?${Math.random()}` : `https://avatar.iran.liara.run/public/boy?${Math.random()}`
            }))

            this.filteredTeachers = this.teachers
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('🚀 ~ this.$axios.get ~ err', err)
        })
    },

    searchStudents () {
      if (!this.searchText) {
        this.filteredTeachers = this.teachers
        console.log('datos filteredTeachers', this.filteredTeachers)
      } else {
        const searchTextLower = this.searchText.toLowerCase()

        console.log('datos searchText', this.searchText)

        this.filteredTeachers = this.teachers.filter((teacher) => {
          const nameMatch = teacher.Pro_Nombre.toLowerCase().includes(searchTextLower)
          const emailMatch = teacher.Pro_Email.toLowerCase().includes(searchTextLower)
          return nameMatch || emailMatch
        })
      }
    }
  }
}
</script>
