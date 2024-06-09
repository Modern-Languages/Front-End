<template>
  <div class="ma-0 pa-5">
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
        <img src="../../../assets/teachers-students/bell.svg" width="24px" height="24px">
      </v-btn>

      <v-btn class="students-button-log-out" elevation="0" to="/">
        <span class="students-button-log-out-text">Log out</span>
      </v-btn>
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
          v-model="teacher.Pro_Nombre"
          solo
          flat
          placeholder="Search for a student by name or email"
          class="teachers-search"
          height="49px"
          background-color="#FCFAFA"
        >
          <template #prepend-inner>
            <img class="ma-0 pa-0 mr-2" src="../../../assets/teachers-students/search.svg" width="16px" height="16px">
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
              :src="teacherImg"
            >
          </v-avatar>
          <br>
          <br>
          <br>
          <strong class="teacher-profile-name">{{ teacher.Pro_Nombre }}</strong>
          <br>
          <small class="teacher-profile-subject">{{ teacher.Pro_Sujeto }}</small>
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
          <v-row style="max-width: 450px;">
            <v-col cols="12">
              <small class="teacher-profile-description">{{ teacherAbout }}</small>
            </v-col>
          </v-row>

          <v-row class="my-8 mb-8" style="max-width: 350px;">
            <v-col cols="6">
              <strong class="teacher-profile-age-gender">Age</strong>
              <br>
              <small class="teacher-profile-age-gender-info">{{ teacherAge }}</small>
            </v-col>

            <v-col cols="6">
              <strong class="teacher-profile-age-gender">Gender</strong>
              <br>
              <small class="teacher-profile-age-gender-info">{{ teacher.Pro_Gen }}</small>
            </v-col>
          </v-row>

          <v-row class="ma-0 pa-0 mt-10">
            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0 mt-1">
                <p class="ma-0 pa-0 students-details-subtitle">
                  Teachers from the same class
                </p>
              </v-row>

              <v-row class="ma-0 pa-0 mt-3">
                <v-col cols="4" class="ma-0 pa-0 students-details-people-images">
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
                    +{{ extraTeachers }} more
                  </p>
                </v-col>
              </v-row>
            </v-col>
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
      teacher: {},
      teacherImg: '',
      teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed perferendis molestiae iste fuga magnam nemo minima pariatur eligendi soluta numquam quasi nesciunt nobis ab! Mollitia suscipit ex ipsa ipsam cum nisi ab maiores sit, architecto deserunt placeat iusto sed pariatur atque adipisci. Cupiditate commodi exercitationem necessitatibus dolore accusantium, dignissimos eum repellendus illum, dolorem ipsum, sequi vitae magnam hic laboriosam earum quibusdam fuga. Sit rerum eos sapiente sequi magni nam atque, id ipsa aspernatur architecto. Sequi voluptatum totam, cum quasi autem fuga vel modi necessitatibus veritatis nulla id.',
      teacherAge: '',

      allTeachers: [],
      allClass: [],

      token: '',
      user_school: '',
      classes: [],
      classmates: [],

      firstFiveTeachers: [],
      extraTeachers: 0,

      items: []
    }
  },

  mounted () {
    this.getTeacherInfo()
    this.get_token()
    this.getAllTeachers()
    this.getAllClass()
  },

  methods: {
    getTeacherInfo () {
      this.teacher = this.$store.state.teacherSelected
      this.teacherImg = this.$store.state.teacherSelected.photo

      const min = 25
      const max = 55
      this.teacherAge = Math.floor(Math.random() * (max - min + 1)) + min
    },

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
            console.log('🚀 ~ .then ~ this.teachers:', this.allTeachers)

            this.allTeachers = res.data.users.map(teacher => ({
              ...teacher,
              photo: teacher.Pro_Gen === 'Female' ? `https://avatar.iran.liara.run/public/girl?${Math.random()}` : `https://avatar.iran.liara.run/public/boy?${Math.random()}`
            }))

            this.updateClassmates()
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
      this.classmates = this.allTeachers.filter(s => s.Pro_Class === this.teacher.Pro_Class && s.Pro_Id !== this.teacher.Pro_Id)
      this.firstFiveTeachers = this.classmates.slice(0, 5)
      this.extraTeachers = Math.max(this.classmates.length - 5, 0)

      console.log('@ Keyla => allTeachers ', this.allTeachers)
      console.log('@ Keyla => Pro_Class ', this.teacher.Pro_Class)
      console.log('@ Keyla => classmates ', this.classmates)
      console.log('@ Keyla => firstFiveTeachers ', this.firstFiveTeachers)
      console.log('@ Keyla => extraTeachers ', this.extraTeachers)
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
