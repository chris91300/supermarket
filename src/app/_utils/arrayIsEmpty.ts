import { equals } from "ramda";

export default function arrayIsEmpty(length: number) {
    return equals(length, 0);
}
