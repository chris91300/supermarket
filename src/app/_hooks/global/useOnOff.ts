import { useState } from "react";

export default function useOnOff(defaultStatement: boolean) {
    const [isOn, setIsOn] = useState(defaultStatement);
    const inverse = () => {
        setIsOn((state) => !state);
    };

    return {
        isOn,
        inverse,
    };
}
