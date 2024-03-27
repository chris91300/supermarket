import { replace } from "ramda";

const decodeFromURL = replace(/\-/g, " ");

export default decodeFromURL;
