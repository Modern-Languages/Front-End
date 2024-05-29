<template>
  <div class="ma-0 pa-5">
    <v-row v-if="!existing_teachers" class="ma-0 pa-0">
      <v-spacer />

      <v-btn icon>
        <img src="../../assets/teachers-students/bell.svg" width="24px" height="24px">
      </v-btn>

      <v-btn class="teachers-button-log-out" elevation="0" to="/">
        <span class="teachers-button-log-out-text">Log out</span>
      </v-btn>
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
                class="students-button-add-filter"
                flat
                solo
                dense
              />
            </v-col>

            <v-col class="ma-0 pa-0 pl-8 d-flex align-center">
              <v-text-field
                solo
                flat
                placeholder="Search for a teachers by name or email"
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
              :headers="headers"
              :items="teachers"
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
                        <v-img :src="getTeacherPic(item.Pro_Id)" />
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
      existing_teachers: true,
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
      teachers: [
        {
          Pro_Id: '1',
          Pro_Nombre: 'John Doe',
          Pro_Class: 'Class 1',
          Pro_Gen: 'Male',
          Pro_Password: '12345678',
          Pro_Designacion: 'Profesor',
          Pro_Email: 'x@x.com',
          Pro_telefono: '12345678',
          Pro_Sujeto: 'English'
        },
        {
          Pro_Id: '2',
          Pro_Nombre: 'Jane Doe',
          Pro_Class: 'Class 2',
          Pro_Gen: 'Female',
          Pro_Password: '12345678',
          Pro_Designacion: 'Profesor',
          Pro_Email: 'x@x.com',
          Pro_telefono: '12345678',
          Pro_Sujeto: 'English'
        },
        {
          Pro_Id: '3',
          Pro_Nombre: 'Juan Doe',
          Pro_Class: 'Class 3',
          Pro_Gen: 'Male',
          Pro_Password: '12345678',
          Pro_Designacion: 'Profesor',
          Pro_Email: 'x@x.com',
          Pro_telefono: '12345678',
          Pro_Sujeto: 'English'
        },
        {
          Pro_Id: '4',
          Pro_Nombre: 'Jane Doe',
          Pro_Class: 'Class 4',
          Pro_Gen: 'Female',
          Pro_Password: '12345678',
          Pro_Designacion: 'Profesor',
          Pro_Email: 'x@x.com',
          Pro_telefono: '12345678',
          Pro_Sujeto: 'English'
        }
      ]
    }
  },

  // mounted () {
  //   this.getAllTeachers()
  // },

  methods: {
    getTeacherPic (i) {
      return `https://i.pravatar.cc/300?u=${i}`
    },

    closeDialog () {
      this.show_add_teacher = false
      this.getAllTeachers()
    },

    selectTeacher (teacher) {
      const img = this.getTeacherPic(teacher.Pro_Id)
      console.log('🚀 ~ selectTeacher ~ teacher:', teacher)
      this.$store.commit('setTeacherSelected', teacher)
      this.$store.commit('setTeacherSelectedImg', img)
      this.$router.push('/teachers/profile')
    },

    getAllTeachers () {
      const schId = 'UG'
      const url = `/get-allProfesores/${schId}`

      this.$axios.get(url)
        .then((res) => {
          if (res.data.message === 'Success') {
            this.existing_teachers = true
            this.teachers = res.data.users
            console.log('🚀 ~ .then ~ this.teachers:', this.teachers)
          }
        })
        .catch((err) => {
          console.log('🚀 ~ this.$axios.get ~ err', err)
        })
    }
  }
}
</script>
