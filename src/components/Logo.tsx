import React from 'react';

interface LogoProps {
    className?: string;
    size?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className, size = "100%" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Architectural Monogram PL */}

            {/* Main Stem (Common to P and L) */}
            <path
                d="M40 20 L 40 80"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                className="animate-draw"
            />

            {/* P - Geometric Bowl (Perfect Circle Segment) */}
            <circle
                cx="55"
                cy="35"
                r="15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw"
                style={{ strokeDasharray: '95', strokeDashoffset: '95' }}
            />

            {/* L - Foundation Base */}
            <path
                d="M40 80 L 70 80"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                className="animate-draw"
            />

            {/* Technical Construction Details */}
            {/* Top Crosshair */}
            <line x1="35" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

            {/* Intersection Point */}
            <circle cx="40" cy="35" r="1.5" fill="currentColor" opacity="0.8" />

            {/* Projection Lines (Blueprint Style) */}
            <line x1="40" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.2" />
            <line x1="70" y1="50" x2="70" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.2" />

            {/* Axis Labels (Symbolic) */}
            <text x="32" y="22" fill="currentColor" fontSize="3" opacity="0.3" fontFamily="Inter">Y</text>
            <text x="72" y="82" fill="currentColor" fontSize="3" opacity="0.3" fontFamily="Inter">X</text>
        </svg>
    );
};

export default Logo;
