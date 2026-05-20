export function Forecast() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Forecast</h1>
          <p className="text-slate-500 text-sm mt-1">Detailed cash flow projections.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Export Forecast
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Simulate Stress Test
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Detailed forecast chart and table will be displayed here</p>
        </div>
      </div>
    </div>
  );
}
