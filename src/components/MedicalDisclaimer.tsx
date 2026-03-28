export default function MedicalDisclaimer() {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 my-4">
      <svg className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p>
        <strong>Medicinsk information:</strong> Innehållet på TestaHemma.se är informativt och ersätter inte medicinsk rådgivning,
        diagnos eller behandling. Vid oro för din hälsa ska du alltid kontakta läkare eller annan behörig vårdpersonal.
        Hemtester kan <em>indikera</em> avvikelser – aldrig diagnostisera.
      </p>
    </div>
  );
}
