import { useState } from 'react'

export default function Sidebar({ history, onLoadEntry, onNewProject, onClearHistory }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="md:hidden fixed top-3 left-3 z-50 bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`${
          collapsed ? '-translate-x-full' : 'translate-x-0'
        } md:translate-x-0 fixed md:relative z-40 w-72 h-screen bg-slate-900 text-white flex flex-col transition-transform`}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-700">
          <h1 className="text-lg font-bold tracking-tight">
            🏠 Flyer Prompts
          </h1>
          <p className="text-xs text-slate-400 mt-1">Generador de prompts inmobiliarios</p>
        </div>

        {/* New Project Button */}
        <div className="p-4">
          <button
            onClick={() => { onNewProject(); setCollapsed(true) }}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            + Nuevo Proyecto
          </button>
        </div>

        {/* History */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Historial
            </h2>
            <button
              onClick={() => { if (confirm('¿Eliminar todo el historial?')) onClearHistory() }}
              className={`transition-colors ${history.length > 0 ? 'text-slate-500 hover:text-red-400' : 'text-slate-700 cursor-not-allowed'}`}
              title="Eliminar historial"
              disabled={history.length === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          {history.length === 0 ? (
            <p className="text-xs text-slate-500 italic">Sin historial aún</p>
          ) : (
            <ul className="space-y-1.5">
              {history.map((entry, i) => (
                <li key={entry.id || i}>
                  <button
                    onClick={() => { onLoadEntry(entry); setCollapsed(true) }}
                    className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white">
                      {entry.form.tipoPropiedad} — {entry.form.precio}
                    </p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {entry.form.direccion}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {new Date(entry.date).toLocaleDateString('es-AR')}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center">v1.0 — Prompt Generator</p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div
          onClick={() => setCollapsed(true)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  )
}
