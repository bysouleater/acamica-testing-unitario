var expect = chai.expect;

describe('Application Tests', () => {
  
  // Tests de Ejemplo
  
  it('should be an empty array', () => {
    var array = [];
    expect(array).to.be.empty;
  });

  it('should equal 42', () => {
    var answerToLifeUniverseAndEverything = 42;
    expect(answerToLifeUniverseAndEverything).to.be.equal(42);
  });

  it('should be null', () => {
    expect(null).to.be.null;
  });

  it('should be a cat', () => {
    class Cat {};
    expect(new Cat()).to.be.an.instanceof(Cat); 
  });

  // Tests reales


});

// 1. Agregar una suite de tests dentro de Application Tests para la funcion fibonacci
// 1.1. Testear que la funcion fibonacci devuelva un array vacio si se le pasa como parametro 0, o cualquier numero negativo, o cualquier valor que no sea numerico, o null
// 1.2. Testear que la funcion fibonacci devuelva un array con el primer numero de la serie
// 1.3. Testear que la funcion fibonacci devuelva un array con los 2 primeros numeros de la serie
// 1.4. Testear que la funcion fibonacci devuelva un array con los 10 primeros numeros de la serie
// 2. Agregar una suite de tests dentro de Application Tests para la clase Serie
// 2.1. Testear que al crear un objeto de tipo Serie, el nombre toma el valor enviado en el constructor
// 2.2. Testear que al crear un objeto de tipo Serie sin enviarle un algoritmo, al ejecutar la funcion nthNumber devuelve null
// 3. Agregar una suite de tests dentro de Application Tests para la funcion createFibonacciSerie
// 3.1. Testear que la funcion createFibonacciSerie devuelva un objeto de tipo Serie
