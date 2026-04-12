const steps = [
  { num: 1, label: 'Textos' },
  { num: 2, label: 'Diseño' },
  { num: 3, label: 'Resultado' },
]

export default function ProgressBar({ currentStep }) {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-3xl mx-auto flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-colors ${
                  currentStep >= s.num
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {currentStep > s.num ? '✓' : s.num}
              </div>
              <span
                className={`text-sm font-medium hidden sm:block ${
                  currentStep >= s.num ? 'text-indigo-600' : 'text-slate-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 mx-3 transition-colors ${
                  currentStep > s.num ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
