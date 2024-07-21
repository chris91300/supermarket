import useEmptyTheCart from "@/app/_hooks/forCart/useEmptyTheCart";
import { useEffect } from "react";

export default function useEmptyTheCartWhenComponentIsRender() {
    const emptyTheCart = useEmptyTheCart();

    useEffect(() => {
        emptyTheCart();
    }, [emptyTheCart]);
}
