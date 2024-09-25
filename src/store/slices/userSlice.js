import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiUrl } from '../../config'

export const signIn = createAsyncThunk(
	'user/signIn',
	async function (data, { rejectWithValue }) {
		const response = await fetch(apiUrl + '/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		if (response.ok) {
			return await response.json()
		} else {
			return rejectWithValue(await response.json())
		}
	}
)
export const signUp = createAsyncThunk(
	'user/signUp',
	async function (data, { rejectWithValue }) {
		const response = await fetch(apiUrl + '/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		if (response.ok) {
			return await response.json()
		} else {
			return rejectWithValue(await response.json())
		}
	}
)
const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: null,
		error: null,
		loading: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.loading = false
				state.current = action.payload
				alert('Authorization has been completed successfully')
			})
			.addCase(signIn.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message
				alert(action.payload.message)
			})
			.addCase(signUp.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				alert(action.payload.message)
			})
			.addCase(signUp.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message
				alert(action.payload.message)
			})
	},
})

export default userSlice.reducer
