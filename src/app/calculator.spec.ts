import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  let calculator:any;
  //Arrange
  beforeEach(()=>{
    calculator = new Calculator();
  });

  describe('Test for multiply', ()=>{
    it('should return tewnty', () => {
      //Arrange
      //let calculator = new Calculator();
      //Act
      let result = calculator.multiply(5,4);
      //Assert
      expect(result).toEqual(20);
    }); 
  });


  describe('Test for divide', ()=>{
    it('divide for a number', () => {
      //Arrange
      //let calculator = new Calculator();
      //Act && Assert
      expect(calculator.divide(6,3)).toEqual(2);
      expect(calculator.divide(5,2)).toEqual(2.5);
      //Cualquiera de las dos metodos se puede utilizar para datos nulos
      //expect(calculator.divide(1151111111111111,0)).toBeNull();
      expect(calculator.divide(288393989384934,0)).toEqual(null);
     
    });
  });

  describe('Test macher of jasmin', ()=>{
    it('Test mtcher', () => {
     let name = 'Wilmer';
     let name2;

     expect(name).toBeDefined();
     expect(name2).toBeUndefined();

     expect(1+2 == 3).toBeTruthy();
     expect(1+1 == 3).toBeFalsy();

     expect(5).toBeLessThan(10);
     expect(20).toBeGreaterThanOrEqual(10);

     expect('123456789').toMatch(/123/);

     expect(['apples','oranges','pears']).toContain('oranges');
     
    });
  });

  
});


