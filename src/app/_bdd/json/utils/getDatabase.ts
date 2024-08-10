import db from "@/app/_bdd/json/data.json";
import { dataType } from "@/types/types";

const database: dataType = db;

const getDatabase = () => database;
export default getDatabase;
