# Calculadora de Emolumentos

Este é um projeto desenvolvido somente para desktop para calcular os emolumentos de serviços notariais e de registro, considerando diferentes variáveis, como valor da escritura e presença de imóveis de garagem. A aplicação utiliza HTML, CSS e JavaScript para a interface e a lógica de cálculo.

---

## 📸 Capturas de Tela  
### Desktop  
![calc](https://github.com/user-attachments/assets/237e8958-5d78-4062-94ac-ed63c2e762a5)
  
---

## ✨ Funcionalidades  
- **Cálculo Automático:** O usuário pode inserir valores e selecionar opções, como a presença de garagem, para calcular o valor dos emolumentos.  
- **Interface Responsiva:** O layout é adaptável para dispositivos desktop e móveis, garantindo uma experiência consistente e acessível.  
- **Campos Interativos:** O usuário pode facilmente inserir dados como o valor da escritura e marcar a opção de garagem.  
- **Resultado Imediato:** O valor do emolumento é calculado automaticamente conforme as entradas.  

---

## 🛠 Tecnologias Utilizadas  
### Frontend:  
- **HTML5:** Estrutura básica da interface.  
- **CSS3:** Estilização responsiva e moderna, garantindo um design limpo e organizado.  
- **JavaScript:** Lógica de cálculo e manipulação das interações do usuário.  

---

## 📂 Estrutura do Código  
### **HTML**  
Estrutura da interface, incluindo:  
- Cabeçalho com o título da calculadora de emolumentos.  
- Campos de entrada para os dados necessários (valor da escritura, opção de garagem, etc).  
- Exibição do resultado do cálculo.

### **CSS**  
Estilos responsivos e modernos, como:  
- Layout flexível para diferentes tamanhos de tela.  
- Estilização clara e intuitiva para facilitar a navegação do usuário.

### **JavaScript (Frontend)**  
- **main.js:**  
  - `calcularEmolumento()`: Função que realiza o cálculo com base nos valores inseridos.  
  - Manipulação de eventos para atualizar o valor conforme as opções selecionadas.

---

## ⚙️ Configuração do Projeto  
1. **Clone o repositório:**  
   ```bash  
   git clone <url-do-repositorio>  
   cd calculadora-emolumentos  
2. **Abra o arquivo HTML:**  
   Abra o arquivo `index.html` no seu navegador para utilizar a calculadora.

   ou

- Você também pode instalar as dependências do Electron e instalar o app na sua máquina, através dos comandos abaixos:
```bash
npm install electron electron-builder --save-dev
```

---

## 🔍 Exemplo de Uso  
1. **Insira o valor da escritura e selecione se há alguma exceção como a de bem de garagem ou escritura de Doação com Usufruto.**
2. **O cálculo do emolumento será exibido automaticamente na tela.**
3. **Você pode alterar os valores a qualquer momento para ver o cálculo atualizado.**

   ou

- Você também pode gerar um instalador através do Electron e usar o app diretamente no seu desktop. Neste caso, use o comando abaixo:
```bash
npm run dist
```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Caso encontre algum problema ou tenha sugestões, fique à vontade para abrir uma issue ou enviar um pull request.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT.
