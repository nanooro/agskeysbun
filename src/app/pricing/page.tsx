export const dynamic = "force-dynamic";

import { FullscreenProvider } from "@/lib/fullscreen-context";
import PricingPageContent from "./PricingPageContent";

export default function Page() {
  return (
    <FullscreenProvider>
      <PricingPageContent />
    </FullscreenProvider>
  );
}
