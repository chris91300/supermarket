import { propEq } from "ramda";

export default function idEqual(id: string) {
    return propEq(id, "id");
}
