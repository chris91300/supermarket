import { gt } from "ramda";

export default function tooMuchparamsForPagesCategories(params: string[]) {
    return gt(params.length, 2);
}
