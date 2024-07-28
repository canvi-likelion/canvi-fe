import {createSlice} from '@reduxjs/toolkit'

const registerInfo = createSlice({
    name: 'registerInfo',
    initialState: {
        userName: '',
        email: '',
        password: '',
    },
    reducers: {
        setUserName(state, {payload}) {
            state.userName = payload;
        },
        setEmail(state, {payload}) {
            state.email = payload
        },
        setPassword(state, {payload}) {
            state.password = payload
        },
    }
})

export const {setUserName, setEmail, setPassword} = registerInfo.actions

export default registerInfo