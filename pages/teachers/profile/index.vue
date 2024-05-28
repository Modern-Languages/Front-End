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
      teacher: {
        name: 'Kristin Watson',
        subject: 'Geology teacher',
        subjectSize: '12',
        age: '34',
        gender: 'female',
        img: 'https://i.pravatar.cc/280',
        description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
      },

      teachersAvatar: [
        'https://i.pravatar.cc/54',
        'https://i.pravatar.cc/55',
        'https://i.pravatar.cc/56',
        'https://i.pravatar.cc/57',
        'https://i.pravatar.cc/58'
      ]
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
