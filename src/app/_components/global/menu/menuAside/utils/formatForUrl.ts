import { replace } from "ramda";

const formatForUrl = replace(/ /g, "-");

export default formatForUrl;
