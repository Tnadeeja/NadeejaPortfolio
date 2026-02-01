import { LucideProps } from "lucide-react"

// Next.js
export function NextIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="2" fill="#000000"/>
    </svg>
  )
}

// Tailwind CSS
export function TailwindIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#06B6D4" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  )
}

// Pandas
export function PandasIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#150458" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="9" height="9" rx="1"/>
      <rect x="13" y="2" width="9" height="9" rx="1"/>
      <rect x="2" y="13" width="9" height="9" rx="1"/>
      <rect x="13" y="13" width="9" height="9" rx="1"/>
    </svg>
  )
}

// Machine Learning (TensorFlow)
export function TensorFlowIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#FF6F00" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.5 7.5L12 2l10.5 5.5v9L12 22 1.5 16.5v-9zm2.2 1.1v6.8l5.8 3v-6.8l-5.8-3zm12.8 3v6.8l5.8-3V8.6l-5.8 3zm-6.4-4.2L4.8 9.4l5.3 2.7 5.3-2.7-5.3-2.7z"/>
    </svg>
  )
}

// Data Visualization
export function DataVisualizationIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#4285F4" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4 4h2v14h-2zm4-2h2v16h-2z"/>
    </svg>
  )
}

// Statistical Analysis
export function StatisticalIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#FF6900" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  )
}

// Git
export function GitIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#F05032" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.764 2.764c.643-.216 1.379-.07 1.893.445.517.518.652 1.258.436 1.9l2.658 2.66c.645-.217 1.387-.082 1.903.436.719.72.719 1.884 0 2.604-.719.719-1.884.719-2.603 0-.537-.537-.668-1.327-.404-1.989l-2.476-2.476V15.23c.176.086.342.203.488.348.719.72.719 1.884 0 2.604-.719.719-1.886.719-2.603 0-.719-.72-.719-1.884 0-2.603.182-.18.387-.314.608-.403V8.317c-.221-.09-.426-.223-.608-.403-.541-.541-.67-1.335-.398-1.998L6.672 3.247.453 9.463c-.603.603-.603 1.585 0 2.188l10.48 10.48c.604.603 1.582.603 2.186 0l10.43-10.43c.603-.603.603-1.585-.003-2.19z"/>
    </svg>
  )
}

// Docker
export function DockerIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#2496ED" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.938 8.494h2.656v2.656h-2.656V8.494zm-3.542 0h2.656v2.656h-2.656V8.494zm-3.542 0h2.656v2.656H6.854V8.494zm-3.542 0h2.656v2.656H3.312V8.494zm10.626-3.542h2.656V7.61h-2.656V4.952zm-3.542 0h2.656V7.61h-2.656V4.952zm-3.542 0h2.656V7.61H6.854V4.952zm-3.542 0h2.656V7.61H3.312V4.952zm10.626-3.542h2.656v2.656h-2.656V1.41zm-3.542 0h2.656v2.656h-2.656V1.41zm-3.542 0h2.656v2.656H6.854V1.41zm-3.542 0h2.656v2.656H3.312V1.41zm17.711 7.084c-.177 0-.354.018-.531.053-.177-.887-.974-1.556-1.924-1.556-.354 0-.692.089-.986.248-.354-.531-.95-.887-1.637-.887-1.067 0-1.942.815-2.024 1.864-.177-.035-.354-.053-.549-.053-1.419 0-2.57 1.15-2.57 2.57s1.151 2.57 2.57 2.57h7.621c1.419 0 2.57-1.15 2.57-2.57s-1.151-2.57-2.57-2.57z"/>
    </svg>
  )
}

// AWS
export function AWSIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#FF9900" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.714 10.284c0 .177.018.354.053.531-.887.177-1.556.974-1.556 1.924 0 .354.089.692.248.986-.531.354-.887.95-.887 1.637 0 1.067.815 1.942 1.864 2.024-.035.177-.053.354-.053.549 0 1.419 1.15 2.57 2.57 2.57s2.57-1.151 2.57-2.57v-7.621c0-1.419-1.15-2.57-2.57-2.57s-2.57 1.151-2.57 2.57v3.542zm8.572 0c0-.177-.018-.354-.053-.531.887-.177 1.556-.974 1.556-1.924 0-.354-.089-.692-.248-.986.531-.354.887-.95.887-1.637 0-1.067-.815-1.942-1.864-2.024.035-.177.053-.354.053-.549 0-1.419-1.15-2.57-2.57-2.57s-2.57 1.151-2.57 2.57v7.621c0 1.419 1.15 2.57 2.57 2.57s2.57-1.151 2.57-2.57v-3.542z"/>
    </svg>
  )
}

// VS Code
export function VSCodeIcon({ className, ...props }: LucideProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#007ACC" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.15 2.587L18.21.072a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.052L.027 7.581A1 1 0 0 0 0 8.333v7.334a1 1 0 0 0 .027.752l1.622 1.665a.999.999 0 0 0 1.276.052l4.12-3.128 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.515A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353zM3.5 17.15V6.85L6.25 12 3.5 17.15zM12 12l-2.5-2.5L12 7l2.5 2.5L12 12zm0-5.5L7.5 8.5 5 6l7-4.5 7 4.5-2.5 2.5L12 6.5zm0 11l-4.5-2.5L5 17l7 4.5 7-4.5-2.5-2.5L12 17.5z"/>
    </svg>
  )
}
