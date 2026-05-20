export function Alerts() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Alerts</h1>
          <p className="text-slate-500 text-sm mt-1">Cash gap risks and liquidity warnings.</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-slate-500 mb-4">List of active and resolved alerts will be displayed here</p>
        </div>
      </div>
    </div>
  );
}
