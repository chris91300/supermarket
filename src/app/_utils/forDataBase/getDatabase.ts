import db from "../../_bdd/data.json";
import { dataType } from "@/types/types";

const database: dataType = db;

const getDatabase = () => database;
export default getDatabase;
