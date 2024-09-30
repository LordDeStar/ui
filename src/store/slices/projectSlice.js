import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiUrl } from '../../config'

export const fetchProjects = createAsyncThunk(
	'project/fetchProjects',
	async function (id, { rejectWithValue }) {
		const response = await fetch(apiUrl + `/projects/get?id=${id}`)
		if (response.ok) {
			return await response.json()
		} else {
			return rejectWithValue(await response.json())
		}
	}
)
export const createProject = createAsyncThunk(
	'project/createProject',
	async function (data, { rejectWithValue }) {
		const response = await fetch(apiUrl + '/projects/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: data.title, userId: data.id }),
		})
		if (response.ok) {
			return await response.json()
		} else {
			return rejectWithValue(await response.json())
		}
	}
)

const projectSlice = createSlice({
	name: 'project',
	initialState: {
		projects: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.loading = false
				state.projects = action.payload
				state.error = null
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message
				alert(action.payload.message)
			})
			.addCase(createProject.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(createProject.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				alert(action.payload.message)
			})
			.addCase(createProject.rejected, (state, action) => {
				state.loding = false
				state.error = action.payload.message
				alert(state.error)
			})
	},
})

export default projectSlice.reducer
