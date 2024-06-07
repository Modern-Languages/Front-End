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
          <v-row style="max-width: 350px;">
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
          <v-row>
            <v-col cols="12">
              <strong class="teacher-profile-same-class">Teachers from the same class</strong>
            </v-col>

            <v-col cols="12">
              <v-avatar>
                <v-img
                  :src="teachersAvatar[0]"
                  width="54"
                  height="54"
                />
              </v-avatar>

              <v-avatar style="position: relative; left: -25px;">
                <v-img
                  :src="teachersAvatar[1]"
                  width="54"
                  height="54"
                />
              </v-avatar>

              <v-avatar style="position: relative; left: -50px;">
                <v-img
                  :src="teachersAvatar[2]"
                  width="54"
                  height="54"
                />
              </v-avatar>

              <v-avatar style="position: relative; left: -75px;">
                <v-img
                  :src="teachersAvatar[3]"
                  width="54"
                  height="54"
                />
              </v-avatar>

              <v-avatar style="position: relative; left: -100px;">
                <v-img
                  :src="teachersAvatar[4]"
                  width="54"
                  height="54"
                />
              </v-avatar>

              <a href="" class="teacher-profile-more">+{{ teacher.subjectSize }} more</a>
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
      teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed perferendis molestiae iste fuga magnam nemo minima pariatur eligendi soluta numquam quasi nesciunt nobis ab! Mollitia suscipit ex ipsa ipsam cum nisi ab maiores sit, architecto deserunt placeat iusto sed pariatur atque adipisci. Cupiditate commodi exercitationem necessitatibus dolore accusantium, dignissimos eum repellendus illum, dolorem ipsum, sequi vitae magnam hic laboriosam earum quibusdam fuga. Sit rerum eos sapiente sequi magni nam atque, id ipsa aspernatur architecto. Sequi voluptatum totam, cum quasi autem fuga vel modi necessitatibus veritatis nulla id porro corrupti, aliquid officiis eligendi recusandae ipsum quis expedita dolor labore eos.',
      teacherAge: '',

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
    this.getTeacherInfo()
  },

  methods: {
    getTeacherInfo () {
      this.teacher = this.$store.state.teacherSelected
      this.teacherImg = this.$store.state.teacherSelected.photo

      const min = 25
      const max = 55
      this.teacherAge = Math.floor(Math.random() * (max - min + 1)) + min
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
