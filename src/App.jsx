import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ProgressBar from './components/ProgressBar'
import Step1Textos from './components/Step1Textos'
import Step2Diseno from './components/Step2Diseno'
import Step3Resumen from './components/Step3Resumen'

const INITIAL_FORM = {
  precio: '',
  direccion: '',
  tipoPropiedad: '',
  descripcion: '',
  colorPrincipal: '#1a1a2e',
  colorSecundario1: '#16213e',
  colorSecundario2: '#e94560',
  estilo: 'moderno',
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('promptHistory') || '[]')
  } catch {
    return []
  }
}

export default function App() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(INITIAL_FORM)
  const [history, setHistory] = useState(loadHistory)
  const [generatedPrompts, setGeneratedPrompts] = useState(null)

  useEffect(() => {
    localStorage.setItem('promptHistory', JSON.stringify(history))
  }, [history])

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function addToHistory(entry) {
    setHistory(prev => [entry, ...prev].slice(0, 20))
  }

  function loadFromHistory(entry) {
    setForm(entry.form)
    setGeneratedPrompts(entry.prompts)
    setStep(3)
  }

  function resetForm() {
    setForm(INITIAL_FORM)
    setGeneratedPrompts(null)
    setStep(1)
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar
        history={history}
        onLoadEntry={loadFromHistory}
        onNewProject={resetForm}
        onClearHistory={() => setHistory([])}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <ProgressBar currentStep={step} />

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            {step === 1 && (
              <Step1Textos
                form={form}
                updateField={updateField}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <Step2Diseno
                form={form}
                updateField={updateField}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step3Resumen
                form={form}
                generatedPrompts={generatedPrompts}
                setGeneratedPrompts={setGeneratedPrompts}
                addToHistory={addToHistory}
                onBack={() => setStep(2)}
                onReset={resetForm}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
