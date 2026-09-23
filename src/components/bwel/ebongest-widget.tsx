import { useEffect } from "react";

import { company } from "@/data/company";

declare global {
  interface Window {
    EbongestConfig?: typeof company.ebongest;
  }
}

export function EbongestWidget() {
  useEffect(() => {
    window.EbongestConfig = company.ebongest;

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://ebongestsolutions.com/widget.js"]',
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://ebongestsolutions.com/widget.js";
    script.async = true;
    script.dataset["bwelWidget"] = "true";
    document.body.appendChild(script);
  }, []);

  return null;
}
