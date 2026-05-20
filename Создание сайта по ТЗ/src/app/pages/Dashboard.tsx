import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea 
} from "recharts";
import { 
  ArrowUpRight, ArrowDownRight, AlertTriangle, ShieldCheck, Download, RefreshCw 
} from "lucide-react";

const chartData = [
  { name: 'Mon', actual: 4500000, forecast: 4500000 },
  { name: 'Tue', actual: 4200000, forecast: 4200000 },
  { name: 'Wed', actual: 4800000, forecast: 4800000 },
  { name: 'Thu', actual: 4100000, forecast: 4100000 },
  { name: 'Fri', actual: 3900000, forecast: 3900000 },
  { name: 'Sat', actual: null, forecast: 3900000 },
  { name: 'Sun', actual: null, forecast: 3900000 },
  { name: 'Mon', actual: null, forecast: 3200000 },
  { name: 'Tue', actual: null, forecast: 2800000 },
  { name: 'Wed', actual: null, forecast: 2100000 },
  { name: 'Thu', actual: null, forecast: 1800000 }, // Gap risk starts
  { name: 'Fri', actual: null, forecast: 4500000 }, // Big inflow
];

const kpiData = [
  { label: "Total liquidity", value: "$4.8M", change: "+2.4%", trend: "up", status: "positive" },
  { label: "Forecasted (7d)", value: "$2.1M", change: "-56%", trend: "down", status: "danger" },
  { label: "Idle cash", value: "$1.2M", change: "+5.1%", trend: "up", status: "warning" },
  { label: "Active alerts", value: "3", change: "+1", trend: "up", status: "danger" },
];

const accounts = [
  { name: "Main Operating", bank: "Chase", currency: "USD", balance: "$2,400,000", forecast: "$1,100,000", status: "Safe" },
  { name: "Payroll", bank: "Bank of America", currency: "USD", balance: "$850,000", forecast: "-$250,000", status: "Risk" },
  { name: "European Ops", bank: "Deutsche Bank", currency: "EUR", balance: "€1,200,000", forecast: "€1,150,000", status: "Safe" },
  { name: "UK Subsidiary", bank: "Barclays", currency: "GBP", balance: "£450,000", forecast: "£420,000", status: "Safe" },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Predictive liquidity overview for Global Corp</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-slate-300 text-sm rounded-md px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Next 7 days</option>
            <option>Next 14 days</option>
            <option>Next 30 days</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="text-sm font-medium text-slate-500">{kpi.label}</div>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="text-3xl font-bold text-slate-900">{kpi.value}</div>
              <div className={`flex items-center text-sm font-medium ${
                kpi.status === "positive" ? "text-green-600" :
                kpi.status === "danger" ? "text-red-600" :
                "text-amber-600"
              }`}>
                {kpi.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Liquidity Forecast</h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-slate-600">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-slate-400 border-dashed rounded-full"></div>
                <span className="text-slate-600">Forecast</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} tickFormatter={(val) => `$${val / 1000000}M`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, 'Balance']}
                />
                <ReferenceArea y1={0} y2={2000000} fill="#FEF2F2" fillOpacity={0.5} />
                <ReferenceArea y1={2000000} y2={6000000} fill="#F0FDF4" fillOpacity={0.5} />
                <Line type="monotone" dataKey="actual" stroke="#2563EB" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="forecast" stroke="#94A3B8" strokeWidth={3} strokeDasharray="5 5" dot={false} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Active Alerts</h2>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View all</button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            {[
              { date: "Oct 24", account: "Payroll", amount: "$250k deficit", priority: "High", msg: "Expected cash gap due to payroll run." },
              { date: "Oct 26", account: "Main Ops", amount: "$1.2M incoming", priority: "Low", msg: "Unusual large inflow expected." },
              { date: "Oct 27", account: "UK Sub", amount: "Clearing delay", priority: "Medium", msg: "UK Bank Holiday may delay €400k transfer." }
            ].map((alert, i) => (
              <div key={i} className="p-4 rounded-lg border border-slate-100 bg-slate-50 flex flex-col gap-2 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {alert.priority === "High" ? <AlertTriangle className="w-4 h-4 text-red-500" /> : 
                     alert.priority === "Medium" ? <AlertTriangle className="w-4 h-4 text-amber-500" /> : 
                     <ShieldCheck className="w-4 h-4 text-blue-500" />}
                    <span className="font-semibold text-sm text-slate-900">{alert.account}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{alert.date}</span>
                </div>
                <div className="text-sm text-slate-600">{alert.msg}</div>
                <div className="mt-1 inline-flex w-max items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                  {alert.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accounts List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900">Accounts Overview</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Manage accounts</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Account Name</th>
                <th className="px-6 py-3">Bank</th>
                <th className="px-6 py-3">Currency</th>
                <th className="px-6 py-3 text-right">Current Balance</th>
                <th className="px-6 py-3 text-right">Forecast (Tomorrow)</th>
                <th className="px-6 py-3 text-center">Risk Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {accounts.map((acc, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{acc.name}</td>
                  <td className="px-6 py-4 text-slate-600">{acc.bank}</td>
                  <td className="px-6 py-4 text-slate-600">{acc.currency}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-900">{acc.balance}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-600">{acc.forecast}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        acc.status === 'Safe' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {acc.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
