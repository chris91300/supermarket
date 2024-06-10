'use client'
import RedirectIfNotAllow from "../_components/global/redirectIfNotAllow/RedirectIfNotAllow";
import AstucePage from "./astucePage/AstucePage";
import { useOrderNeedTips } from "../_hooks/hooks";

export default function Astuce() {
  return (
    <RedirectIfNotAllow shouldBeTrueToBeSecure={useOrderNeedTips}>
      <AstucePage />
    </RedirectIfNotAllow>
    
  );
}
