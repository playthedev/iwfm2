declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Google Ads "Contact" conversion event.
 * Safe to call even if gtag hasn't loaded yet (e.g. blocked by an ad blocker).
 */
export function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18380237389/5CltCP-F3-YcEM3UsLxE",
    });
  }
}

export {};
