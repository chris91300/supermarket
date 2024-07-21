import { useCallback, useEffect } from "react";
import { empty, not } from "ramda";
import scrollIn from "../../_utils/scrollIn";

export default function useScrollInElementWhenIsRender(
    ref: React.MutableRefObject<HTMLDivElement>
) {
    const scrollIfNotEmpty = useCallback(
        () => not(empty(ref.current)) && scrollIn(ref.current),
        [ref]
    );

    useEffect(() => {
        scrollIfNotEmpty();
    }, [scrollIfNotEmpty]);
}
