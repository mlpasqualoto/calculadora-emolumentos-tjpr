//calcular valor da escritura
let cont = 1;
function valorEscritura(valBem, tabela) {
  cont = cont + 1;
  if (cont >= 11) {
    alert('Limite de 10 bens atingidos!');
    return 0;
  };

    const garagem = document.getElementById("input-garagem");
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

//adiciona descrição de cada bem
function addBemRow(nBem, valBem, valEscritura) {
  const table = document.getElementById("bensTable");
  const row = document.createElement("tr");
  row.classList.add("bens");

  const columnItem = document.createElement("td");
  columnItem.classList.add("item");
  columnItem.textContent = "Bem " + (nBem - 1) + " R$ " + valFormatReais(valBem);
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

//calcular valor funrejus
function valorFunrejus(sumB) {
  let funrejus = sumB * (0.2 / 100);
  return funrejus.toFixed(2);
};

//calcular valor itbi
function valorItbi(sumB) {
  let itbi = sumB * (2 / 100);
  return itbi.toFixed(2);
};

//calcular valor itcmd
function valorItcmd(sumB) {
  let itcmd = sumB * (4 / 100);
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
let selos = parseFloat(16);

//distribuidor
let distribuidor = parseFloat(12.40);

//soma valor total da escritura
function somaValorEscriturasTotal() {
  sumEscrituraTotal = sumEscrituras + fundep + issqn + selos + distribuidor; //sumEscrituraTotal declarada aqui!
  document.getElementById("sumEscrituraTotal").textContent = valFormatReais(sumEscrituraTotal);
};

//calculo funrejus
function calculoFunrejus() {
  funrejus = valorFunrejus(sumBens); //funrejus declarado aqui!
  funrejus = parseFloat(funrejus);
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

//imprime a página
function printPage() {
  window.print();
};

//função botão enter
document.addEventListener("DOMContentLoaded", () => {
  valBem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addbens.click();
    };           
  });
})
