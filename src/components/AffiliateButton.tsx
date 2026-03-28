"use client";
import { trackAffiliateClick } from "@/lib/tracking";

interface AffiliateButtonProps {
  href: string;
  productName: string;
  network: "adtraction" | "addrevenue" | "direct";
  location: string;
  price?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function AffiliateButton({
  href,
  productName,
  network,
  location,
  price,
  text = "Se erbjudande",
  size = "md",
  variant = "primary",
  className = "",
}: AffiliateButtonProps) {
  const handleClick = () => {
    trackAffiliateClick(productName, network, location, price);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
