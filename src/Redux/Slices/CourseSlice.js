import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const initialState = {
    courseData: []
}
export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const response = axiosInstance.get("/course");
        toast.promise(response, {
            loading: "loading course data......",
            success: " Course loaded sucessfulluy",
            error: "failed to get the courses"

        });
        return (await response).data.courses;
    } catch (error) {

        toast.error(error?.response?.data?.message);
    }
})

const coureSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }



});
export default coureSlice.reducer;