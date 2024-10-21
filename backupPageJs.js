//calcular valor da escritura
let cont = 1;
function valorEscritura(valBem, tabela) {
  cont = cont + 1;
  if (cont >= 11) {
    console.log('Limite de 10 bens atingidos!');
    return 0;
  };
  for (const key in tabela) {
    let valEsc = 0;
    if (valBem >= 62602.0) {
      if (cont === 1) {
        valEsc = 1377.24;
      } else {
        valEsc = 1377.24 * (80 / 100);
      }
      return valEsc.toFixed(2);
    } else if (valBem <= key) {
      if (cont === 1) {
        valEsc = tabela[key];
      } else {
        valEsc = tabela[key] * (80 / 100);
      }
      return valEsc.toFixed(2);
    }
  }
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
}

//formatar valor
function formatarVal(val) {
  val = val.toFixed(2);
  val = parseFloat(val);
  return val;
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
while (true) {
  let valBem = parseFloat(prompt('Imóvel nº ' + cont + '\nDigite o valor do bem R$ ').trim());
  while (isNaN(valBem)){
    valBem = parseFloat(prompt('Imóvel nº ' + cont + '\nValor inválido! Digite o valor do bem R$ ').trim());
  };
  valBem = formatarVal(valBem);
  valBens.push(valBem);
  let valEscrituraAtual = valorEscritura(valBem, tabela);
  if (valEscrituraAtual === 0) {
    break;
  };
  valEscrituraAtual = parseFloat(valEscrituraAtual);
  valEscrituras.push(valEscrituraAtual);
  
  //escolher mais bens
  let esc = prompt('Deseja adicionar mais um bem? [S/N]       ').trim().toUpperCase();
  while (esc !== 'S' && esc !== 'N') {
    esc = prompt('Escolha inválida! Digite [S/N] ').trim().toUpperCase();
  }
  
  //flag (condicao de parada)
  if (esc === 'N') {
    break;
  }
};

//soma do valor dos bens
let sumBens = 0;
for (let i in valBens) {
  sumBens = sumBens + valBens[i];
};
sumBens = formatarVal(sumBens);

//soma do valor das escrituras
let sumEscrituras = 0;
for (let i in valEscrituras) {
  sumEscrituras = sumEscrituras + valEscrituras[i];
};
sumEscrituras = formatarVal(sumEscrituras);

//calculo do fundep
let fundep = valorFundep(sumEscrituras);
fundep = parseFloat(fundep);

//calculo issqn
let issqn = valorIssqn(sumEscrituras);
issqn = parseFloat(issqn);

//selos
let selos = parseFloat(16);

//distribuidor
let distribuidor = parseFloat(12.40);

//soma valor total da escritura
let sumEscrituraTotal = sumEscrituras + fundep + issqn + selos + distribuidor;
console.log(sumEscrituraTotal);

//calculo funrejus
let funrejus = valorFunrejus(sumBens);
funrejus = parseFloat(funrejus);
console.log(funrejus);

//calculo soma da escritura rodape
let sumEscrituraRodape = sumEscrituraTotal + funrejus;
console.log(sumEscrituraRodape);

//certidoes
let certidoes = parseFloat(prompt('Digite o valor das certidões R$ ').trim());
while (isNaN(certidoes)) {
  certidoes = parseFloat(prompt('Valor inválido! Digite o valor das certidões R$ ').trim());
};
certidoes = formatarVal(certidoes);
console.log(certidoes);

//registro
let registro = parseFloat(prompt('Digite o valor do registro de imóveis R$ ').trim());
while (isNaN(registro)) {
  registro = parseFloat(prompt('Valor inválido! Digite o valor do registro de imóveis R$ ').trim());
};
registro = formatarVal(registro);
console.log(registro);

//escolher calculo do itbi ou itcmd
let esc = prompt('Deseja calcular:\n 1 - ITBI\n 2 - ITCMD').trim();
while (esc !== '1' && esc !== '2') {
    esc = prompt('Escolha inválida! Escolha\n 1 - ITBI\n 2 - ITCMD');
};

//calculo ibi e itcmd
let itbi = 0;
let itcmd = 0;
if (esc === '1') {
  //calculo itbi
  itbi = valorItbi(sumBens);
  itbi = parseFloat(itbi);
  console.log(itbi);
} else {
  //calculo itcmd
  itcmd = valorItcmd(sumBens);
  itcmd = parseFloat(itcmd);
  console.log(itcmd);
};

//calculo orcamento total
let orcamento = sumEscrituraRodape + certidoes + registro + itbi + itcmd;
orcamento = formatarVal(orcamento);
console.log(orcamento);