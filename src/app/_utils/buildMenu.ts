import { map } from "ramda";
import getMenuContainerComponent from "./getMenuContainerComponent";
import { CategoryForBuildMenu } from "../_bdd/types/databasetypes";

export function buildMenu(data: CategoryForBuildMenu[]) {
    const menuComponents = map(getMenuContainerComponent, data);
    return menuComponents;
}
