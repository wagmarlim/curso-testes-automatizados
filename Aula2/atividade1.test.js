const AdressMatcher = require('./Atividade1ClassConsumer');

describe('String Manipulations class mock', () => {

    const STREET = 'Rua Arlindo Miler Martim 269 Miler';
    let adressMatcherVar = '';
    let streetNameIndexVar = '';
    let streetNumberIndexVar = '';
    let firstSubstringVar = '';
    let bothStringVar = '';
    let fixStartVar = '';

    beforeAll(() => {
        adressMatcherVar = new AdressMatcher(STREET);
    });

    it('1 - Should returns index of the first substring that matches the given string', () => {
        streetNameIndexVar = adressMatcherVar.findStreetName('Rua');
        expect(streetNameIndexVar).toBe(0);

        streetNameIndexVar = adressMatcherVar.findStreetName('Arlindo');
        expect(streetNameIndexVar).toBe(4);

        streetNameIndexVar = adressMatcherVar.findStreetName('Miler');
        expect(streetNameIndexVar).toBe(12);

        streetNameIndexVar = adressMatcherVar.findStreetName('Martim');
        expect(streetNameIndexVar).toBe(18);

        streetNameIndexVar = adressMatcherVar.findStreetName('269');
        expect(streetNameIndexVar).toBe(25);
    });

    it('2 - Should returns index of the last substring that matches the given string', () => {
        streetNumberIndexVar = adressMatcherVar.findStreetNumber('Miler');
        expect(streetNumberIndexVar).toBe(29);
    });

    it('3 - Should returns the first substring between two given other strings', () => {
        firstSubstringVar = adressMatcherVar.findWordBetweenStreetNameAndStreeNumber('Arlindo ', ' Martim');
        expect(firstSubstringVar).toBe('Miler');

        firstSubstringVar = adressMatcherVar.findWordBetweenStreetNameAndStreeNumber('Miler ', ' 269');
        expect(firstSubstringVar).toBe('Martim');

        firstSubstringVar = adressMatcherVar.findWordBetweenStreetNameAndStreeNumber('Rua ', ' Arlindo');
        expect(firstSubstringVar).toBeNull();
    });

    it('4 - Should return string made of the first 2 and the last 2 chars of the original adress', () => {
        bothStringVar = adressMatcherVar.findBothEnds();
        expect(bothStringVar).toBe('Ruer');
    });

    it('5 - Should return a string where all occurences of its first char have been changed to *', () => {
        adressMatcherVar = new AdressMatcher(STREET);
        fixStartVar = adressMatcherVar.hideStreetName('Miler');
        expect(fixStartVar).toBe('Rua Arlindo * Martim 269 *');
    });
});