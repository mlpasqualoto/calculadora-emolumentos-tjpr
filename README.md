Calculadora de Emolumentos

A Calculadora de Emolumentos é um projeto desenvolvido em JavaScript para automatizar o cálculo de emolumentos notariais e outros valores relacionados à compra e venda de bens imóveis. Ela permite a inserção de valores de diferentes bens, calcula as taxas aplicáveis e exibe o resultado diretamente na interface da página.

Funcionalidades:
Cálculo de Escritura:

Com base no valor do bem, a função valorEscritura() calcula o valor da escritura, aplicando descontos para bens adicionais.
Limita o número de bens a 10 por cálculo.
Cálculo de Taxas:

Fundep: Calcula o valor do Fundo de Desenvolvimento da Justiça com base em 5% do valor total das escrituras.
ISSQN: Calcula o Imposto Sobre Serviços de Qualquer Natureza (ISSQN), equivalente a 2% do valor das escrituras.
Funrejus: Calcula o valor do Fundo de Reequipamento do Judiciário (FUNREJUS), que é 0,2% do valor total dos bens.
ITBI: Calcula o Imposto sobre a Transmissão de Bens Imóveis (ITBI), equivalente a 2% do valor dos bens.
ITCMD: Calcula o Imposto sobre Transmissão Causa Mortis e Doação (ITCMD), equivalente a 4% do valor dos bens.
Soma dos Valores:

A calculadora soma os valores das escrituras, certidões, registro de imóveis, selos, e distribuidor, gerando o valor total das escrituras e o orçamento final.
O valor total é exibido para o usuário após todos os cálculos.
Interação com o Usuário:

O usuário pode adicionar até 10 bens para o cálculo.
Alertas de erro são exibidos caso o valor inserido não seja um número válido ou se houver algum erro de entrada.
Formatação Automática:

Valores numéricos são formatados com duas casas decimais para maior precisão.
Funções como formatarVal() garantem que os valores sejam tratados corretamente antes de serem usados nos cálculos.
