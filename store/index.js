export const state = () => ({
  teacherSelected: {},
  teacherSelectedImg: ''
})

export const mutations = {
  setTeacherSelected (state, teacher) {
    state.teacherSelected = teacher
  },
  setTeacherSelectedImg (state, img) {
    state.teacherSelectedImg = img
  }
}
