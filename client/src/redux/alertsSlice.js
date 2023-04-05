export const alertSlice = createSlice({
    name:'alerts',
    initialState: {
        loading:false,
    },
    reducers: {
        ShowLoading(state) {
            state.loading = true;
        },
        HideLoading(state){
            state.loading = true;

        }
    }
})

export const {ShowLoading, HideLoading} = alertSlice.action