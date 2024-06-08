<template>
  <div class="ma-0 pa-5">
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
            <img class="ma-0 pa-0 mr-2" src="../../../assets/teachers/search.svg" width="16px" height="16px">
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-container>
      <v-row align="center" justify="center" class="pa-16 ma-0">
        <v-col cols="6" align="center" justify="center">
          <v-avatar
            size="280px"
          >
            <img
              :src="teacher.img"
            >
          </v-avatar>
          <br>
          <br>
          <br>
          <strong class="teacher-profile-name">{{ teacher.name }}</strong>
          <br>
          <small class="teacher-profile-subject">{{ teacher.subject }}</small>
          <br>
          <br>
          <br>
          <v-row class="d-flex flex-row justify-space-between flex-wrap" style="width: 70%; max-width: 300px;">
            <v-col cols="4">
              <v-img
                :src="require('@/assets/teachers/profile/gorro.svg')"
                width="30px"
                height="30px"
              />
            </v-col>

            <v-col cols="4">
              <v-img
                :src="require('@/assets/teachers/profile/phone.svg')"
                width="30px"
                height="30px"
              />
            </v-col>

            <v-col cols="4">
              <v-img
                :src="require('@/assets/teachers/profile/mail.svg')"
                width="30px"
                height="30px"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <strong class="teacher-profile-about">About</strong>
          <br>
          <br>
          <v-row style="max-width: 350px;">
            <v-col cols="12">
              <small class="teacher-profile-description">{{ teacher.description }}</small>
            </v-col>
          </v-row>

          <v-row class="my-8 mb-8" style="max-width: 350px;">
            <v-col cols="6">
              <strong class="teacher-profile-age-gender">Age</strong>
              <br>
              <small class="teacher-profile-age-gender-info">{{ teacher.age }}</small>
            </v-col>

            <v-col cols="6">
              <strong class="teacher-profile-age-gender">Gender</strong>
              <br>
              <small class="teacher-profile-age-gender-info">{{ teacher.gender }}</small>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <strong class="teacher-profile-same-class">Teachers from the same class</strong>
            </v-col>

            <v-row class="ma-0 pa-0 mt-3">
              <v-col cols="8" class="ma-0 pa-0 students-details-people-images">
                <img
                  v-for="(person, index) in firstFiveTeachers"
                  :key="index"
                  class="ma-0 pa-0 students-details-people"
                  :src="person.photo"
                  width="38px"
                  height="38px"
                >
              </v-col>

              <v-col v-if="extraTeachers > 0" class="ma-0 pa-0 ml-2 d-flex flex-column justify-center">
                <p class="ma-0 pa-0 students-details-people-more">
                  +{{ extraStudents }} more
                </p>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'ui-nav',

  data () {
    return {
      items: [],
      teacher: {
        description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
      },
      allTeachers: [],
      allClass: [],

      token: '',
      user_school: '',
      classes: [],
      classmates: [],

      firstFiveTeachers: [],
      extraTeachers: 0,

      teachersAvatar: [
        'https://i.pravatar.cc/54',
        'https://i.pravatar.cc/55',
        'https://i.pravatar.cc/56',
        'https://i.pravatar.cc/57',
        'https://i.pravatar.cc/58'
      ]
    }
  },

  mounted () {
    this.get_token()
    this.getAllTeachers()
    this.getAllClass()
  },

  methods: {
    get_token () {
      const token = localStorage.getItem('Token')
      const user = localStorage.getItem('Usuario')
      this.token = token
      this.user_school = user
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
            this.allTeachers = res.data.users
            // eslint-disable-next-line no-console
            console.log('🚀 ~ .then ~ this.teachers:', this.teachers)

            this.allTeachers = res.data.users.map(teacher => ({
              ...teacher,
              photo: teacher.Pro_Gen === 'Female' ? `https://avatar.iran.liara.run/public/girl?${Math.random()}` : `https://avatar.iran.liara.run/public/boy?${Math.random()}`
            }))
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('🚀 ~ this.$axios.get ~ err', err)
        })
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
            this.classes = this.classes.map(clase => clase.Cla_Id)
          }
        })
        .catch((err) => {
          console.log('@ Keyla => Error ', err)
        })
    },

    updateClassmates () {
      this.classmates = this.allTeachers.filter(s => s.Pro_Clase === this.allTeachers.Alm_Clase && s.Pro_Id !== this.allTeachers.Pro_Id)
      this.firstFiveTeachers = this.classmates.slice(0, 5)
      this.extraTeachers = Math.max(this.classmates.length - 5, 0)
    }
  }
}
</script>

<style  scoped>
.teacher-profile-name {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 19.84px !important;
  text-align: center !important;
  color: #1A1A1A !important;
}

.teacher-profile-subject {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  line-height: 17.36px !important;
  text-align: center !important;
  color: #A7A7A7 !important;
}

.teacher-profile-about {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 19.84px !important;
  text-align: left !important;
  color: #1A1A1A !important;
}

.teacher-profile-description {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 21px !important;
  text-align: left !important;
  color: #A7A7A7 !important;
}

.teacher-profile-age-gender {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 14.88px !important;
  text-align: left !important;
  color: #1A1A1A !important;
}

.teacher-profile-age-gender-info {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 17.36px !important;
  text-align: left !important;
  color: #A7A7A7 !important;
}
.teacher-profile-same-class {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 14.88px !important;
  text-align: left !important;
  color: #1A1A1A !important;
}

.teacher-profile-more {
  font-family: Kumbh Sans, sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  line-height: 12.4px !important;
  text-align: left !important;
  color: #73B0E2 !important;
  text-decoration: none !important;
  position: relative;
  left: -90px;
}
</style>
