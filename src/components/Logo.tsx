import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 50 35 L 85 5 L 145 35 L 195 35" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
        fill="none" 
      />
      <text x="10" y="72" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="48" fill="currentColor" letterSpacing="-2">CASA</text>
      <text x="135" y="72" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="48" fill="currentColor" letterSpacing="-2">DO</text>
      <text x="205" y="72" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="48" fill="currentColor" letterSpacing="-2">PHONE</text>
    </svg>
  );
}
