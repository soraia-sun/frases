

export const EXAMPLE = `
Ser ou não ser, eis a questão.
William Shakespeare - "Hamlet"

Só sei que nada sei.
Sócrates
20

///

Na natureza nada se cria, nada se perde, tudo se transforma.
Antoine Laurent Lavoisier
18

A alegria não chega apenas no encontro do achado, mas faz parte do processo da busca. E ensinar e aprender não podem dar-se fora da procura, fora da boniteza e da alegria.
Paulo Freire - "Pedagogia da Autonomia"
11

///

Amai os vossos inimigos; fazei o bem aos que vos odeiam e orai pelos que vos perseguem e caluniam.
Jesus - Evangelho de Mateus 5:44
`.trim()


export function Help({ show }: Readonly<{ show: boolean }>) {
  
  return (
    <section className={`transition-all overflow-hidden max-h-0 ${show ? "max-h-lvh" : ""}`}>
      <h2 className="text-lg font-bold text-sky-800">&gt;&gt;&gt; Como inserir as frases?</h2>
      <p>
        Para inserir as frases, elas devem seguir o seguinte formato:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Em uma única linha, a frase em si;</li>
        <li>Na linha imediatamente abaixo, a referência da frase (autor/livro);</li>
        <li>Opcionalmente na linha imediatamente abaixo, um tamanho de fonte;</li>
        <li>Uma linha em branco para separar da próxima frase;</li>
        <li>Para separar grupos de cada frase, insira uma linha contendo apenas três barras (///) entre elas.</li>
      </ul>
      <p>
        Se o tamanho de fonte não for especificado, o gerador vai tentar adivinhar um tamanho adequado.
      </p>
      <p>Exemplo:</p>
      <pre className="bg-slate-200 p-4 max-h-72 overflow-scroll mb-4 rounded-lg">
        <code>{EXAMPLE}</code>
      </pre>
      <p>
        Nesse exemplo, as frases de Shakespear e Sócrates estariam no grupo 1,
        a frase de Lavoisier e de Paulo Freire estariam no grupo 2, e a frase de Jesus no grupo 3.
      </p>
      <p>
        As frases que possuem um número abaixo da referência vão ter exatamente aquele tamanho de fonte,
        enquanto o tamanho das demais vai ser inferido.
      </p>
      <h2 className="text-lg font-bold text-sky-800">&gt;&gt;&gt; Como salvar o PDF?</h2>
      <p>
        Imprima a página como PDF.
      </p>
    </section>
  )
}
