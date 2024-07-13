import { flip, prop } from "ramda";
import { dataType, mainCategory } from "@/types/types";
import getDatabase from "./getDatabase";

const database = getDatabase();

const getCategoryFromDatabase = flip<string, dataType, mainCategory>(prop)(
    database
);

export default getCategoryFromDatabase;
