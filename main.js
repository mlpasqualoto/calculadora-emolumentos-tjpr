document.addEventListener("DOMContentLoaded", () => {
  const valBemInput = document.getElementById("valBem");
  valBemInput.focus();

  // mostra e esconde aviso de meação
  const meacao = document.getElementById("input-meacao");
  const meacaoAvisoItmcd = document.getElementById("meacao-aviso-itcmd");

  meacao.addEventListener("change", () => {
    if (meacao.checked) {
      meacaoAvisoItmcd.style.display = "flex";
    } else {
      meacaoAvisoItmcd.style.display = "none";
    }
  });

  //mostra e esconde aviso de doação com usufruto
  const doacaoUsufruto = document.getElementById("input-Doacao");
  const doacaoAvisoFunrejus = document.getElementById("doacao-aviso-funrejus");
  const doacaoAvisoItcmd = document.getElementById("doacao-aviso-itcmd");

  doacaoUsufruto.addEventListener("change", () => {
    if (doacaoUsufruto.checked) {
      doacaoAvisoFunrejus.style.display = "flex";
      doacaoAvisoItcmd.style.display = "flex";
    } else {
      doacaoAvisoFunrejus.style.display = "none";
      doacaoAvisoItcmd.style.display = "none";
    }
  });

  //calcular valor da escritura
  let cont = 1;
  let contBem = 0;
  function valorEscritura(valBem, tabela) {
    cont = cont + 1;

    if (cont >= 11) {
      alert('Limite de 10 bens atingidos!');
      return 0;
    };

    const garagem = document.getElementById("input-garagem");
    if (!garagem.checked) {
      contBem = contBem + 1;
    }

    let valEsc = 0;
    if (valBem >= 62602.0) {
      if (cont === 2) {
        valEsc = 1377.24;
      } else if (garagem.checked) {
        valEsc = 1377.24 * (50 / 100);
      } else {
        valEsc = 1377.24 * (80 / 100);
      }
      return valEsc.toFixed(2);
    } else {
      for (const key in tabela) {
        if (valBem <= key) {
          if (cont === 2) {
            valEsc = tabela[key];
          } else if (garagem.checked) {
            valEsc = tabela[key] * (50 / 100);
          } else {
            valEsc = tabela[key] * (80 / 100);
          }
          return valEsc.toFixed(2);
        }
      }
    }
  };

  //formata valor em reais
  function valFormatReais(val) {
    const valReais = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);

    return valReais;
  };

  //adiciona guias funrejus
  function addGuias(valFunrejus) {
    const guiasTable = document.getElementById("guiasTable");

    const row1 = document.createElement("tr");
    const column1 = document.createElement("td");
    const column2 = document.createElement("td");
    column1.classList.add("item");
    column2.classList.add("val");
    column1.textContent = "Guia 1 - FUNREJUS";
    column2.textContent = valFormatReais(valFunrejus / 2);
    row1.appendChild(column1);
    row1.appendChild(column2);

    const row2 = document.createElement("tr");
    const column3 = document.createElement("td");
    const column4 = document.createElement("td");
    column3.classList.add("item");
    column4.classList.add("val");
    column3.textContent = "Guia 2 - FUNREJUS";
    column4.textContent = valFormatReais(valFunrejus / 2);
    row2.appendChild(column3);
    row2.appendChild(column4);

    guiasTable.appendChild(row1);
    guiasTable.appendChild(row2);
  }

  //adiciona descrição de cada bem
  function addBemRow(nBem, valBem, valEscritura) {
    const table = document.getElementById("bensTable");
    const row = document.createElement("tr");
    const garagem = document.getElementById("input-garagem");
    const columnItem = document.createElement("td");

    columnItem.classList.add("item");

    if (garagem.checked) {
      columnItem.textContent = "Bem " + (nBem - 1) + " - R$ " + valFormatReais(valBem) + " (Imóvel de Garagem)";
    } else {
      columnItem.textContent = "Bem " + (nBem - 1) + " - R$ " + valFormatReais(valBem);
    }

    row.appendChild(columnItem);

    const columnVal = document.createElement("td");
    columnVal.classList.add("val");
    columnVal.textContent = valFormatReais(valEscritura);
    row.appendChild(columnVal);

    table.appendChild(row);
  };

  //calcular valor fundep
  function valorFundep(sumEsc) {
    let fundep = sumEsc * (5 / 100);
    return fundep.toFixed(2);
  };
  //calcular valor issqn
  function valorIssqn(sumEsc) {
    let issqn = sumEsc * (2 / 100);
    return issqn.toFixed(2);
  };

  //calcular valor selos
  let valSelos = 16;
  function valorSelos() {
    if (contBem > 1) {
      for (let i = 1; i < contBem; i++) {
        valSelos = valSelos + 8;
      }
    }

    console.log(valSelos);
    return valSelos.toFixed(2);
  }

  //calcular valor funrejus
  function valorFunrejus(sumB) {
    const doacaoUsufruto = document.getElementById("input-Doacao");
    let funrejus = sumB * (0.2 / 100);

    if (doacaoUsufruto.checked) {
      funrejus = 2 * funrejus;
    };

    return funrejus.toFixed(2);

  };

  //calcular valor itbi
  function valorItbi(sumB) {
    let itbi = sumB * (2 / 100);
    return itbi.toFixed(2);
  };

  //calcular valor itcmd
  function valorItcmd(sumB) {
    const doacaoUsufruto = document.getElementById("input-Doacao");
    const meacao = document.getElementById("input-meacao");
    let itcmd = sumB * (4 / 100);

    if (doacaoUsufruto.checked || meacao.checked) {
      itcmd = sumB * (2 / 100);
    };

    return itcmd.toFixed(2);
  };

  //formatar valor
  function formatarVal(val) {
    val = val.toFixed(2);
    val = parseFloat(val);
    return val;
  };

  function limparValor() {
    document.getElementById("valBem").value = '';
  };

  const tabela = {
    15512.0: 349.02,
    18282.0: 411.34,
    21052.0: 473.67,
    23822.0: 535.99,
    26592.0: 598.32,
    29362.0: 660.64,
    32132.0: 722.97,
    34902.0: 785.29,
    37672.0: 847.62,
    40442.0: 909.94,
    43212.0: 972.27,
    45982.0: 1011.6,
    48752.0: 1072.54,
    51522.0: 1133.48,
    54292.0: 1194.42,
    57062.0: 1255.36,
    59832.0: 1316.3,
    62602.0: 1377.24
  };

  //calculo do valor das escrituras
  let valEscrituras = [];
  let valBens = [];
  function calculoValorEscrituras() {
    document.getElementById("contBens").textContent = cont;
    let valBem = parseFloat(document.getElementById("valBem").value);
    while (isNaN(valBem)) {
      alert('Valor inválido! Digite um número válido!');
      return;
    };
    valBem = formatarVal(valBem);
    valBens.push(valBem);

    let valEscrituraAtual = valorEscritura(valBem, tabela);
    valEscrituraAtual = parseFloat(valEscrituraAtual);
    valEscrituras.push(valEscrituraAtual);

    addBemRow(cont, valBem, valEscrituraAtual);
  };

  //soma do valor dos bens
  function somaValorBens() {
    sumBens = 0; //sumbens declarada aqui!
    for (let i in valBens) {
      sumBens = sumBens + valBens[i];
    };
    sumBens = formatarVal(sumBens);
    document.getElementById("sumBens").textContent = valFormatReais(sumBens);
  };

  //soma do valor das escrituras
  function somaValorEscrituras() {
    sumEscrituras = 0; //sumEscrituras declarada aqui!
    for (let i in valEscrituras) {
      sumEscrituras = sumEscrituras + valEscrituras[i];
    };
    sumEscrituras = formatarVal(sumEscrituras);
    document.getElementById("sumEscrituras").textContent = valFormatReais(sumEscrituras);
  };

  //calculo do fundep
  function calculoFundep() {
    fundep = valorFundep(sumEscrituras); //fundep declarado aqui!
    fundep = parseFloat(fundep);
    document.getElementById("fundep").textContent = valFormatReais(fundep);
  };

  //calculo issqn
  function calculoIssqn() {
    issqn = valorIssqn(sumEscrituras); //issqn declarado aqui!
    issqn = parseFloat(issqn);
    document.getElementById("issqn").textContent = valFormatReais(issqn);
  };

  //selos
  function calculoSelos() {
    selos = valorSelos(); // selos declarado aqui!
    selos = parseFloat(selos);
    console.log(selos);
    document.getElementById("selos").textContent = valFormatReais(selos);
  }

  //distribuidor
  let distribuidor = parseFloat(12.40);

  //soma valor total da escritura
  function somaValorEscriturasTotal() {
    sumEscrituraTotal = sumEscrituras + fundep + issqn + selos + distribuidor; //sumEscrituraTotal declarada aqui!
    document.getElementById("sumEscrituraTotal").textContent = valFormatReais(sumEscrituraTotal);
  };

  //calculo funrejus
  function calculoFunrejus() {
    const doacaoUsufruto = document.getElementById("input-Doacao");

    funrejus = valorFunrejus(sumBens); //funrejus declarado aqui!
    funrejus = parseFloat(funrejus);
    if (doacaoUsufruto.checked) {
      addGuias(funrejus);
    };
    document.getElementById("funrejus").textContent = valFormatReais(funrejus);
  };

  //calculo soma da escritura rodape
  function somaEscrituraRodape() {
    sumEscrituraRodape = sumEscrituraTotal + funrejus; //sumEscrituraRodape declarada aqui!
    document.getElementById("sumEscrituraRodape").textContent = valFormatReais(sumEscrituraRodape);
  };

  //certidoes
  function calculoCertidoes() {
    certidoes = parseFloat(document.getElementById("certidoes").value); //certidoes declarada aqui!
    while (isNaN(certidoes)) {
      alert('Valor inválido! Digite o valor das certidões!');
      return;
    };
    certidoes = formatarVal(certidoes);
  };

  //registro
  function calculoRegistro() {
    registro = parseFloat(document.getElementById("registro").value); //registro declarado aqui!
    while (isNaN(registro)) {
      alert('Valor inválido! Digite o valor do registro de imóveis');
      return;
    };
    registro = formatarVal(registro);
  };

  //calculo itbi
  itbi = 0; //itbi declarado aqui!
  function calculoItbi() {
    itbi = valorItbi(sumBens);
    itbi = parseFloat(itbi);
    document.getElementById("itbi").textContent = valFormatReais(itbi);
  };

  //calculo itcmd
  itcmd = 0; //itcmd declarado aqui!
  function calculoItcmd() {
    itcmd = valorItcmd(sumBens);
    itcmd = parseFloat(itcmd);
    document.getElementById("itcmd").textContent = valFormatReais(itcmd);
  };

  //calculo orcamento total
  function calculoOrcamento() {
    orcamento = sumEscrituraRodape + certidoes + registro + itbi + itcmd; //orcamento declarado aqui!
    orcamento = formatarVal(orcamento);
    document.getElementById("orcamento").textContent = valFormatReais(orcamento);
  };

  /* EVENTOS DE AÇÃO DO SISTEMA */

  // Define botão de adicionar bens
  const addbensBtn = document.getElementById("addbens");
  addbensBtn.addEventListener("click", () => {
    calculoValorEscrituras(); 
    somaValorBens(); 
    somaValorEscrituras(); 
    limparValor();
  });

  // Define botão de calcular ITBI
  const itbiBtn = document.getElementById("itbiBtn");
  itbiBtn.addEventListener("click", () => {
    calculoItbi();
  });

  // Define botão de calcular ITCMD
  const itcmdBtn = document.getElementById("itcmdBtn");
  itcmdBtn.addEventListener("click", () => {
    calculoItcmd();
  });

  // Define botão de calcular valores
  const calcularBtn = document.getElementById("calcularBtn");
  calcularBtn.addEventListener("click", () => {
    calculoFundep(); 
    calculoIssqn(); 
    calculoSelos(); 
    somaValorEscriturasTotal(); 
    calculoFunrejus(); 
    somaEscrituraRodape(); 
    calculoCertidoes(); 
    calculoRegistro(); 
    calculoOrcamento();
  });

  // Função para adicionar classe ao body e acionar a impressão
  function printSection(section) {
    document.body.classList.add(section); // Adiciona a classe correspondente
    window.print(); // Dispara a impressão
    document.body.classList.remove(section); // Remove a classe após a impressão
  }

  // Define botões de impressão
  const printResumoBtn = document.getElementById('printResumoBtn');
  const printCompletoBtn = document.getElementById('printCompletoBtn');
  printResumoBtn.addEventListener('click', () => printSection('printResumo'));
  printCompletoBtn.addEventListener('click', () => printSection('printCompleto'));

  // Função botão enter
  valBem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addbens.click();
    };
  });

  // Define botão de recarregar a página
  const limparBtn = document.getElementById("limparBtn");
  limparBtn.addEventListener("click", () => {
    location.reload();
  });
});
