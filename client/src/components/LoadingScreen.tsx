import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-mark">
        <svg viewBox="0 0 40 40" aria-hidden="true" className="tk-emblem size-full">
          <path d="M5 5h30v30" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 10v20M11 20h9l9-10M20 20l9 10" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="loading-line" />
      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: #16212b;
          color: #f7f8f5;
          animation: loading-fade 600ms 1400ms var(--ease-out) forwards;
        }
        .loading-mark {
          position: relative;
          display: flex;
          size: 64px;
          align-items: center;
          justify-content: center;
          animation: loading-scale 1600ms var(--ease-out) both;
        }
        .loading-mark::before,
        .loading-mark::after {
          content: '';
          position: absolute;
          pointer-events: none;
          border-color: currentColor;
        }
        .loading-mark::before {
          inset: -12px 12px 12px -12px;
          border-left: 1px solid;
          border-top: 1px solid;
          opacity: 0.25;
        }
        .loading-mark::after {
          inset: 12px -12px -12px 12px;
          border-right: 1px solid;
          border-bottom: 1px solid;
          opacity: 0.25;
        }
        .loading-mark .tk-emblem {
          color: #c6d45a;
        }
        .loading-line {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c6d45a, transparent);
          opacity: 0.7;
          animation: loading-line 1600ms var(--ease-out) both;
        }
        @keyframes loading-scale {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes loading-line {
          0% { transform: scaleX(0); opacity: 0; }
          60% { transform: scaleX(1); opacity: 0.7; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes loading-fade {
          to { opacity: 0; pointer-events: none; }
        }
      `}</style>
    </div>
  );
}
