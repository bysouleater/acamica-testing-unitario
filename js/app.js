// La secuencia de Fibonacci es una serie de numeros donde el proximo numero se obtiene de sumar los anteriores dos.
function fibonacci(size) {
  if (isNaN(size) || size <= 0) return [];
  if (size === 1) return [0];
  if (size === 2) return [0, 1];
  var sequence = [0, 1];
  for (var i = 2; i <= size; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

class Serie {
  constructor(name, algorithm) {
    this.name = name;
    this.algorithm = algorithm;
  }

  nthNumber(n) {
    return this.algorithm ? this.algorithm(n) : null;
  }
}

function createFibonacciSerie() {
  return new Serie('Fibonacci', fibonacci);
}
