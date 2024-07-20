import { Fn } from "ramda";

export default function changeEventApply(callBack: Fn) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        // preventDefault && e.preventDefault();
        const value = e.currentTarget.value;
        callBack(value);
    };
}
