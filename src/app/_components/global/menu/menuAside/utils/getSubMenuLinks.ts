import buildSubMenuLink from "./buildSubMenuLink";
import { map } from "ramda";

export default function getSubMenuLinks(
    primaryMenu: string,
    secondaryMenu: string[]
) {
    const partialSubMenuLink = buildSubMenuLink(primaryMenu);
    const subMenuLink = map(partialSubMenuLink, secondaryMenu);

    return subMenuLink;
}
