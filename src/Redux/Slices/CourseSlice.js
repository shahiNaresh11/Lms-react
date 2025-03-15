import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";

const initialState = {
    courseData: [],
};

export const getAllCourses = createAsyncThunk("/course/get", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/courses");

        // Use toast.promise with the correct promise
        toast.promise(
            axiosInstance.get("/courses"),
            {
                loading: "Loading course data...",
                success: "Courses loaded successfully",
                error: "Failed to load courses",
            }
        );

        console.log("API Response:", response.data); // Log for debugging
        return response?.data?.courses || []; // Return the courses or an empty array
    } catch (error) {
        const errorMessage = error?.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMessage); // Show the error
        return rejectWithValue(errorMessage); // Handle the error properly
    }
});

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCourses.fulfilled, (state, action) => {
                console.log("Fulfilled payload:", action.payload); // Debugging
                state.courseData = action.payload || []; // Update state
            })
            .addCase(getAllCourses.rejected, (state, action) => {
                console.error("Error loading courses:", action.payload); // Debugging errors
            });
    },
});

export default courseSlice.reducer;
