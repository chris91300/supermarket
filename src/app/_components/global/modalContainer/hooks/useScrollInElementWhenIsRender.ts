import { useEffect } from "react";
import { empty, not } from "ramda";
import scrollIn from "../utils/scrollIn";

export default function useScrollInElementWhenIsRender(
    ref: React.MutableRefObject<HTMLDivElement>
) {
    useEffect(() => {
        not(empty(ref.current)) && scrollIn(ref.current);
    }, []);
}
