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
        <v-form
          ref="formAddTeacher"
          v-model="validAddTeacher"
          lazy-validation
        >
          <small class="add-fields-title pl-1">Designation</small>
          <v-text-field
            v-model="designation"
            dense
            solo
            flat
            outlined
            required
            type="text"
            :rules="requiredRule"
          />
        </v-form>
      </v-card-text>
    </v-col>

    <v-col cols="12" class="mb-0 pb-0">
      <v-form
        ref="formAddTeacher"
        v-model="validAddTeacher"
        lazy-validation
      >
        <small class="add-fields-title pl-1">Full Name</small>
        <v-text-field
          v-model="fullName"
          dense
          solo
          flat
          outlined
          required
          type="text"
          :rules="requiredRule"
        />
      </v-form>
    </v-col>

    <v-col cols="6" class="mt-0 pt-0">
      <v-form
        ref="formAddTeacher"
        v-model="validAddTeacher"
        lazy-validation
      >
        <small class="add-fields-title pl-1">Email address</small>
        <v-text-field
          v-model="email"
          dense
          solo
          flat
          outlined
          required
          type="email"
          :rules="emailRule"
        />
        <small class="add-fields-title pl-1">Password</small>
        <v-text-field
          v-model="password"
          dense
          solo
          flat
          outlined
          required
          type="password"
          :rules="passwordRule"
        />
        <small class="add-fields-title">&nbsp;</small>
        <v-combobox
          v-model="subject"
          :items="subjects"
          class="add-fields-title"
          hide-selected
          dense
          solo
          flat
          outlined
          placeholder="Subject"
          :rules="requiredRule"
        />
      </v-form>

      <v-card-actions class="ma-0 pa-0 mt-2 d-flex justify-center align-center wrap" style="width: 100% !important;">
        <v-col class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
            <v-btn class="ma-0 pa-0 teachers-dialog-button-add-another" elevation="0">
              <v-col cols="2" class="ma-0 pa-0">
                <img src="../assets/teachers-students/add.svg" height="20" width="20" cover>
              </v-col>

              <v-col class="ma-0 pa-0">
                <span class="ma-0 pa-0 teachers-dialog-button-add-another-text">Add another</span>
              </v-col>
            </v-btn>

            <v-spacer class="ma-0 pa-0" />

            <v-btn class="ma-0 pa-0 teachers-dialog-button-add-teachers" elevation="0" @click="addTeacher()">
              <span class="ma-0 pa-0 teachers-dialog-button-add-teachers-text">Add Teacher</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-col>

    <v-col cols="6" class="py-0 ">
      <v-form
        ref="formAddTeacher"
        v-model="validAddTeacher"
        lazy-validation
      >
        <v-row>
          <v-col cols="6">
            <small class="add-fields-title">&nbsp;</small>
            <v-combobox
              v-model="clase"
              :items="classes"
              class="add-fields-title"
              hide-selected
              dense
              solo
              flat
              outlined
              placeholder="Class"
              :rules="requiredRule"
            />
          </v-col>

          <v-col cols="6">
            <small class="add-fields-title">&nbsp;</small>
            <v-combobox
              v-model="gender"
              :items="genders"
              class="add-fields-title"
              hide-selected
              dense
              solo
              flat
              outlined
              placeholder="Gender"
              :rules="requiredRule"
            />
          </v-col>
        </v-row>
        <small class="add-fields-title pl-1">Phone number</small>
        <v-text-field
          v-model="phone"
          v-mask="'(###) - ### - ####'"
          dense
          solo
          flat
          outlined
          required
          type="tel"
          :rules="phoneRule"
        />
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'AddTeacher',

  directives: {
    mask
  },

  data () {
    return {
      // FORM
      validAddTeacher: true,

      // DATA
      fullName: '',
      designation: '',
      email: '',
      password: '',
      subject: '',
      clase: '',
      phone: '',
      gender: '',

      // ITEMS
      subjects: [
        'Biología Molecular',
        'Cálculo Diferencial',
        'Literatura Inglesa',
        'Filosofía Antigua',
        'Sociología Urbana',
        'Microeconomía',
        'Química Orgánica',
        'Historia del Arte',
        'Física Cuántica',
        'Antropología Cultural',
        'Derecho Constitucional',
        'Psicología del Desarrollo',
        'Marketing Digital',
        'Ingeniería de Software',
        'Geología Ambiental',
        'Estadística Aplicada',
        'Teoría Política',
        'Análisis Financiero',
        'Epidemiología',
        'Ética Profesional',
        'Redes de Computadoras',
        'Diseño Gráfico',
        'Econometría',
        'Bioquímica',
        'Literatura Comparada',
        'Derechos Humanos',
        'Física Experimental',
        'Historia Contemporánea',
        'Psicología Social',
        'Algoritmos y Estructuras de Datos',
        'Ciencias de la Comunicación',
        'Sistemas de Información',
        'Genética',
        'Arte Moderno',
        'Teoría de Juegos',
        'Administración de Empresas',
        'Inteligencia Artificial',
        'Relaciones Internacionales',
        'Matemáticas Discretas',
        'Ecología',
        'Historia de la Filosofía',
        'Neurociencia',
        'Ingeniería de Control',
        'Derecho Penal',
        'Química Inorgánica',
        'Fotografía',
        'Literatura Hispanoamericana',
        'Macroeconomía',
        'Mecánica de Fluidos',
        'Psicopatología'
      ],
      classes: [
        'Class 1',
        'Class 2',
        'Class 3',
        'Class 4',
        'Class 5',
        'Class 6',
        'Class 7',
        'Class 8',
        'Class 9',
        'Class 10',
        'Class 11',
        'Class 12'
      ],
      genders: ['Male', 'Female'],

      // RULES
      requiredRule: [
        v => !!v || 'Este campo es requerido'
      ],
      emailRule: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido'
      ],
      passwordRule: [
        v => !!v || 'Contraseña es requerida',
        v => (v && v.length >= 6) || 'Contraseña debe ser mayor o igual a 6 caracteres'
      ],
      phoneRule: [
        v => !!v || 'Teléfono es requerido',
        v => (v && v.length >= 10) || 'Teléfono debe ser mayor o igual a 10 caracteres'
      ]
    }
  },

  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    },

    cleanForm () {
      this.fullName = ''
      this.designation = ''
      this.email = ''
      this.password = ''
      this.subject = ''
      this.clase = ''
      this.phone = ''
      this.gender = ''
      this.$refs.formAddTeacher.reset()
    },

    addTeacher () {
      this.validAddTeacher = this.$refs.formAddTeacher.validate()

      if (this.validAddTeacher) {
        const id = Math.floor(Math.random() * 1000000000).toString(10)
        const EscuelaId = 'UG'
        const url = `/agregarProfesor/${EscuelaId}`
        const data = {
          Pro_Id: id,
          Pro_Nombre: this.fullName,
          Pro_Class: this.clase,
          Pro_Gen: this.gender,
          Pro_Password: this.password,
          Pro_Designacion: this.designation,
          Pro_Email: this.email,
          Pro_telefono: this.phone,
          Pro_Sujeto: this.subject
        }

        this.$axios.post(url, data)
          .then((res) => {
            if (res.data.message === 'Usuario Registrado Satisfactoriamente') {
              this.cleanForm()
              this.closeDialog()
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log('🚀 ~ this.$axios.post ~ err:', err)
          })
      }
    }
  }
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
