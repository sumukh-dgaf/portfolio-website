export default function SceneFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div
        className="h-[60vmin] w-[60vmin] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(91,124,255,0.55), rgba(185,140,255,0.25) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
