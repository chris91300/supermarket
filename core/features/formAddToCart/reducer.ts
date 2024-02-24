import { not } from "ramda";

const reducer = {
    toogleIsVisible: (state: boolean) => {
        return not(state);
    },
};

export default reducer;
