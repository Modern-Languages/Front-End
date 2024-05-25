<template>
  <v-card class=" pa-16">
    <v-row>
      <v-col cols="6">
        <v-card-title>
          <span class="add-title pl-0">Add Teachers</span>
        </v-card-title>

        <v-card-actions>
          <v-row>
            <v-col cols="6" class="align-start justify-start pl-0">
              <v-btn
                class="add-btn-title"
                text
              >
                Manually
              </v-btn>
            </v-col>
            <v-col cols="6" class="align-start justify-start pl-0">
              <v-btn
                class="add-btn-title"
                text
              >
                Import CSV
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>

      <v-col cols="6">
        <v-card-text>
          <v-form>
            <small class="add-fields-title pl-1">Designation</small>
            <v-text-field
              dense
              solo
              flat
              outlined
            />
          </v-form>
        </v-card-text>
      </v-col>

      <v-col cols="12" class="mb-0 pb-0">
        <v-form>
          <small class="add-fields-title pl-1">Full Name</small>
          <v-text-field
            dense
            solo
            flat
            outlined
          />
        </v-form>
      </v-col>

      <v-col cols="6" class="mt-0 pt-0">
        <v-form>
          <small class="add-fields-title pl-1">Email address</small>
          <v-text-field
            dense
            solo
            flat
            outlined
          />
          <small class="add-fields-title pl-1">Password</small>
          <v-text-field
            dense
            solo
            flat
            outlined
          />
          <small class="add-fields-title pl-1">Full Name</small>
          <v-text-field
            dense
            solo
            flat
            outlined
          />
          <v-select
            class="add-fields-title my-6"
            dense
            solo
            flat
            outlined
            placeholder="Subject"
          />
        </v-form>

        <v-card-actions class="d-flex justify-sm-space-between pl-6 pr-6">
          <v-btn
            class="add-btn-add-another"
            elevation="0"
            text
          >
            <v-icon color="#8A8A8A">
              mdi-plus-circle-outline
            </v-icon>&nbsp;Add another
          </v-btn>

          <v-btn
            class="add-add-teacher"
            elevation="0"
          >
            Add Teacher
          </v-btn>
        </v-card-actions>
      </v-col>

      <v-col cols="6" class="py-0 ">
        <v-form>
          <v-row>
            <v-col cols="6">
              <small class="add-fields-title">&nbsp;</small>
              <v-select
                class="add-fields-title"
                dense
                solo
                flat
                outlined
                placeholder="Class"
              />
            </v-col>

            <v-col cols="6">
              <small class="add-fields-title">&nbsp;</small>
              <v-select
                class="add-fields-title"
                dense
                solo
                flat
                outlined
                placeholder="Gender"
              />
            </v-col>
          </v-row>
          <small class="add-fields-title pl-1">Phone number</small>
          <v-text-field
            dense
            solo
            flat
            outlined
          />
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'AddTeacher'

}
</script>

<style lang="scss" scoped>
.add-title {
  font-family: Kumbh Sans;
  font-size: 32px;
  font-weight: 600;
  line-height: 39.69px;
  color: #4F4F4F;
}

.add-btn-title {
  font-family: Kumbh Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.32px;
  color: #4F4F4F;
  height: 22px;
  text-transform: none;
}

.add-fields-title {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  color: #8A8A8A;
}

.add-btn-another {
  font-family: Kumbh Sans;
font-size: 16px;
font-weight: 500;
line-height: 19.84px;
text-align: left;
color: #4F4F4F;
background-color: #F1F1F1;
text-transform: none;
}

.add-btn-add-teacher {
  width: Fixed (131px)px;
height: 41px;
padding: 12px 14px 12px 14px;
background-color: #F1F1F1;
font-family: Kumbh Sans;
font-size: 14px;
font-weight: 600;
line-height: 17.36px;
text-align: center;
color: #4F4F4F;
text-transform: none;
}
</style>
