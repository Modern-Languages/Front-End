<template>
  <v-row class="ma-0 pa-16">
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
        <v-text-field dense solo flat outlined />
        <small class="add-fields-title pl-1">Password</small>
        <v-text-field dense solo flat outlined />
        <small class="add-fields-title pl-1">Full Name</small>
        <v-text-field dense solo flat outlined />
        <v-select
          class="add-fields-title my-6"
          dense
          solo
          flat
          outlined
          placeholder="Subject"
        />
      </v-form>

      <v-card-actions class="ma-0 pa-0 mt-16" style="width: 100% !important;">
        <v-col class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
            <v-btn class="ma-0 pa-0 teachers-dialog-button-add-another" elevation="0" to="">
              <v-col cols="2" class="ma-0 pa-0">
                <img src="../assets/teachers/add.svg" height="20" width="20" cover>
              </v-col>

              <v-col class="ma-0 pa-0">
                <span class="ma-0 pa-0 teachers-dialog-button-add-another-text">Add another</span>
              </v-col>
            </v-btn>

            <v-spacer class="ma-0 pa-0" />

            <v-btn class="ma-0 pa-0 teachers-dialog-button-add-teachers" elevation="0" to="">
              <span class="ma-0 pa-0 teachers-dialog-button-add-teachers-text">Add Teacher</span>
            </v-btn>
          </v-row>
        </v-col>
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
</template>

<script>
export default {
  name: 'AddTeacher'

}
</script>

<style lang="scss" scoped>
.add-title
{
  font-family: Kumbh Sans;
  font-size: 32px;
  font-weight: 600;
  line-height: 39.69px;
  color: #4F4F4F;
}

.add-btn-title
{
  font-family: Kumbh Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.32px;
  color: #4F4F4F;
  height: 22px;
  text-transform: none;
}

.add-fields-title
{
  font-family: Kumbh Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  color: #8A8A8A;
}
</style>
