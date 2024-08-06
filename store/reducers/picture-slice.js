import {createSlice} from '@reduxjs/toolkit'

const pictureInfo = createSlice({
    name: 'pictureInfo',
    initialState: {
        weather: '',
        gender: '',
        hairStyle: '',
        clothes: '',
        pictureStyle: '',
    },
    reducers: {
        setWeather(state, {payload}) {
            state.weather = payload;
        },
        setGender(state, {payload}) {
            state.gender = payload;
        },
        setHairStyle(state, {payload}) {
            state.hairStyle = payload
        },
        setClothes(state, {payload}) {
            state.clothes = payload
        },
        setPictureStyle(state, {payload}) {
            state.pictureStyle = payload
        },
    }
})

export const {setWeather, setGender, setHairStyle, setClothes, setPictureStyle} = pictureInfo.actions

export default pictureInfo