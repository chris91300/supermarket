import { map } from "ramda";
import { categoryForBuildMenu } from "@/types/types";
import getMenuContainerComponent from "./getMenuContainerComponent";

export function buildMenu(data: categoryForBuildMenu[]) {
    const menuComponents = map(getMenuContainerComponent, data);
    return menuComponents;
}
