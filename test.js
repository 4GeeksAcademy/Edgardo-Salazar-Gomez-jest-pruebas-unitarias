const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


test('One euro should be 1.07 dollars', function () {
     expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745)
})

test('Convertir  5 dolares a yenes', () =>{
       expect(fromDollarToYen(5)).toBeCloseTo(731.31);
        
    });

test('Convertir 1000 yenes a libras', () => {
       expect (fromYenToPound(1000)).toBeCloseTo(5.56);
})

