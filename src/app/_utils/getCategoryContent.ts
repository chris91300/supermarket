import { pipe } from "ramda";
//import getCategoryInformations from "../categories/[...categories]/_utils/getCategoryInformations";
import { getPropContent } from "@/app/_utils/getProps";
import getCategoryInformations from "./getCategoryInformations";

const getCategoryContent = pipe(getCategoryInformations, getPropContent);

export default getCategoryContent;
