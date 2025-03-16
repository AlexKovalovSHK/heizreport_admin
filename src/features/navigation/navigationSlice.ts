import { createAppSlice } from "../../app/createAppSlice";
import { Custom_navi, Page } from "./type";


const initialState: Custom_navi = {
    page: "Home"
}

export const navigationSlice = createAppSlice({
    name: "custom_navigation",
    initialState,
    reducers: create => ({
        updatePage: create.reducer((state, action: { payload: Page }) => {
            state.page = action.payload; // Теперь TypeScript знает, что action.payload — это строка
        }),
    }),
    selectors: {
        selectPage: state => state.page,
      },
    })
    export const { updatePage } = navigationSlice.actions
    export const { selectPage } = navigationSlice.selectors