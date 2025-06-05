import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async ( data, {rejectWithValue} ) => {
  const response = fetch("https://68403e545b39a8039a57629a.mockapi.io/CRUD", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try{
    const data = await response.json();
    console.log(data)
    return data
  }
  catch{
    return rejectWithValue(error)
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export default userSlice.reducer;
