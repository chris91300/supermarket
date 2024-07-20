import { Fn } from "ramda";

export default function clickEventApplyWithValue<Element, ValueType>(
    callBack: Fn,
    value: ValueType,
    preventDefault = true
) {
    return (e: React.MouseEvent<Element, MouseEvent>) => {
        preventDefault && e.preventDefault();
        callBack(value);
    };
}
