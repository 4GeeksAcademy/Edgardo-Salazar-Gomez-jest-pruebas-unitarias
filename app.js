//console.log('Hello World');

const sum = (a, b) => a + b;


/*et result = sum (7, 3)
console.log(result)*/

module.exports = { sum };


//Convienrte de euros a dolares
function fromEuroToDollar(euros) {
    const rateUSD = 1.07; // 1 EUR = 1.07 USD
    return euros * rateUSD;
};


//Para convertir dólares a yenes 
function fromDollarToYen(dollars) {
    const rateUSD = 1.07;
    const rateJPY = 156.5;
            
    const euros = dollars / rateUSD;   
    const yenes = euros * rateJPY;     
    return yenes;
    }

 //Convierte de yenes a libras   
function fromYenToPound(yen) {
    const rateGBP = 0.87;
    const rateJPY = 156.5;

    const euros = yen / rateJPY;   // De JPY a EUR
    const pounds = euros * rateGBP; // De EUR a GBP
    return pounds;    
    }

    module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
