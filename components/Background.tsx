export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
    </div>
  );
}