import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCallBackWhenUrlChanged(callback: () => void) {
    const pathName = usePathname();
    const [defaultPathName] = useState(pathName);
    const pathNameHaveChanged = defaultPathName !== pathName;

    useEffect(() => {
        if (pathNameHaveChanged) {
            callback();
        }
    }, [pathNameHaveChanged, callback]);
}
