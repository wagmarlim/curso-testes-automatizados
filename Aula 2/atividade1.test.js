const AdressMatcher = require('./atividade1ClassConsumer');
let stringAdress = '';
let adressMatcher = '';


describe("String Manipulations class mock", () => {


  it('Should returns the first substring that matches the given string', () => {
  
  stringAdress = 'Abigale ApleAbi Orange';
  adressMatcher = new AdressMatcher(stringAdress);
  adressMatcher.findStreetName('Abi');


  });

  it('Should returns the last substring that matches the given string', () => {
  
    stringAdress = 'Abigale ApleAbi Orange';
    adressMatcher = new AdressMatcher(stringAdress);
    adressMatcher.findStreetNumber('Ora');
  
  
    });

});
