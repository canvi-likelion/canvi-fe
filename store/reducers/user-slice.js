import {createSlice} from '@reduxjs/toolkit'

const userInfo = createSlice({
    name: 'userInfo',
    initialState: {
        userName: '',
        email: '',
        accessToken: ''
    },
    reducers: {
        setUserName(state, {payload}) {
            state.userName = payload;
        },
        setEmail(state, {payload}) {
            state.email = payload;
        },
        setAccessToken(state, {payload}) {
            state.accessToken = payload
        },
    }
})

export const {setUserName, setEmail, setAccessToken} = userInfo.actions

export default userInfo