"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  trackingId: string;
}

export function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  if (!trackingId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

// Event tracking functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific barbershop events
export const trackBookingClick = () => {
  trackEvent("click", "booking", "inbarber_redirect");
};

export const trackInstagramClick = (profile: "main" | "store") => {
  trackEvent("click", "social", `instagram_${profile}`);
};

export const trackPhoneClick = () => {
  trackEvent("click", "contact", "phone_call");
};

export const trackWhatsappClick = () => {
  trackEvent("click", "contact", "whatsapp");
};

export const trackServiceView = (serviceName: string) => {
  trackEvent("view", "service", serviceName);
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}
