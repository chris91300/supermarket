'use client'

import RedirectIfNotAllow from "../_components/global/redirectIfNotAllow/RedirectIfNotAllow";
import { useOrderNeedTips } from "../_hooks/global/useOrderNeedTips";
import AstucePage from "./astucePage/AstucePage";

export default function Astuce() {
  return (
    <RedirectIfNotAllow shouldBeTrueToBeSecure={useOrderNeedTips}>
      <AstucePage />
    </RedirectIfNotAllow>
    
  );
}
