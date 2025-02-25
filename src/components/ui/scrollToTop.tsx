"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This will execute on:
    // 1. Initial page load
    // 2. Page refresh
    // 3. Route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'smooth' if you want animated scrolling
    });
  }, [pathname, searchParams]); // Re-run when route or query params change

  return null; // This component doesn't render anything
}
