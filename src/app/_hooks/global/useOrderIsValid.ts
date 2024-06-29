import { and } from "ramda";
import useOrder from "../forOrder/useOrder";
import usePromoCode from "../forPromoCode/usePromoCode";

export const useOrderIsValid = () => and(useOrder(), usePromoCode());
