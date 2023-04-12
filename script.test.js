import { capitalize,reverseString,Calculator,caesarCipher,analyzeArray,getMin,getMax,getAvg } from "./script";

test('Test Capitalize',() => {
    expect(capitalize('ann')).toBe('Ann');
})

test('Test Capitalize on number',() => {
    expect(capitalize('13')).toBe('13');
})

test('Test Capitalize on special character',() => {
    expect(capitalize('$$$anta')).toBe('$$$anta');
})

test('Test Reverse String', () => {
    expect(reverseString('abcdef')).toBe('fedcba');
})

test('Test Reverse String on numbers', () => {
    expect(reverseString(1234)).toBe(1234);
})

test('Test Reverse String with spaces and special characters', () => {
    expect(reverseString('a mailman@mail.com')).toBe('moc.liam@namliam a');
})

const calculator = new Calculator;

test('Testing calculator add function', () => {
    expect(calculator.add(222,888)).toBe(1110);
})

test('Testing calculator subtract function', () => {
    expect(calculator.subtract(5000,350)).toBe(4650);
})

test('Testing calculator multiply function', () => {
    expect(calculator.multiply(5,15)).toBe(75);
})

test('Testing calculator divide function', () => {
    expect(calculator.divide(845,5)).toBe(169);
})

test('Testing caesar cypher with offset of 2', () => {
    expect(caesarCipher('Zebra',2)).toBe('Bgdtc');
})

test('Testing caesar cypher with offset of 5 and special characters', () => {
    expect(caesarCipher('Hey Mom, it\'s a zebra!',5)).toBe('Mjd Rtr, ny\'x f ejgwf!');
})

test('Testing caesar cypher error throw for string', () => {
    expect(() => caesarCipher(21,2).toThrow('Enter a valid string'));
})

test('Testing caesar cypher error throw for offset', () => {
    expect(() => caesarCipher('word',true).toThrow('Enter a valid number for offset'));
})

test('Testing caesar cypher error throw for negative offset', () => {
    expect(() => caesarCipher('word',-5).toThrow('Enter a valid number for offset'));
})

test('Testing getMin',() => {
    expect(getMin([2,6,3,6,272,2,3,5,6,2,1,6])).toBe(1);
})

test('Testing getMin for negatives',() => {
    expect(getMin([2,6,3,-9,272,2,3,5,6,2,1,6])).toBe(-9);
})

test('Testing getMax',() => {
    expect(getMax([2,6,3,6,272,2,3,5,6,2,1,6])).toBe(272);
})

test('Testing getAvg',() => {
    expect(getAvg([2,6,3,6,272,2,3,-5,-6.55,6,2,1,6])).toBe(23);
})

test('Analyzing array', () => {
    expect(analyzeArray([1,2,3,4,5,6,7,921])).toEqual({'average':119,'min':1,'max':921,'length':8})
})

test('Analyzing empty array', () => {
    expect(() => analyzeArray([]).toThrow('Enter a valid array'));
})

test('Analyzing array with special characters', () => {
    expect(() => analyzeArray(['\\','@','^']).toThrow('Enter a valid array'));
})

test('Analyzing empty array', () => {
    expect(() => analyzeArray([]).toThrow('Enter a valid array'));
})

test('Analyzing array with strings', () => {
    expect(() => analyzeArray([1,'word','up','word','up','word','up']).toThrow('Enter a valid array'));
})

test('Analyzing array with non-number data types', () => {
    expect(() => analyzeArray([null,undefined,false,true]).toThrow('Enter a valid array'));
})

test('Analyzing array with 1 element', () => {
    expect(analyzeArray([5])).toEqual({'average':5,'min':5,'max':5,'length':1})
})