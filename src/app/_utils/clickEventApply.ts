import { Fn } from "ramda";

export default function clickEventApply<Element>(
    callBack: Fn,
    preventDefault = true
) {
    return (e: React.MouseEvent<Element, MouseEvent>) => {
        preventDefault && e.preventDefault();
        callBack();
    };
}
