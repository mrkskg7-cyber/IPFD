export function CurvedLogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer curved circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Main curved arc shape */}
      <path
        d="M 50 10 
           A 40 40 0 0 1 90 50
           L 80 50
           A 30 30 0 0 0 50 20
           Z"
        fill="url(#logoGradient)"
      />
      
      {/* Second curved arc */}
      <path
        d="M 50 90
           A 40 40 0 0 1 10 50
           L 20 50
           A 30 30 0 0 0 50 80
           Z"
        fill="url(#logoGradient)"
      />
      
      {/* Center circle with gradient */}
      <circle cx="50" cy="50" r="18" fill="url(#innerGradient)" />
      
      {/* Impact arrow/leaf symbol in center */}
      <path
        d="M 50 38
           L 50 62
           M 44 56
           L 50 62
           L 56 56"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative dots */}
      <circle cx="50" cy="5" r="3" fill="#10b981" opacity="0.6" />
      <circle cx="95" cy="50" r="3" fill="#14b8a6" opacity="0.6" />
      <circle cx="50" cy="95" r="3" fill="#06b6d4" opacity="0.6" />
      <circle cx="5" cy="50" r="3" fill="#0891b2" opacity="0.6" />
    </svg>
  );
}
