import { map } from "ramda";
import { categoryForBuildMenu } from "@/types/types";
import getMenuContainerComponent from "./getMenuContainer";

export function buildMenu(data: categoryForBuildMenu[]): React.ReactNode[] {
    const menuComponents = map(getMenuContainerComponent, data);
    return menuComponents;
}
