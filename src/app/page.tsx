export default function HomePage() {
  return (
    // TESTE FINAL: O fundo DEVE ser 'bg-brand-primary' (#35eedf - Ciano/Verde Água)
    <main className="min-h-screen p-10 bg-brand-primary">
      {/* Teste da fonte Space Grotesk e cor de título */}
      <h1 className="text-4xl font-space font-light leading-snug text-text-title mb-4">
        ✅ Space Grotesk Aplicada
      </h1>

      {/* Teste da fonte Inter e cor de texto padrão */}
      <p className="font-inter text-text-high text-xl">
        ✅ Inter Aplicada (Se esta fonte for mais padrão).
      </p>

      <p className="text-lg mt-4 text-text-low">
        Se o fundo for ciano e as fontes se diferenciarem, o setup foi 100%
        bem-sucedido!
      </p>
    </main>
  )
}
