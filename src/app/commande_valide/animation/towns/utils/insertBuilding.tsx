import { nanoid } from "@reduxjs/toolkit";
import { FaBuilding } from "react-icons/fa";



export default function insertBuilding(){
    return <FaBuilding key={nanoid()} className="text-gray-500"/>
}