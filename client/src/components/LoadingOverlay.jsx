const LoadingOverlay = ({ label = 'Loading immersive theatre...' }) => (
  <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 bg-slate-950/90">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-400 border-t-transparent" />
    <p className="text-sm tracking-wide text-slate-300">{label}</p>
  </div>
);

export default LoadingOverlay;
