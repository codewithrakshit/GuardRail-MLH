export function HeroBlob() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[min(600px,70vh)] w-[min(900px,95vw)] -translate-x-1/2 -translate-y-[52%] opacity-90"
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="blobGrad" cx="50%" cy="45%" r="55%" fx="45%" fy="40%">
          <stop offset="0%" stopColor="#3d5c18" />
          <stop offset="45%" stopColor="#2d4512" />
          <stop offset="75%" stopColor="#1a2a08" />
          <stop offset="100%" stopColor="#0c1206" stopOpacity="0" />
        </radialGradient>
        <filter id="blobSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        filter="url(#blobSoft)"
        d="M450,80 C560,60 680,100 740,180 C800,260 820,340 790,420 C760,500 680,560 580,580 C480,600 380,590 300,540 C220,490 160,410 130,320 C100,230 120,150 190,90 C260,30 340,10 420,20 C430,22 440,50 450,80 Z M380,200 C420,170 480,180 510,230 C540,280 520,340 470,370 C420,400 350,380 330,330 C310,280 340,230 380,200 Z"
        fill="url(#blobGrad)"
      />
      <path
        d="M520,280 C580,250 650,280 680,340 C710,400 670,470 590,490 C510,510 440,470 420,400 C400,330 460,310 520,280 Z"
        fill="#1a2808"
        opacity="0.5"
      />
    </svg>
  );
}
