import { equals } from "ramda";

export default function productChoosenIsNotFound(index: number) {
    return equals(-1, index);
}
