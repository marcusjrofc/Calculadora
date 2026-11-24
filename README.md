# Calculadora Web 🧮

🔗 **Acesse o projeto online:** [https://calculadora-snowy-psi.vercel.app/](https://calculadora-snowy-psi.vercel.app/)

Uma calculadora funcional e responsiva construída com HTML, CSS e JavaScript. Este projeto foi desenvolvido para aprimorar conhecimentos em lógica de programação e estruturação de layouts modernos.

## 🚀 Funcionalidades

* **Operações Básicas:** Soma, subtração, multiplicação e divisão.

* **Operações Avançadas:**

  * Raiz Quadrada (√) e Raiz Cúbica (³√)

  * Potenciação (x² e xʸ)

  * Cálculo de Porcentagem (%) corrigido para o uso real.

  * Notação Científica (botão SCI / ×10ⁿ).

  * Pi (π).

* **Design Responsivo:** A interface se adapta perfeitamente a telas de computadores e smartphones, aumentando a área de toque em dispositivos móveis.

## 🛠️ Tecnologias e Processo de Desenvolvimento

Este projeto foi construído utilizando os fundamentos da web: **HTML**, **CSS** e **JavaScript**.

* **Lógica e JavaScript:** A lógica do aplicativo é baseada em funções enxutas e diretas. Para o funcionamento do núcleo da calculadora, pesquisei e implementei a função nativa **`eval()`** do JavaScript. Essa foi uma grande descoberta no processo, pois o `eval()` permite capturar toda a expressão matemática digitada na tela (uma *string*) e resolvê-la automaticamente, sem a necessidade de criar um algoritmo complexo do zero para separar números e operadores. As demais fórmulas (como `Math.sqrt` e `Math.cbrt`) foram implementadas após pesquisa e estudo.

* **Estrutura (HTML):** Estruturação base feita manualmente, organizando o visor e o grid de botões.

* **Design (CSS):** O visual, as cores, os efeitos 3D de clique e a responsividade (uso de Grid Layout e Media Queries) foram desenvolvidos com o auxílio da IA (Gemini Pro), acelerando a construção de uma interface moderna e bonita.

## 💡 Aprendizados

* Uso prático do método `eval()` para processamento de strings matemáticas.

* Manipulação do DOM (Document Object Model) para atualizar o visor da calculadora.

* Uso do método `.split()` para lidar com cálculos de porcentagem no formato humano (ex: `100 - 25%`).

* Aplicação de CSS Grid para alinhamento perfeito de teclados numéricos.
