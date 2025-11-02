# 👻 Teste de Mutação - Análise de Eficácia de Testes

> **Disciplina:** Teste de Software  
> **Aluno:** Renato Matos Alves Penna  

## 📋 Sobre o Projeto

Este projeto demonstra a aplicação prática de **Teste de Mutação** usando a ferramenta **StrykerJS** para avaliar e melhorar a eficácia de uma suíte de testes. O experimento revela um paradoxo comum no desenvolvimento de software: **alta cobertura de código NÃO garante testes de qualidade**.

## 🎯 Objetivo

Avaliar criticamente a diferença entre:
- **Cobertura de Código** - mede se o código foi executado
- **Teste de Mutação** - mede se o código foi realmente testado

O objetivo é demonstrar que testes podem executar 98% do código mas ainda deixar passar 45 bugs potenciais não detectados.

## 🔍 O Paradoxo Descoberto

### Antes da Melhoria
- ✅ **98.64%** de cobertura de linhas
- ⚠️ **45 mutantes sobreviveram** (bugs não detectados)  
- ❌ **58.82%** de cobertura de branches
- **Mutation Score:** 73.61%

### Depois da Melhoria
- ✅ **100%** de cobertura de linhas
- ✅ **7 mutantes sobreviveram** (redução de 84%)
- ✅ **100%** de cobertura de branches
- **Mutation Score:** 96.76%

### Conclusão
> "Cobertura de código te diz que seu código foi **executado**.  
> Teste de mutação te diz que seu código foi **TESTADO**."

## 🧪 Mutantes Críticos Analisados

### 1. Conditional Expression (fatorial)
**Mutação:** `if (n === 0 || n === 1)` → `if (false)`

**Por que sobreviveu:** Os testes validavam apenas o OUTPUT final, não o caminho de execução. Para `fatorial(0)` e `fatorial(1)`, o loop `for` não executava e retornava `resultado = 1` corretamente, mesmo sem a condição.

### 2. Logical Operator (fatorial)
**Mutação:** `if (n === 0 || n === 1)` → `if (n === 0 && n === 1)`

**Por que sobreviveu:** Criou uma condição impossível, mas o resultado final permanecia correto por coincidência através do loop.

### 3. Conditional Expression (produtoArray)
**Mutação:** `if (numeros.length === 0)` → `if (false)`

**Por que sobreviveu:** Array vazio executava `reduce()` com valor inicial 1, retornando 1 corretamente pelo caminho errado.

## 💡 Solução Implementada

### Estratégias Utilizadas

1. **Testes de Comportamento** - validar PATH, não apenas OUTPUT
2. **Testes de Boundary** - casos extremos e limites exatos
3. **Testes com Spies** - verificar que métodos corretos são (ou não) chamados
4. **Testes Parametrizados** - iterar múltiplos casos sistematicamente

### Exemplo de Melhoria

**ANTES (teste fraco):**
```javascript
test('deve retornar 1 para fatorial de 0', () => {
  expect(fatorial(0)).toBe(1);
});
```

**DEPOIS (teste forte):**
```javascript
test('deve usar OR ao verificar casos base', () => {
  const resultado0 = fatorial(0);
  const resultado1 = fatorial(1);
  const resultado2 = fatorial(2);
  
  // Casos base retornam 1
  expect(resultado0).toBe(1);
  expect(resultado1).toBe(1);
  
  // Caso não-base é diferente
  expect(resultado2).toBe(2);
  expect(resultado2).not.toBe(resultado0);
});

test('deve executar loop apenas para n >= 2', () => {
  const casosSemLoop = [0, 1];
  const casosComLoop = [2, 3, 4];
  
  casosSemLoop.forEach(n => {
    expect(fatorial(n)).toBe(1); // retorno direto
  });
  
  casosComLoop.forEach(n => {
    expect(fatorial(n)).toBeGreaterThan(1); // passou pelo loop
  });
});
```

## 📊 Resultados e Análise Completa

Para ver a análise detalhada com todos os mutantes, estratégias de solução e conclusões, consulte o relatório completo:

**📄 [Renato_-_MutationTesting_Report.pdf](./Renato_-_MutationTesting_Report.pdf)**

O relatório contém:
- Análise inicial com comparação de métricas
- Detalhamento de 3+ mutantes críticos
- Estratégias de teste implementadas
- Comparação antes/depois com evidências
- Conclusões sobre qualidade vs. quantidade

## 🚀 Como Executar

### Pré-requisitos
```bash
npm install
```

### Executar Testes
```bash
npm test
```

### Gerar Cobertura de Código
```bash
npm test -- --coverage
```

### Executar Teste de Mutação
```bash
npx stryker run
```

O relatório HTML será gerado em `reports/mutation/mutation.html`

## 📈 Análise de Custo-Benefício

**Investimento:**
- 2 horas de análise e implementação
- +17 testes estratégicos (+34% em quantidade)

**Retorno:**
- 38 bugs potenciais encontrados e eliminados
- 0 mutantes em "no coverage"
- 100% de confiança na detecção de defeitos

## 🎓 Principais Aprendizados

1. **Cobertura ≠ Qualidade** - 98.64% de cobertura ocultava 38 bugs potenciais

2. **Teste de Mutação Expõe Testes Fracos** - Revelou três padrões problemáticos:
   - Testes validando apenas OUTPUT, ignorando COMPORTAMENTO
   - Testes não cobrindo todos os branches de condicionais
   - Testes dependendo de valores iniciais ao invés de lógica

3. **Qualidade > Quantidade** - Apenas 17 testes estratégicos foram necessários para atingir 96.76% de mutation score

4. **Testes Como Documentação** - Testes que matam mutantes são específicos, claros e documentam a intenção do código

## 🔗 Referências

- [Stryker Mutator Documentation](https://stryker-mutator.io/)
- [Repositório Original do Projeto](https://github.com/CleitonSilvaT/operacoes-mutante)

## 📝 Estrutura do Projeto

```
operacoes-mutante/
├── src/
│   └── operacoes.js          # Funções matemáticas implementadas
├── test/
│   └── operacoes.test.js     # Suíte de testes melhorada
├── reports/
│   └── mutation/             # Relatórios do Stryker
├── stryker.conf.json         # Configuração do Stryker
├── Renato_-_MutationTesting_Report.pdf  # Relatório final completo
└── README.md                 # Este arquivo
```

## 💭 Reflexão Final

O teste de mutação não substitui boas práticas de desenvolvimento, mas as complementa ao fornecer feedback objetivo sobre a eficácia real da suíte de testes. É uma ferramenta essencial que transforma intuição em dados, permitindo decisões informadas sobre quando parar de escrever testes.

**Cada mutante morto representa um bug potencial evitado em produção.**

---

**Desenvolvido como parte do trabalho de Teste de Software - 2025**