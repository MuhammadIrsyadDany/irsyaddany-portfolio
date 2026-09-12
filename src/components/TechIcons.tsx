import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'Laravel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M8.2 3.5l6.7 3.9v7.7l-6.7-3.9V3.5z"
            fill="#FF2D20"
          />
          <path
            d="M14.9 7.4l6.6 3.8-6.6 3.8-6.6-3.8 6.6-3.8z"
            fill="#FF2D20"
            fillOpacity="0.85"
          />
          <path
            d="M21.5 11.2v7.7l-6.6 3.8v-7.7l6.6-3.8z"
            fill="#E02418"
          />
          <path
            d="M2.5 7.4l6.6 3.8v7.7L2.5 15V7.4z"
            fill="#FF2D20"
          />
          <path
            d="M9.1 11.2l5.8 3.4-5.8 3.3-5.8-3.3 5.8-3.4z"
            fill="#FF4A3F"
          />
        </svg>
      );

    case 'PHP':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#777BB4" fillOpacity="0.2" />
          <path
            d="M4 15.5l1.3-7h3.2c1.4 0 2.3.8 2.1 2-.2 1.4-1.3 2.1-2.7 2.1H6.2l-.7 2.9H4zm2.7-4.5h1.2c.6 0 1.1-.3 1.2-.8.1-.5-.2-.8-.8-.8H7l-.3 1.6zm5 4.5l1.3-7h1.6l-.5 2.6h.1c.5-.8 1.4-1.3 2.4-1.3 1.4 0 2.2.9 2 2.2l-.6 3.5h-1.6l.6-3.2c.1-.7-.3-1.1-.9-1.1-.7 0-1.3.5-1.5 1.5l-.5 2.8h-1.8zm6.5 0l1.3-7h3.2c1.4 0 2.3.8 2.1 2-.2 1.4-1.3 2.1-2.7 2.1h-1.7l-.7 2.9h-1.5zm2.7-4.5h1.2c.6 0 1.1-.3 1.2-.8.1-.5-.2-.8-.8-.8h-1.2l-.4 1.6z"
            fill="#8892BF"
          />
        </svg>
      );

    case 'MySQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M18.8 6.5C17.3 4.2 14.5 3 11.7 3.2c-4.1.3-7.5 3.5-7.7 7.7-.2 3.3 1.8 6.4 4.8 7.6l.3.1c-.2.5-.5 1-1 1.4-.4.3-.8.5-1.3.6 1.4.3 2.8.2 4-.5 1.3-.8 2.2-2.1 2.5-3.6 2.4-.4 4.5-2 5.5-4.2.7-1.7.6-3.7-.4-5.2l.4-.6zm-7.6 9.6c-2.8 0-5.1-2.3-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1c0 2.8-2.3 5.1-5.1 5.1z"
            fill="#00758F"
          />
          <path
            d="M13.2 8.8c-.4-.5-1.1-.8-1.8-.8s-1.4.3-1.8.8c-.3.4-.4.8-.4 1.3 0 .5.1.9.4 1.3.4.5 1.1.8 1.8.8s1.4-.3 1.8-.8c.3-.4.4-.8.4-1.3 0-.5-.1-.9-.4-1.3z"
            fill="#F29111"
          />
        </svg>
      );

    case 'RESTful API':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="10" rx="2" stroke="#38BDF8" fill="#38BDF8" fillOpacity="0.12" />
          <path d="M6 12h2" />
          <path d="M11 12h2" />
          <path d="M16 12h2" />
          <circle cx="7" cy="4" r="1.5" fill="#38BDF8" />
          <circle cx="17" cy="20" r="1.5" fill="#38BDF8" />
          <path d="M7 5.5V7" />
          <path d="M17 17v1.5" />
        </svg>
      );

    case 'Database Design':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.7" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#F59E0B" strokeWidth="1.7" />
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="#F59E0B" strokeWidth="1.7" />
          <path d="M8 12l2 2 4-4" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'RBAC':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
            fill="#10B981"
            fillOpacity="0.2"
            stroke="#10B981"
            strokeWidth="1.7"
          />
          <path
            d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5z"
            fill="#34D399"
          />
        </svg>
      );

    case 'React.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'Next.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000000" stroke="#F6F2FD" strokeWidth="1.5" />
          <path
            d="M15.5 8.5v7l-6-7.5v7"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4.5 10.5h6v1.5H8.2V19H6.8v-7H4.5v-1.5zm8 4.2c.4-.7 1.1-1.2 2-1.2 1.4 0 2.2.8 2.2 2 0 1.6-1.5 2.1-2.4 2.5-.7.3-1.1.6-1.1 1.1 0 .5.4.8 1.1.8.8 0 1.4-.4 1.8-.9l1 1c-.7.8-1.6 1.3-2.8 1.3-1.6 0-2.6-.9-2.6-2.2 0-1.5 1.3-2.2 2.3-2.6.7-.3 1.2-.6 1.2-1.1 0-.4-.4-.7-1-.7-.6 0-1.1.3-1.4.8l-1.3-.9z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 13.5v4.2c0 1.2-.7 1.8-1.8 1.8-.8 0-1.4-.4-1.7-.9l1-1.2c.2.3.4.5.7.5.3 0 .5-.2.5-.6v-3.8h1.3zm5 0v3.8c0 .5.3.7.6.7.4 0 .7-.2.9-.6l1.1 1c-.5.8-1.2 1.2-2 1.2-1.3 0-2-.7-2-2.1v-4h1.4zm3.8 1.2c.4-.7 1.1-1.2 2-1.2 1.4 0 2.2.8 2.2 2 0 1.6-1.5 2.1-2.4 2.5-.7.3-1.1.6-1.1 1.1 0 .5.4.8 1.1.8.8 0 1.4-.4 1.8-.9l1 1c-.7.8-1.6 1.3-2.8 1.3-1.6 0-2.6-.9-2.6-2.2 0-1.5 1.3-2.2 2.3-2.6.7-.3 1.2-.6 1.2-1.1 0-.4-.4-.7-1-.7-.6 0-1.1.3-1.4.8l-1.3-.9z"
            fill="#000000"
          />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'Flutter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2.5L3.8 12.2l3 3 12.7-12.7h-6z" fill="#47C5FB" />
          <path d="M13.4 12.3L8.8 16.9l3 3 7.7-7.6h-6.1z" fill="#02569B" />
          <path d="M16.5 15.3l-3.1 3.1 3.1 3.1h6.1l-6.1-6.2z" fill="#0175C2" />
        </svg>
      );

    case 'Git & GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.4 1.8l2.5 2.5c.6-.3 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.5-.7-1.3-.4-1.9L12.4 10v4.7c.3.2.6.5.7.9.4.9 0 2-.9 2.4-.9.4-2 0-2.4-.9-.4-.9 0-2 .9-2.4.3-.1.6-.2.9-.2V9.8c-.3 0-.6-.1-.9-.2L6.1 12c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l4.9-4.9c.6-.6.6-1.5 0-2.1l-4.9-4.9z"
            fill="#F05032"
          />
        </svg>
      );

    case 'Postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M17.5 10.2c-.3-.2-.7-.3-1.1-.3h-3.8l1.4-2.8c.2-.4.1-.9-.2-1.1-.4-.3-.9-.2-1.1.2l-2.8 5.6c-.2.3-.1.7.1.9.1.1.3.2.5.2h3.2l-1.8 4.2c-.2.4 0 .9.4 1.1.1.1.3.1.4.1.3 0 .6-.2.7-.4l3.1-6.4c.2-.4.1-.9-.3-1.3z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v5H8a2.5 2.5 0 110-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 110-5z" fill="#A259FF" />
          <path d="M8 12h4v5H8a2.5 2.5 0 110-5z" fill="#0ACF83" />
          <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
        </svg>
      );

    case 'E2E Testing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.7" />
          <path d="M7 12l3.5 3.5 7-7" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'AdminLTE':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#3C8DBC" fillOpacity="0.2" stroke="#3C8DBC" strokeWidth="1.7" />
          <path d="M3 9h18" stroke="#3C8DBC" strokeWidth="1.5" />
          <path d="M8 9v11" stroke="#3C8DBC" strokeWidth="1.5" />
          <circle cx="5.5" cy="6.5" r="1" fill="#3C8DBC" />
          <circle cx="8" cy="6.5" r="1" fill="#3C8DBC" />
        </svg>
      );

    case 'Documentation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z"
            fill="#8B5CF6"
            fillOpacity="0.2"
            stroke="#A78BFA"
            strokeWidth="1.7"
          />
          <path d="M8 7h8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 11h8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 15h5" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <span className="w-2 h-2 rounded-full bg-violet-light/70" />
      );
  }
};
