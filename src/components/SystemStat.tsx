import { useState, useEffect } from 'react';

export default function SystemStat() {
  const [time, setTime] = useState("");
  const [barData, setBarData] = useState<{height: string, isRed: boolean}[]>([]);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('it-IT', { hour12: false }));
    const initialBars = [...Array(24)].map(() => ({
      height: `${Math.random() * 60 + 20}%`,
      isRed: Math.random() > 0.85 
    }));
    setBarData(initialBars);

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('it-IT', { hour12: false }));
      setBarData(prev => prev.map(bar => ({
        ...bar,
        height: `${Math.random() * 60 + 20}%`
      })));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full space-y-6"> 
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50 mb-2" style={{ color: 'var(--nt-text-muted)' }}>
          System_Uptime
        </span>
        <span className="text-4xl font-mono tracking-tighter tabular-nums transition-colors duration-500" style={{ color: 'var(--nt-text)' }}>
          {time}
        </span>
      </div>
      
      <div className="flex items-end gap-[2px] h-12 w-full">
        {barData.map((bar, i) => (
          <div key={i} className="flex-1 transition-all duration-700 ease-in-out rounded-full"
            style={{ 
              height: bar.height,
              backgroundColor: bar.isRed ? 'var(--nt-red)' : 'var(--nt-text-muted)',
              opacity: bar.isRed ? 1 : 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
}