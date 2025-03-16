import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = { ...course, _id: uuidv4() };
      state.courses = [...courses, newCourse] as any;
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId
      ) as any;
    },
  },
});
export const { addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
