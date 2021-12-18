import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/instance";

export const fetchLectures = createAsyncThunk(
    'teacher/lectures',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);