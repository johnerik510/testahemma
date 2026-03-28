"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("th_cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("th_cookie_consent", "accepted");
    setShow(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  const decline = () => {
    localStorage.setItem("th_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
        <h3 className="font-bold text-gray-900 mb-2">Vi använder cookies</h3>
        <p className="text-sm text-gray-600 mb-4">
          Vi använder analytiska cookies för att förstå hur besökare använder sajten. Din data delas aldrig med
          annonsörer.{" "}
          <Link href="/integritetspolicy/" className="text-teal-600 underline">
            Läs vår integritetspolicy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-teal-600 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Acceptera analytics
          </button>
          <button
            onClick={decline}
            className="flex-1 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Neka
          </button>
        </div>
      </div>
    </div>
  );
}
