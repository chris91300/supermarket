import { pipe, prop } from "ramda";
import getCategoryInformations from "./_utils/getCategoryInformations";

const getContent = prop("content");

const getCategoryContent = pipe(getCategoryInformations, getContent);

export default getCategoryContent;
