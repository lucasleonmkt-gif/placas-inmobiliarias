import { useState } from 'react'

const tiposPropiedad = [
  'Casa',
  'Departamento',
  'PH',
  'Terreno',
  'Local comercial',
  'Oficina',
  'Quinta',
  'Duplex',
  'Loft',
]

export default function Step1Textos({ form, updateField, onNext }) {
  const [errors, setErrors] = useState({})

  function validate() {
    const newErrors = {}
    if (!form.precio.trim()) newErrors.precio = 'El precio es obligatorio'
    if (!form.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria'
    if (!form.tipoPropiedad.trim()) newErrors.tipoPropiedad = 'Seleccioná un tipo de propiedad'
    if (!form.descripcion.trim()) newErrors.descripcion = 'La descripción es obligatoria'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNext() {
    if (validate()) onNext()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-1">Información de la propiedad</h2>
      <p className="text-slate-500 mb-8">Ingresá los datos principales para tus flyers.</p>

      <div className="space-y-5">
        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Precio de la propiedad
          </label>
          <input
            type="text"
            value={form.precio}
            onChange={e => updateField('precio', e.target.value)}
            placeholder="Ej: USD 185.000"
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.precio ? 'border-red-400 bg-red-50' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
          />
          {errors.precio && <p className="text-red-500 text-xs mt-1">{errors.precio}</p>}
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Dirección
          </label>
          <input
            type="text"
            value={form.direccion}
            onChange={e => updateField('direccion', e.target.value)}
            placeholder="Ej: Av. Libertador 1234, Buenos Aires"
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.direccion ? 'border-red-400 bg-red-50' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
          />
          {errors.direccion && <p className="text-red-500 text-xs mt-1">{errors.direccion}</p>}
        </div>

        {/* Tipo de propiedad */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Tipo de propiedad
          </label>
          <select
            value={form.tipoPropiedad}
            onChange={e => updateField('tipoPropiedad', e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.tipoPropiedad ? 'border-red-400 bg-red-50' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white`}
          >
            <option value="">Seleccionar...</option>
            {tiposPropiedad.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.tipoPropiedad && <p className="text-red-500 text-xs mt-1">{errors.tipoPropiedad}</p>}
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Descripción / Detalles
          </label>
          <textarea
            value={form.descripcion}
            onChange={e => updateField('descripcion', e.target.value)}
            rows={4}
            placeholder="Ej: 3 ambientes, 2 baños, cochera, balcón con vista al río..."
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.descripcion ? 'border-red-400 bg-red-50' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none`}
          />
          {errors.descripcion && <p className="text-red-500 text-xs mt-1">{errors.descripcion}</p>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-10">
        <button
          onClick={handleNext}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-8 rounded-lg transition-colors shadow-sm"
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}
