import React from 'react';

export function KDXVisual() {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background card */}
        <rect x="20" y="20" width="240" height="200" rx="12" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2"/>
        
        {/* Title area */}
        <rect x="35" y="35" width="80" height="8" rx="4" fill="#9CA3AF"/>
        <rect x="35" y="50" width="120" height="6" rx="3" fill="#D1D5DB"/>
        
        {/* Chart bars - resembling K-DX analytics */}
        {/* Bar 1 */}
        <rect x="50" y="140" width="35" height="60" rx="4" fill="#8B1538"/>
        <rect x="50" y="110" width="35" height="30" rx="4" fill="#1E3A8A"/>
        <text x="67.5" y="135" fontSize="10" fill="white" textAnchor="middle" fontWeight="600">140+</text>
        
        {/* Bar 2 */}
        <rect x="100" y="130" width="35" height="70" rx="4" fill="#8B1538"/>
        <rect x="100" y="95" width="35" height="35" rx="4" fill="#1E3A8A"/>
        <text x="117.5" y="120" fontSize="10" fill="white" textAnchor="middle" fontWeight="600">Data</text>
        
        {/* Bar 3 */}
        <rect x="150" y="120" width="35" height="80" rx="4" fill="#8B1538"/>
        <rect x="150" y="85" width="35" height="35" rx="4" fill="#1E3A8A"/>
        
        {/* Bar 4 */}
        <rect x="200" y="125" width="35" height="75" rx="4" fill="#8B1538"/>
        <rect x="200" y="90" width="35" height="35" rx="4" fill="#1E3A8A"/>
        
        {/* Trend line overlay */}
        <path 
          d="M 55 165 L 105 150 L 155 135 L 205 140" 
          stroke="#059669" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeDasharray="4 3"
          opacity="0.7"
        />
        
        {/* Data points */}
        <circle cx="55" cy="165" r="4" fill="#059669"/>
        <circle cx="105" cy="150" r="4" fill="#059669"/>
        <circle cx="155" cy="135" r="4" fill="#059669"/>
        <circle cx="205" cy="140" r="4" fill="#059669"/>
        
        {/* Axis labels */}
        <text x="67.5" y="215" fontSize="9" fill="#6B7280" textAnchor="middle">2022</text>
        <text x="117.5" y="215" fontSize="9" fill="#6B7280" textAnchor="middle">2023</text>
        <text x="167.5" y="215" fontSize="9" fill="#6B7280" textAnchor="middle">2024</text>
        <text x="217.5" y="215" fontSize="9" fill="#6B7280" textAnchor="middle">2025</text>
        
        {/* Legend */}
        <circle cx="170" cy="45" r="3" fill="#1E3A8A"/>
        <text x="178" y="48" fontSize="8" fill="#6B7280">학생·교육</text>
        
        <circle cx="170" cy="58" r="3" fill="#8B1538"/>
        <text x="178" y="61" fontSize="8" fill="#6B7280">연구·행정</text>
      </svg>
    </div>
  );
}
