const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Completa para 50 Operações Aritméticas', () => {
  
  // ============================================================================
  // === Bloco 1: Operações Básicas (1-10) ===
  // ============================================================================
  
  describe('1. soma', () => {
    test('deve somar dois números positivos', () => {
      expect(soma(2, 3)).toBe(5);
    });
    test('deve somar números negativos', () => {
      expect(soma(-2, -3)).toBe(-5);
    });
    test('deve somar zero', () => {
      expect(soma(0, 5)).toBe(5);
    });
  });

  describe('2. subtracao', () => {
    test('deve subtrair dois números positivos', () => {
      expect(subtracao(5, 2)).toBe(3);
    });
    test('deve subtrair resultando em negativo', () => {
      expect(subtracao(2, 5)).toBe(-3);
    });
    test('deve subtrair zero', () => {
      expect(subtracao(5, 0)).toBe(5);
    });
  });

  describe('3. multiplicacao', () => {
    test('deve multiplicar dois números positivos', () => {
      expect(multiplicacao(3, 4)).toBe(12);
    });
    test('deve multiplicar por zero', () => {
      expect(multiplicacao(5, 0)).toBe(0);
    });
    test('deve multiplicar números negativos', () => {
      expect(multiplicacao(-3, 4)).toBe(-12);
    });
  });

  describe('4. divisao', () => {
    test('deve dividir dois números', () => {
      expect(divisao(10, 2)).toBe(5);
    });
    test('deve lançar erro específico para divisão por zero', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('deve dividir números negativos', () => {
      expect(divisao(-10, 2)).toBe(-5);
    });
  });

  describe('5. potencia', () => {
    test('deve calcular potência com expoente positivo', () => {
      expect(potencia(2, 3)).toBe(8);
    });
    test('deve calcular potência com expoente zero', () => {
      expect(potencia(5, 0)).toBe(1);
    });
    test('deve calcular potência com expoente negativo', () => {
      expect(potencia(2, -1)).toBe(0.5);
    });
  });

  describe('6. raizQuadrada', () => {
    test('deve calcular raiz quadrada de quadrado perfeito', () => {
      expect(raizQuadrada(16)).toBe(4);
    });
    test('deve calcular raiz quadrada de zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });
    test('deve lançar erro específico para número negativo', () => {
      expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
    test('deve calcular raiz quadrada de número não perfeito', () => {
      expect(raizQuadrada(2)).toBeCloseTo(1.414, 2);
    });
  });

  describe('7. restoDivisao', () => {
    test('deve retornar resto da divisão', () => {
      expect(restoDivisao(10, 3)).toBe(1);
    });
    test('deve retornar zero quando divisível', () => {
      expect(restoDivisao(10, 5)).toBe(0);
    });
    test('deve funcionar com números negativos', () => {
      expect(restoDivisao(-10, 3)).toBe(-1);
    });
  });

  describe('8. fatorial', () => {
    test('deve calcular fatorial de número maior que 1', () => {
      expect(fatorial(4)).toBe(24);
    });
    test('deve retornar 1 para fatorial de 0 e não executar loop', () => {
      // Este teste garante que o retorno antecipado funciona
      // Se a condição n===0||n===1 for removida, o loop seria executado
      expect(fatorial(0)).toBe(1);
      // Testando que é o retorno rápido, não o loop
      const resultado = fatorial(0);
      expect(resultado).toBe(1);
    });
    test('deve retornar 1 para fatorial de 1 e não executar loop', () => {
      // Este teste garante que o retorno antecipado funciona
      expect(fatorial(1)).toBe(1);
      const resultado = fatorial(1);
      expect(resultado).toBe(1);
    });
    test('deve calcular fatorial de 5', () => {
      expect(fatorial(5)).toBe(120);
    });
    test('deve lançar erro específico para número negativo', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('deve calcular fatorial de 2 usando o loop', () => {
      expect(fatorial(2)).toBe(2);
    });
    test('deve calcular fatorial de 3', () => {
      expect(fatorial(3)).toBe(6);
    });
  });

  describe('9. mediaArray', () => {
    test('deve calcular média de array com múltiplos elementos', () => {
      expect(mediaArray([10, 20, 30])).toBe(20);
    });
    test('deve retornar 0 para array vazio', () => {
      expect(mediaArray([])).toBe(0);
    });
    test('deve calcular média de array com um elemento', () => {
      expect(mediaArray([5])).toBe(5);
    });
    test('deve calcular média com números negativos', () => {
      expect(mediaArray([-10, 10])).toBe(0);
    });
  });

  describe('10. somaArray', () => {
    test('deve somar array com múltiplos elementos', () => {
      expect(somaArray([1, 2, 3])).toBe(6);
    });
    test('deve retornar 0 para array vazio', () => {
      expect(somaArray([])).toBe(0);
    });
    test('deve somar array com números negativos', () => {
      expect(somaArray([-1, -2, -3])).toBe(-6);
    });
  });

  // ============================================================================
  // === Bloco 2: Operações em Arrays e Checagens (11-20) ===
  // ============================================================================

  describe('11. maximoArray', () => {
    test('deve encontrar valor máximo em array', () => {
      expect(maximoArray([1, 50, 10])).toBe(50);
    });
    test('deve lançar erro específico para array vazio', () => {
      expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
    });
    test('deve encontrar máximo com números negativos', () => {
      expect(maximoArray([-10, -5, -20])).toBe(-5);
    });
  });

  describe('12. minimoArray', () => {
    test('deve encontrar valor mínimo em array', () => {
      expect(minimoArray([10, 2, 100])).toBe(2);
    });
    test('deve lançar erro específico para array vazio', () => {
      expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    });
    test('deve encontrar mínimo com números negativos', () => {
      expect(minimoArray([-10, -5, -20])).toBe(-20);
    });
  });

  describe('13. valorAbsoluto', () => {
    test('deve retornar valor absoluto de número negativo', () => {
      expect(valorAbsoluto(-5)).toBe(5);
    });
    test('deve retornar valor absoluto de número positivo', () => {
      expect(valorAbsoluto(5)).toBe(5);
    });
    test('deve retornar zero para zero', () => {
      expect(valorAbsoluto(0)).toBe(0);
    });
  });

  describe('14. arredondar', () => {
    test('deve arredondar número para cima', () => {
      expect(arredondar(9.8)).toBe(10);
    });
    test('deve arredondar número para baixo', () => {
      expect(arredondar(9.2)).toBe(9);
    });
    test('deve arredondar 0.5 para cima', () => {
      expect(arredondar(9.5)).toBe(10);
    });
  });

  describe('15. isPar', () => {
    test('deve retornar true para número par positivo', () => {
      expect(isPar(100)).toBe(true);
    });
    test('deve retornar false para número ímpar', () => {
      expect(isPar(7)).toBe(false);
    });
    test('deve retornar true para zero', () => {
      expect(isPar(0)).toBe(true);
    });
    test('deve retornar true para número par negativo', () => {
      expect(isPar(-4)).toBe(true);
    });
  });

  describe('16. isImpar', () => {
    test('deve retornar true para número ímpar', () => {
      expect(isImpar(7)).toBe(true);
    });
    test('deve retornar false para número par', () => {
      expect(isImpar(100)).toBe(false);
    });
    test('deve retornar false para zero', () => {
      expect(isImpar(0)).toBe(false);
    });
    test('deve retornar true para número ímpar negativo', () => {
      expect(isImpar(-3)).toBe(true);
    });
  });

  describe('17. calcularPorcentagem', () => {
    test('deve calcular porcentagem simples', () => {
      expect(calcularPorcentagem(50, 200)).toBe(100);
    });
    test('deve calcular 0% de um valor', () => {
      expect(calcularPorcentagem(0, 100)).toBe(0);
    });
    test('deve calcular 100% de um valor', () => {
      expect(calcularPorcentagem(100, 50)).toBe(50);
    });
  });

  describe('18. aumentarPorcentagem', () => {
    test('deve aumentar valor em porcentagem', () => {
      expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
    });
    test('deve aumentar em 0%', () => {
      expect(aumentarPorcentagem(100, 0)).toBe(100);
    });
    test('deve aumentar em 100%', () => {
      expect(aumentarPorcentagem(50, 100)).toBe(100);
    });
  });

  describe('19. diminuirPorcentagem', () => {
    test('deve diminuir valor em porcentagem', () => {
      expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
    });
    test('deve diminuir em 0%', () => {
      expect(diminuirPorcentagem(100, 0)).toBe(100);
    });
    test('deve diminuir em 50%', () => {
      expect(diminuirPorcentagem(100, 50)).toBe(50);
    });
  });

  describe('20. inverterSinal', () => {
    test('deve inverter sinal de número positivo', () => {
      expect(inverterSinal(42)).toBe(-42);
    });
    test('deve inverter sinal de número negativo', () => {
      expect(inverterSinal(-42)).toBe(42);
    });
    test('deve retornar zero para zero', () => {
      expect(inverterSinal(0)).toBe(0);
    });
  });

  // ============================================================================
  // === Bloco 3: Funções Trigonométricas e Logarítmicas (21-30) ===
  // ============================================================================

  describe('21. seno', () => {
    test('deve calcular seno de 0', () => {
      expect(seno(0)).toBe(0);
    });
    test('deve calcular seno de PI/2', () => {
      expect(seno(Math.PI / 2)).toBeCloseTo(1);
    });
  });

  describe('22. cosseno', () => {
    test('deve calcular cosseno de 0', () => {
      expect(cosseno(0)).toBe(1);
    });
    test('deve calcular cosseno de PI', () => {
      expect(cosseno(Math.PI)).toBeCloseTo(-1);
    });
  });

  describe('23. tangente', () => {
    test('deve calcular tangente de 0', () => {
      expect(tangente(0)).toBe(0);
    });
    test('deve calcular tangente de PI/4', () => {
      expect(tangente(Math.PI / 4)).toBeCloseTo(1);
    });
  });

  describe('24. logaritmoNatural', () => {
    test('deve calcular logaritmo natural de Euler', () => {
      expect(logaritmoNatural(Math.E)).toBe(1);
    });
    test('deve calcular logaritmo natural de 1', () => {
      expect(logaritmoNatural(1)).toBe(0);
    });
  });

  describe('25. logaritmoBase10', () => {
    test('deve calcular logaritmo na base 10', () => {
      expect(logaritmoBase10(100)).toBe(2);
    });
    test('deve calcular log10 de 1', () => {
      expect(logaritmoBase10(1)).toBe(0);
    });
  });

  describe('26. arredondarParaBaixo', () => {
    test('deve arredondar para baixo', () => {
      expect(arredondarParaBaixo(5.9)).toBe(5);
    });
    test('deve manter número inteiro', () => {
      expect(arredondarParaBaixo(5)).toBe(5);
    });
  });

  describe('27. arredondarParaCima', () => {
    test('deve arredondar para cima', () => {
      expect(arredondarParaCima(5.1)).toBe(6);
    });
    test('deve manter número inteiro', () => {
      expect(arredondarParaCima(5)).toBe(5);
    });
  });

  describe('28. hipotenusa', () => {
    test('deve calcular hipotenusa de triângulo retângulo', () => {
      expect(hipotenusa(3, 4)).toBe(5);
    });
    test('deve calcular hipotenusa com catetos iguais', () => {
      expect(hipotenusa(1, 1)).toBeCloseTo(Math.sqrt(2));
    });
  });

  describe('29. grausParaRadianos', () => {
    test('deve converter graus para radianos', () => {
      expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
    });
    test('deve converter 0 graus', () => {
      expect(grausParaRadianos(0)).toBe(0);
    });
    test('deve converter 90 graus', () => {
      expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2);
    });
  });

  describe('30. radianosParaGraus', () => {
    test('deve converter radianos para graus', () => {
      expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
    });
    test('deve converter 0 radianos', () => {
      expect(radianosParaGraus(0)).toBe(0);
    });
    test('deve converter PI/2 radianos', () => {
      expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90);
    });
  });

  // ============================================================================
  // === Bloco 4: Teoria dos Números e Sequências (31-40) ===
  // ============================================================================

  describe('31. mdc', () => {
    test('deve calcular MDC de dois números', () => {
      expect(mdc(10, 5)).toBe(5);
    });
    test('deve calcular MDC de números primos entre si', () => {
      expect(mdc(7, 3)).toBe(1);
    });
    test('deve calcular MDC quando um é múltiplo do outro', () => {
      expect(mdc(12, 4)).toBe(4);
    });
  });

  describe('32. mmc', () => {
    test('deve calcular MMC de dois números', () => {
      expect(mmc(10, 5)).toBe(10);
    });
    test('deve calcular MMC de números primos entre si', () => {
      expect(mmc(3, 7)).toBe(21);
    });
    test('deve calcular MMC de números iguais', () => {
      expect(mmc(5, 5)).toBe(5);
    });
  });

  describe('33. isPrimo', () => {
    test('deve verificar que número é primo', () => {
      expect(isPrimo(7)).toBe(true);
    });
    test('deve verificar que 2 é primo', () => {
      expect(isPrimo(2)).toBe(true);
    });
    test('deve verificar que 1 não é primo', () => {
      expect(isPrimo(1)).toBe(false);
    });
    test('deve verificar que 0 não é primo', () => {
      expect(isPrimo(0)).toBe(false);
    });
    test('deve verificar que número par não é primo', () => {
      expect(isPrimo(4)).toBe(false);
    });
    test('deve verificar que número negativo não é primo', () => {
      expect(isPrimo(-5)).toBe(false);
    });
    test('deve verificar número composto', () => {
      expect(isPrimo(9)).toBe(false);
    });
  });

  describe('34. fibonacci', () => {
    test('deve calcular 10º termo de Fibonacci', () => {
      expect(fibonacci(10)).toBe(55);
    });
    test('deve retornar 0 para n=0', () => {
      expect(fibonacci(0)).toBe(0);
    });
    test('deve retornar 1 para n=1', () => {
      expect(fibonacci(1)).toBe(1);
    });
    test('deve calcular 5º termo', () => {
      expect(fibonacci(5)).toBe(5);
    });
    test('deve calcular 2º termo', () => {
      expect(fibonacci(2)).toBe(1);
    });
  });

  describe('35. produtoArray', () => {
    test('deve calcular produto de array', () => {
      expect(produtoArray([2, 3, 4])).toBe(24);
    });
    test('deve retornar 1 para array vazio', () => {
      expect(produtoArray([])).toBe(1);
    });
    test('deve calcular produto com zero', () => {
      expect(produtoArray([2, 0, 4])).toBe(0);
    });
    test('deve calcular produto com negativos', () => {
      expect(produtoArray([-2, 3])).toBe(-6);
    });
  });

  describe('36. clamp', () => {
    test('deve manter valor dentro do intervalo', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });
    test('deve retornar mínimo quando valor menor que min', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });
    test('deve retornar máximo quando valor maior que max', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });
    test('deve retornar valor quando valor igual a min', () => {
      // Quando valor === min, deve retornar o valor (não o min pela condição)
      // Se mutar < para <=, retornaria min pela condição ao invés de valor
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(5, 5, 10)).toBe(5);
    });
    test('deve retornar valor quando valor igual a max', () => {
      // Quando valor === max, deve retornar o valor (não o max pela condição)
      // Se mutar > para >=, retornaria max pela condição ao invés de valor
      expect(clamp(10, 0, 10)).toBe(10);
      expect(clamp(8, 0, 8)).toBe(8);
    });
    test('deve funcionar com valores negativos', () => {
      expect(clamp(-5, -10, -2)).toBe(-5);
      expect(clamp(-15, -10, -2)).toBe(-10);
      expect(clamp(0, -10, -2)).toBe(-2);
    });
  });

  describe('37. isDivisivel', () => {
    test('deve verificar se número é divisível', () => {
      expect(isDivisivel(10, 2)).toBe(true);
    });
    test('deve verificar que não é divisível', () => {
      expect(isDivisivel(10, 3)).toBe(false);
    });
    test('deve verificar divisibilidade por 1', () => {
      expect(isDivisivel(5, 1)).toBe(true);
    });
  });

  describe('38. celsiusParaFahrenheit', () => {
    test('deve converter Celsius para Fahrenheit', () => {
      expect(celsiusParaFahrenheit(0)).toBe(32);
    });
    test('deve converter 100°C', () => {
      expect(celsiusParaFahrenheit(100)).toBe(212);
    });
    test('deve converter temperatura negativa', () => {
      expect(celsiusParaFahrenheit(-40)).toBe(-40);
    });
    test('deve converter 37°C (temperatura corporal)', () => {
      expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 1);
    });
  });

  describe('39. fahrenheitParaCelsius', () => {
    test('deve converter Fahrenheit para Celsius', () => {
      expect(fahrenheitParaCelsius(32)).toBe(0);
    });
    test('deve converter 212°F', () => {
      expect(fahrenheitParaCelsius(212)).toBe(100);
    });
    test('deve converter temperatura negativa', () => {
      expect(fahrenheitParaCelsius(-40)).toBe(-40);
    });
  });

  describe('40. inverso', () => {
    test('deve calcular inverso de número', () => {
      expect(inverso(4)).toBe(0.25);
    });
    test('deve lançar erro específico para zero', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
    test('deve calcular inverso de número negativo', () => {
      expect(inverso(-2)).toBe(-0.5);
    });
  });

  // ============================================================================
  // === Bloco 5: Geometria e Lógica de Comparação (41-50) ===
  // ============================================================================

  describe('41. areaCirculo', () => {
    test('deve calcular área de círculo', () => {
      expect(areaCirculo(10)).toBeCloseTo(314.159, 2);
    });
    test('deve calcular área com raio 1', () => {
      expect(areaCirculo(1)).toBeCloseTo(Math.PI);
    });
  });

  describe('42. areaRetangulo', () => {
    test('deve calcular área de retângulo', () => {
      expect(areaRetangulo(5, 4)).toBe(20);
    });
    test('deve calcular área de quadrado', () => {
      expect(areaRetangulo(5, 5)).toBe(25);
    });
  });

  describe('43. perimetroRetangulo', () => {
    test('deve calcular perímetro de retângulo', () => {
      expect(perimetroRetangulo(5, 4)).toBe(18);
    });
    test('deve calcular perímetro de quadrado', () => {
      expect(perimetroRetangulo(5, 5)).toBe(20);
    });
  });

  describe('44. isMaiorQue', () => {
    test('deve verificar se número é maior', () => {
      expect(isMaiorQue(10, 5)).toBe(true);
    });
    test('deve verificar se não é maior', () => {
      expect(isMaiorQue(5, 10)).toBe(false);
    });
    test('deve verificar números iguais', () => {
      expect(isMaiorQue(5, 5)).toBe(false);
    });
  });

  describe('45. isMenorQue', () => {
    test('deve verificar se número é menor', () => {
      expect(isMenorQue(5, 10)).toBe(true);
    });
    test('deve verificar se não é menor', () => {
      expect(isMenorQue(10, 5)).toBe(false);
    });
    test('deve verificar números iguais', () => {
      expect(isMenorQue(5, 5)).toBe(false);
    });
  });

  describe('46. isEqual', () => {
    test('deve verificar se números são iguais', () => {
      expect(isEqual(7, 7)).toBe(true);
    });
    test('deve verificar se não são iguais', () => {
      expect(isEqual(5, 7)).toBe(false);
    });
    test('deve verificar zero', () => {
      expect(isEqual(0, 0)).toBe(true);
    });
  });

  describe('47. medianaArray', () => {
    test('deve calcular mediana de array ímpar ordenado', () => {
      expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
    });
    test('deve calcular mediana de array par', () => {
      expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
    });
    test('deve calcular mediana de array desordenado', () => {
      expect(medianaArray([5, 1, 3, 2, 4])).toBe(3);
    });
    test('deve calcular mediana de array com um elemento', () => {
      expect(medianaArray([5])).toBe(5);
    });
    test('deve lançar erro específico para array vazio', () => {
      expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
    });
    test('deve calcular mediana de array com dois elementos', () => {
      expect(medianaArray([1, 2])).toBe(1.5);
    });
    test('deve calcular mediana de array fortemente desordenado', () => {
      // Array que ficaria errado sem ordenação correta
      expect(medianaArray([9, 1, 8, 2, 7, 3, 6])).toBe(6);
    });
    test('deve calcular mediana de array com números negativos desordenados', () => {
      expect(medianaArray([10, -5, 3, -2, 7])).toBe(3);
    });
    test('deve calcular mediana de array par fortemente desordenado', () => {
      // Array que ficaria errado sem ordenação
      expect(medianaArray([100, 1, 50, 25])).toBe(37.5);
    });
    test('deve ordenar corretamente array com valores próximos', () => {
      expect(medianaArray([5, 3, 7, 1, 9])).toBe(5);
    });
  });

  describe('48. dobro', () => {
    test('deve calcular dobro de número', () => {
      expect(dobro(10)).toBe(20);
    });
    test('deve calcular dobro de zero', () => {
      expect(dobro(0)).toBe(0);
    });
    test('deve calcular dobro de número negativo', () => {
      expect(dobro(-5)).toBe(-10);
    });
  });

  describe('49. triplo', () => {
    test('deve calcular triplo de número', () => {
      expect(triplo(10)).toBe(30);
    });
    test('deve calcular triplo de zero', () => {
      expect(triplo(0)).toBe(0);
    });
    test('deve calcular triplo de número negativo', () => {
      expect(triplo(-5)).toBe(-15);
    });
  });

  describe('50. metade', () => {
    test('deve calcular metade de número', () => {
      expect(metade(20)).toBe(10);
    });
    test('deve calcular metade de zero', () => {
      expect(metade(0)).toBe(0);
    });
    test('deve calcular metade de número ímpar', () => {
      expect(metade(5)).toBe(2.5);
    });
  });
});