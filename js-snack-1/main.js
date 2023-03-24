const zucchine = [
    { varieta: 'Zucchina nera', peso: 0.2, lunghezza: 10 },
    { varieta: 'Zucchina romanesco', peso: 0.3, lunghezza: 15 },
    { varieta: 'Zucchina lunga fiorentina', peso: 0.25, lunghezza: 20 },
    { varieta: 'Zucchina tonda di Nizza', peso: 0.4, lunghezza: 8 },
    { varieta: 'Zucchina siciliana', peso: 0.35, lunghezza: 12 },
    { varieta: 'Zucchina bianca', peso: 0.3, lunghezza: 18 },
    { varieta: 'Zucchina trombetta', peso: 0.5, lunghezza: 25 },
    { varieta: 'Zucchina lunga fiorentina', peso: 0.2, lunghezza: 15 },
    { varieta: 'Zucchina tonda di Piacenza', peso: 0.35, lunghezza: 10 },
    { varieta: 'Zucchina tonda di Firenze', peso: 0.3, lunghezza: 12 },
  ];
  
  // Calcoliamo il peso totale delle zucchine
  let pesoTotale = 0;
  
  for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
  }
  
  console.log(`Il peso totale delle zucchine è di ${pesoTotale} kg`);