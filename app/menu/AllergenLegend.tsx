const AllergenLegend = () => {
  return (
    <div className="flex flex-col space-y-10 border bg-primary p-5 text-left">
      <div>
        <h1 className="font-bold lg:text-lg">
          INFORMATIVA ALLERGENI ALIMENTARI
        </h1>
        <span>(Ai sensi del Reg. UE n. 1169/2011)</span>
        <p>
          Gentile Cliente, la ringraziamo per averci scelto. La Sua salute è la
          nostra priorità.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold underline underline-offset-2">
          Informativa sulla presenza di sostanze allergeniche
        </h2>
        <p>
          Si informa che i piatti e i prodotti somministrati in questo esercizio
          possono contenere ingredienti o coadiuvanti considerati allergeni
          dall&apos;Allegato II del Reg. UE 1169/2011.
        </p>

        <p>Le nostre preparazioni includono:</p>
        <p className="ml-5">
          ▪ Specialità artigianali: soggette a variazioni stagionali e alla
          creatività dello Chef.
        </p>
        <p className="ml-5">
          ▪ Prodotti finiti/semilavorati: acquistati da fornitori selezionati e
          già pronti al consumo.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold underline underline-offset-2">
          Rischio di contaminazione crociata
        </h2>
        <p>
          Precisiamo che tutte le preparazioni (incluse quelle in cui non è
          previsto l&apos;uso diretto di un allergene) avvengono in ambienti
          comuni. Pertanto,{" "}
          <span className="font-semibold underline">
            non è possibile escludere la presenza accidentale di tracce
          </span>{" "}
          di tutti gli allergeni elencati nel Regolamento Europeo, a causa delle
          lavorazioni in ambienti unici e dell&apos;utilizzo di attrezzature
          condivise.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold underline underline-offset-2">
          Cosa fare in caso di allergia o intolleranza
        </h2>
        <p>Prima di ordinare, la invitiamo a:</p>
        <p>
          <span className="font-semibold">
            1. Consultare il personale di sala:
          </span>{" "}
          saprà fornirle indicazioni precise sulla composizione dei piatti.
        </p>
        <p>
          <span className="font-semibold">
            2. Consultare il Registro degli Allergeni (Libro degli Ingredienti):
          </span>{" "}
          disponibile presso la cassa/banco, dove sono riportate le schede
          tecniche dei prodotti pronti e gli ingredienti di ogni nostra ricetta.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold underline underline-offset-2">
          ELENCO DEGLI ALLERGENI (Reg. UE 1169/2011)
        </h2>
        <p>
          1. Cereali contenenti glutine: grano, segale, orzo, avena, farro,
          kamut e i loro ceppi ibridati e prodotti derivati.
        </p>
        <p>2. Crostacei e prodotti a base di crostacei.</p>
        <p>3. Uova e prodotti a base di uova.</p>
        <p>4. Pesce e prodotti a base di pesce.</p>
        <p>5. Arachidi e prodotti a base di arachidi.</p>
        <p>6. Soia e prodotti a base di soia.</p>
        <p>7. Latte e prodotti a base di latte (incluso il lattosio).</p>
        <p>
          8. Frutta a guscio: mandorle, nocciole, noci, noci di acagiù, noci di
          pecan, noci del Brasile, pistacchi, noci macadamia o noci del
          Queensland, e i loro prodotti.
        </p>
        <p>9. Sedano e prodotti a base di sedano.</p>
        <p>10. Senape e prodotti a base di senape.</p>
        <p>11. Semi di sesamo e prodotti a base di semi di sesamo.</p>
        <p>
          12. Anidride solforosa e solfiti in concentrazioni superiori a 10
          mg/kg o 10 mg/litro in termini di SO₂ totale.
        </p>
        <p>13. Lupini e prodotti a base di lupini.</p>
        <p>14. Molluschi e prodotti a base di molluschi.</p>
      </div>
    </div>
  );
};

export default AllergenLegend;
