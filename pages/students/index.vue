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
                v-model="searchText"
                solo
                flat
                placeholder="Search for a student by name or email"
                class="students-search"
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

          <v-row class="ma-0 pa-0 mt-3">
            <v-data-table
              :headers="students_headers"
              :items="filteredStudents"
              :items-per-page="12"
              style="width: 100% !important;"
              hide-default-footer
              @click:row="selectStudent"
            >
              <template #body="{ items }">
                <tbody>
                  <tr v-for="(item, index) in items" :key="index" :class="{ 'students-table-row-selected': item === student }" @click="selectStudent(item)">
                    <td class="ma-0 pa-0">
                      <v-row class="ma-0 pa-0 align-center">
                        <v-col cols="3" class="ma-0 pa-0 d-flex align-center justify-center">
                          <img class="ma-0 pa-0 students-table-avatar" :src="item.photo">
                        </v-col>

                        <v-col class="ma-0 pa-0">
                          <span>{{ item.Alm_Nombre }}</span>
                        </v-col>
                      </v-row>
                    </td>
                    <td>{{ item.Alm_NUA }}</td>
                    <td>{{ item.Alm_Email }}</td>
                    <td>{{ item.Alm_Clase }}</td>
                    <td>{{ item.Alm_Genero }}</td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-row>
        </v-col>

        <v-col v-if="student" class="ma-0 pa-0 px-16 pt-16" style=" height: 100vh;">
          <v-row class="ma-0 pa-0 mt-16" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-id">
              {{ student.Alm_NUA }}
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-3" align="center" justify="center">
            <img class="ma-0 pa-0 students-details-photo" :src="student.photo" width="180px" height="180px">
          </v-row>

          <v-row class="ma-0 pa-0 mt-5" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-name">
              {{ student.Alm_Nombre }}
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-1" align="center" justify="center">
            <p class="ma-0 pa-0 students-details-carrer">
              {{ student.Alm_Clase }}
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

          <v-row class="ma-0 pa-0 mt-16">
            <v-col class="ma-0 pa-0 mt-8">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  Age
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-2">
                <p class="ma-0 pa-0 students-details-text">
                  {{ student.Alm_Edad }}
                </p>
              </v-row>
            </v-col>

            <v-col class="ma-0 pa-0 mt-8">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  Gender
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-2">
                <p class="ma-0 pa-0 students-details-text">
                  {{ student.Alm_Genero }}
                </p>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="ma-0 pa-0 mt-10">
            <v-col v-if="classmates.length > 0" class="ma-0 pa-0">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  People from the same class
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-3">
                <v-col cols="8" class="ma-0 pa-0 students-details-people-images">
                  <img
                    v-for="(person, index) in firstFiveStudents"
                    :key="index"
                    class="ma-0 pa-0 students-details-people"
                    :src="person.photo"
                    width="38px"
                    height="38px"
                  >
                </v-col>

                <v-col v-if="extraStudents > 0" class="ma-0 pa-0 ml-2 d-flex flex-column justify-center">
                  <p class="ma-0 pa-0 students-details-people-more">
                    +{{ extraStudents }} more
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
          <v-form ref="formNewStudent" v-model="validFormNewStudent" class="ma-0 pa-0">
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
                    :items="classes"
                  />
                </v-row>
              </v-col>

              <v-col cols="1" />

              <v-col cols="3" class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                  <v-select
                    v-model="student_gender"
                    :items="student_gender_list"
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
                  Age
                </p>
              </v-col>

              <v-col cols="1" />

              <v-col cols="5" class="ma-0 pa-0">
                <p class="ma-0 pa-0 students-dialog-input-title">
                  Password
                </p>
              </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-1">
              <v-col cols="5" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_age"
                  type="number"
                  class="ma-0 pa-0 students-dialog-text-field"
                  height="7"
                  hide-details
                  outlined
                />
              </v-col>

              <v-col cols="1" />

              <v-col cols="5" class="ma-0 pa-0">
                <v-text-field
                  v-model="student_password"
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

                <v-btn class="ma-0 pa-0 students-dialog-button-add-students" elevation="0" @click="registerStudent()">
                  <span class="ma-0 pa-0 students-dialog-button-add-students-text">Add student</span>
                </v-btn>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-row>
      </v-col>
    </v-dialog>

    <ui-alert v-if="showAlert" :text="alertText" :color="alertColor" :type="alertType" />
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  layout: 'ui-nav',
  data () {
    return {
      user_school: '',
      token: '',
      existing_students: false,
      show_add_student: false,
      items_add_filter: [],
      student_photo: '',
      student_name: '',
      student_email: '',
      student_phone: '',
      student_gender: '',
      student_gender_list: ['Male', 'Female'],
      student_age: '',
      student_password: '',
      student_class: '',
      students_headers: [
        { text: 'Name', value: 'Alm_Nombre', align: 'left', sortable: true },
        { text: 'Student ID', value: 'Alm_NUA', align: 'left', sortable: true },
        { text: 'Email Address', value: 'Alm_Email', align: 'left', sortable: false },
        { text: 'Class', value: 'Alm_Clase', align: 'left', sortable: true },
        { text: 'Gender', value: 'Alm_Genero', align: 'left', sortable: false }
      ],
      students: [],
      student: null,
      validFormNewStudent: false,
      classmates: [],
      firstFiveStudents: [],
      extraStudents: 0,
      searchText: '',
      filteredStudents: [],
      classes: [],
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: ''
    }
  },
  mounted () {
    this.get_token()
    this.getAllStudents()
    this.getAllClass()
  },
  methods: {
    get_token () {
      const token = localStorage.getItem('Token')

      console.log('Token token funcion:', token)

      const user = localStorage.getItem('Usuario')

      console.log('Token user school funcion:', user)

      this.token = token
      this.user_school = user
    },
    getAllStudents () {
      const url = `get-allAlumnos/${this.user_school}`
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }

      this.$axios.get(url, config)
        .then((res) => {
          console.log('@ Keyla => Res ', res)

          if (res.data.message === 'Success') {
            this.existing_students = true

            this.students = res.data.users.map(student => ({
              ...student,
              photo: student.Alm_Genero === 'Female' ? `https://avatar.iran.liara.run/public/girl?${Math.random()}` : `https://avatar.iran.liara.run/public/boy?${Math.random()}`
            }))

            console.log('@ Keyla => students ', this.students)

            this.filteredStudents = this.students
            console.log('@ Keyla => students filter ', this.filteredStudents)
          }
        })
        .catch((err) => {
          console.log('@ Keyla => Error ', err)
        })
    },
    selectStudent (student) {
      this.student = student
      this.updateClassmates()
    },
    registerStudent () {
      const url = `/agregarAlumno/${this.user_school}`

      this.validFormNewStudent = this.$refs.formNewStudent.validate()

      if (this.validFormNewStudent) {
        const now = DateTime.now().setZone('America/Mexico_City')
        const NUA = now.toFormat('yyyyMMddHHmmss')
        console.log('NUA generado:', NUA)

        const sendData = {
          Alm_NUA: NUA,
          Alm_Nombre: this.student_name,
          Alm_Email: this.student_email,
          Alm_telefono: this.student_phone,
          Alm_Genero: this.student_gender,
          Alm_Clase: this.student_class,
          Alm_Edad: this.student_age,
          Alm_Password: this.student_password
        }

        this.$axios.post(url, sendData)
          .then((res) => {
            console.log('@ Keyla => Response ', res)

            if (res.data.message === 'Usuario Registrado Satisfactoriamente') {
              this.showAlert = true
              this.alertText = res.data.message
              this.alertColor = '#152259'
              this.alertType = 'success'

              this.show_add_student = false

              this.getAllStudents()

              setTimeout(() => {
                this.showAlert = false
              }, 3000)

              this.student_name = null
              this.student_email = null
              this.student_phone = null
              this.student_gender = null
              this.student_class = null
              this.student_age = null
              this.student_password = null
            }
          })
          .catch((err) => {
            console.log('@ Keyla => Error Frontend', err)

            if (err.response && err.response.data && err.response.data.message) {
              this.showAlert = true
              this.alertText = err.response.data.message
              this.alertColor = '#FF9F8E'
              this.alertType = 'warning'
            }

            setTimeout(() => {
              this.showAlert = false
            }, 3000)

            this.student_name = null
            this.student_email = null
            this.student_phone = null
            this.student_gender = null
            this.student_class = null
            this.student_age = null
            this.student_password = null
          })
      } else {
        this.showAlert = true
        this.alertText = 'Something is wrong'
        this.alertColor = '#FF9F8E'
        this.alertType = 'warning'

        setTimeout(() => {
          this.showAlert = false
        }, 3000)

        this.name_school = null
        this.password_school = null
      }
    },
    updateClassmates () {
      this.classmates = this.students.filter(s => s.Alm_Clase === this.student.Alm_Clase && s.Alm_NUA !== this.student.Alm_NUA)
      this.firstFiveStudents = this.classmates.slice(0, 5)
      this.extraStudents = Math.max(this.classmates.length - 5, 0)
    },
    searchStudents () {
      if (!this.searchText) {
        this.filteredStudents = this.students
      } else {
        const searchTextLower = this.searchText.toLowerCase()
        this.filteredStudents = this.students.filter((student) => {
          const nameMatch = student.Alm_Nombre.toLowerCase().includes(searchTextLower)
          const emailMatch = student.Alm_Email.toLowerCase().includes(searchTextLower)
          return nameMatch || emailMatch
        })
      }
    },
    getAllClass () {
      const url = `get-allClases/${this.user_school}`
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }

      this.$axios.get(url, config)
        .then((res) => {
          console.log('@ Keyla => Res ', res)

          if (res.data.message === 'Success') {
            this.classes = res.data.users

            console.log('@ Keyla => classes ', this.classes)

            this.classes = this.classes.map(clase => clase.Cla_Id)

            console.log('@ Keyla => name classes ', this.classes)
          }
        })
        .catch((err) => {
          console.log('@ Keyla => Error ', err)
        })
    }
  }
}
</script>
