import db from "@/app/_bdd/json/data.json";
import { DataType } from "../types/jsonTypes";

const database: DataType = db;

const getDatabase = () => database;
export default getDatabase;
