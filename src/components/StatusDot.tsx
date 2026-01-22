export default function StatusDot({ size = "h-2 w-2" }: { size?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${size}`}>
      <span 
        className="absolute inline-flex h-[200%] w-[200%] rounded-full opacity-30 animate-ping"
        style={{ backgroundColor: 'var(--nt-red)' }}
      ></span>
      <span 
        className={`relative inline-flex rounded-full ${size} shadow-[0_0_15px_var(--nt-red)]`}
        style={{ backgroundColor: 'var(--nt-red)' }}
      ></span>
    </div>
  );
}