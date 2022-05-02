var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(array) {
  let string = "";  
  let price = 0;
  
  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let name = object.name;
    console.log('name: ', name);
    let shoeArray = object.shoes;
    for (let j = 0; j < shoeArray.length; j++) {
      let shoe = shoeArray[j].name;
      console.log('shoe: ', shoe);
      price += shoeArray[j].price;
      let average = price / shoeArray.length;
      console.log('price is: ', price);
      string += name + ' Average shoe price is $' + average + '\n';
    }
    
  }
  
  console.log(string);
  return string;
}
//Test
function assertEquals(actual, expected, testName){
    if(actual === expected){
      console.log('passed');
    }else{
      console.log('Failed [' + testName + '], expected \n' + expected + ' but got \n' + actual + '');
    }
}
//Test cases
var actual1 = renderInventory(currentInventory);
// expected is string
var expected1 = 'Brunello Cucinelli, tasselled black low-top lace-up, $1000\nBrunello Cucinelli, tasselled green low-top lace-up, $1100\nBrunello Cucinelli, plain beige suede moccasin, $950\nBrunello Cucinelli, plain olive suede moccasin, $1050\nGucci, red leather laced sneakers, $800\nGucci, black leather laced sneakers, $900\n';
assertEquals(actual1, expected1, 'prints string with name, type and shoe price')


