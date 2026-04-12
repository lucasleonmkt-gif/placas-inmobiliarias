const estilos = [
  { value: 'minimalista', label: 'Minimalista', desc: 'Limpio, espacioso, sin ruido visual' },
  { value: 'moderno', label: 'Moderno', desc: 'Geométrico, bold, tech-forward' },
  { value: 'lujo', label: 'Lujo', desc: 'Dorado, exclusivo, premium' },
  { value: 'rustico', label: 'Rústico', desc: 'Cálido, natural, texturas orgánicas' },
  { value: 'elegante', label: 'Elegante', desc: 'Sofisticado, clásico, refinado' },
]

function ColorInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-12 h-10 rounded-lg border border-slate-300 cursor-pointer p-0.5"
        />
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          maxLength={7}
          className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition font-mono text-sm"
        />
        <div
          className="w-10 h-10 rounded-lg border border-slate-200 shadow-inner"
          style={{ backgroundColor: value }}
        />
      </div>
    </div>
  )
}

export default function Step2Diseno({ form, updateField, onNext, onBack }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-1">Diseño visual</h2>
      <p className="text-slate-500 mb-8">Definí la paleta de colores y el estilo de tus flyers.</p>

      {/* Colors */}
      <div className="space-y-5 mb-10">
        <ColorInput
          label="Color principal"
          value={form.colorPrincipal}
          onChange={v => updateField('colorPrincipal', v)}
        />
        <ColorInput
          label="Color secundario 1"
          value={form.colorSecundario1}
          onChange={v => updateField('colorSecundario1', v)}
        />
        <ColorInput
          label="Color secundario 2"
          value={form.colorSecundario2}
          onChange={v => updateField('colorSecundario2', v)}
        />
      </div>

      {/* Preview */}
      <div className="mb-10">
        <label className="block text-sm font-medium text-slate-700 mb-2">Preview de paleta</label>
        <div className="flex rounded-xl overflow-hidden h-14 shadow-sm border border-slate-200">
          <div className="flex-1" style={{ backgroundColor: form.colorPrincipal }} />
          <div className="flex-1" style={{ backgroundColor: form.colorSecundario1 }} />
          <div className="flex-1" style={{ backgroundColor: form.colorSecundario2 }} />
        </div>
      </div>

      {/* Style */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">Estilo de diseño</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {estilos.map(s => (
            <button
              key={s.value}
              onClick={() => updateField('estilo', s.value)}
              className={`text-left px-4 py-3.5 rounded-xl border-2 transition-all ${
                form.estilo === s.value
                  ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <p className={`font-semibold text-sm ${form.estilo === s.value ? 'text-indigo-700' : 'text-slate-700'}`}>
                {s.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={onBack}
          className="text-slate-600 hover:text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-colors"
        >
          ← Anterior
        </button>
        <button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-8 rounded-lg transition-colors shadow-sm"
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}
