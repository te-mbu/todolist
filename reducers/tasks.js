import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [],
};

export const tasksSlice = createSlice({

	name: 'tasks',
	initialState,
	reducers: {
		addATask: (state, action) => {
			state.value.push(action.payload)
		},
        isDone: (state, action) => {
            state.value.isDone = action.payload
        },
        deleteATask: (state, action) => {
            state.value = state.value.filter(e => e.name !== action.payload.name)
        }
	}
})

export const { addATask, isDone, deleteATask } = tasksSlice.actions

export default tasksSlice.reducer