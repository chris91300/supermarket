import { and, not } from "ramda";
import useOrder from "../forOrder/useOrder";
import usePromoCode from "../forPromoCode/usePromoCode";

export const useOrderNeedTips = () => and(useOrder(), not(usePromoCode()));
