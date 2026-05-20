export function Admin() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin</h1>
          <p className="text-slate-500 text-sm mt-1">Manage users, roles, and view system audit logs.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Add User
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-slate-500 mb-4">User administration table will be displayed here</p>
        </div>
      </div>
    </div>
  );
}
