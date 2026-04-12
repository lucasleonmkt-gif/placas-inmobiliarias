import { useState } from 'react'
import { generatePrompts } from '../promptGenerator'

export default function Step3Resumen({ form, generatedPrompts, setGeneratedPrompts, addToHistory, onBack, onReset }) {
  const [copied, setCopied] = useState(false)

  function handleGenerate() {
    const prompt = generatePrompts(form)
    setGeneratedPrompts(prompt)
    addToHistory({
      id: Date.now(),
      date: new Date().toISOString(),
      form: { ...form },
      prompts: prompt,
    })
  }

  function copyPrompt() {
    navigator.clipboard.writeText(generatedPrompts)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const estiloLabels = {
    minimalista: 'Minimalista',
    moderno: 'Moderno',
    lujo: 'Lujo',
    rustico: 'Rústico',
    elegante: 'Elegante',
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-1">Resumen y prompts</h2>
      <p className="text-slate-500 mb-8">Revisá la info y generá tus prompts.</p>

      {/* Summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 shadow-sm">
        <h3 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wider">Resumen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-500">Tipo:</span>
            <span className="ml-2 font-medium text-slate-800">{form.tipoPropiedad}</span>
          </div>
          <div>
            <span className="text-slate-500">Precio:</span>
            <span className="ml-2 font-medium text-slate-800">{form.precio}</span>
          </div>
          <div className="sm:col-span-2">
            <span className="text-slate-500">Dirección:</span>
            <span className="ml-2 font-medium text-slate-800">{form.direccion}</span>
          </div>
          <div className="sm:col-span-2">
            <span className="text-slate-500">Descripción:</span>
            <span className="ml-2 text-slate-700">{form.descripcion}</span>
          </div>
        </div>

        {/* Color palette */}
        <div className="mt-5 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm text-slate-500">Paleta:</span>
            {[form.colorPrincipal, form.colorSecundario1, form.colorSecundario2].map((c, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md border border-slate-200" style={{ backgroundColor: c }} />
                <span className="text-xs font-mono text-slate-600">{c}</span>
              </div>
            ))}
            <span className="text-sm text-slate-500 ml-2">Estilo:</span>
            <span className="text-sm font-medium text-indigo-600">{estiloLabels[form.estilo]}</span>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      {!generatedPrompts && (
        <div className="text-center mb-8">
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-10 rounded-xl transition-colors shadow-md text-lg"
          >
            Generar Prompt
          </button>
        </div>
      )}

      {/* Generated Prompt */}
      {generatedPrompts && (
        <div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-600">Prompt generado</span>
              <button
                onClick={copyPrompt}
                className={`text-xs font-medium py-1.5 px-4 rounded-md transition-colors ${
                  copied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {copied ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
            <pre className="p-5 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
              {generatedPrompts}
            </pre>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={onBack}
          className="text-slate-600 hover:text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-colors"
        >
          ← Anterior
        </button>
        {generatedPrompts && (
          <button
            onClick={onReset}
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors shadow-sm"
          >
            Nuevo proyecto
          </button>
        )}
      </div>
    </div>
  )
}
