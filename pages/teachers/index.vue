<template>
  <v-container>
    <h1 class="teacher-title">
      Teachers
    </h1>

    <v-row>
      <v-col cols="2">
        <v-select
          :items="items"
          placeholder="Add filter"
          class="teachers-btn-add-filter align-start"
          flat
          solo
          dense
        />
      </v-col>
      <v-col cols="9" class=" d-flex align-end">
        <v-text-field
          placeholder="Search for a student by name or email"
          prepend-inner-icon="mdi-magnify"
          class="teachers-search"
          flat
          solo
          dense
        />
      </v-col>
    </v-row>

    <v-row v-if="!existingTeachers" class="teacher-message" align="end" justify="center">
      <v-col cols="12" align="center" justify="center">
        <h1 style="font-weight: 600;">
          No Teachers at this time
        </h1>
        <h4 style="font-weight: 500;">
          Teachers will appear here after they enroll in your school.
        </h4>
        <v-btn
          class="teachers-btn-support white--text"
          color="#152259"
          fixed
          button
          right
          rounded
        >
          <span>
            <v-icon>mdi-face-agent</v-icon>
            &nbsp;&nbsp;Support&nbsp;&nbsp;&nbsp;
            <v-icon>mdi-chevron-up</v-icon>
          </span>
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogAddTeacher" width="969px" height="759px">
      <add-teacher />
    </v-dialog>
  </v-container>
</template>

<script>
import AddTeacher from '@/components/ui-add-teacher.vue'

export default {
  components: {
    AddTeacher
  },
  layout: 'ui-teachers',

  data () {
    return {
      existingTeachers: false,
      dialogAddTeacher: true
    }
  }
}
</script>

<style scoped>
.teacher-title {
  font-family: Kumbh Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.84px;
  color: #4F4F4F;
}

.teachers-btn-add-filter {
  width: Fixed (132.49px)px;
  height: Hug (49px)px;
  padding: 16px 0px 0px 0px;
  gap: 11px;
  opacity: 0px;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  background-color: #FCFAFA;
  color: #C4C4C4;
}

.teachers-search {
  max-width: 819.51px;
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  background: #FCFAFA;
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
