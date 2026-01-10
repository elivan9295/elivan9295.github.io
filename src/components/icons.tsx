
import React from 'react';

interface IconProps {
    className?: string;
}

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TrulloIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5V4.25a.75.75 0 011.5 0V9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.5l-2.25 1.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20.25l-2.25-1.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.5h6v-1.25c0-1.5-1.5-2.75-3-2.75s-3 1.25-3 2.75V15.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21.25h15V19a1.5 1.5 0 00-1.5-1.5H6A1.5 1.5 0 004.5 19v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5c2.375 0 4.25-1 4.25-2.25S14.375 7 12 7s-4.25 1-4.25 2.25S9.625 11.5 12 11.5z" />
    </svg>
);

export const PlaneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const BedIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.47-1.47l-1.188-.648 1.188-.648a2.25 2.25 0 011.47-1.47l.648-1.188.648 1.188a2.25 2.25 0 011.47 1.47l1.188.648-1.188.648a2.25 2.25 0 01-1.47 1.47z" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const DressCodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 21v-5.25a2.25 2.25 0 012.25-2.25h6.75a2.25 2.25 0 012.25 2.25V21m-11.25 0h11.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.125 7.5h15.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.125 7.5L6.375 3v4.5m13.5 0L17.625 3v4.5" />
  </svg>
);

export const GiftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 6.375v13.5m-3.375-13.5v13.5m6.75-13.5v13.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.375 6.375c-1.358 0-2.58 1.119-2.58 2.5s1.222 2.5 2.58 2.5c1.358 0 2.58-1.119 2.58-2.5s-1.222-2.5-2.58-2.5zM8.625 6.375c-1.358 0-2.58 1.119-2.58 2.5s1.222 2.5 2.58 2.5c1.358 0 2.58-1.119 2.58-2.5s-1.222-2.5-2.58-2.5z" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const PersonIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 20.25a7.5 7.5 0 0115 0"
    />
  </svg>
);

export const ItineraryIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 3v3M15.75 3v3M3.75 7.5h16.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10.5h4.5M6 14.25h7.5M6 18h6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 4.5h13.5A1.5 1.5 0 0120.25 6v13.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5z"
    />
  </svg>
);

export const PhotoIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 7.5l1.5-2.25h7.5l1.5 2.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 7.5h16.5A1.5 1.5 0 0121.75 9v9.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V9a1.5 1.5 0 011.5-1.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
    />
  </svg>
);

export const ContactIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5A1.5 1.5 0 0121.75 8.25v7.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 8.25l8.25 5.25 8.25-5.25"
    />
  </svg>
);

export const FloralDivider: React.FC<IconProps> = ({ className }) => (
  <svg width="250" height="50" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0.5 25 H 70" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5"/>
    <path d="M249.5 25 H 180" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5"/>
    <path d="M125 32C116.333 30.3333 102.4 25.1 105 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M125 32C133.667 30.3333 147.6 25.1 145 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M125 38C110 38 95 31.5 97 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M125 38C140 38 155 31.5 153 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M125 42C100 42 85 30 90 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M125 42C150 42 165 30 160 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
