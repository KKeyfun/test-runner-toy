function capitalize(str){
    if(typeof(str)!='string'){
        return str;
    }
    let charCode = str.charCodeAt(0);
    if(charCode>=97 && charCode <= 122){
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return str;
    }
}

function reverseString(str){
    if(typeof(str)!='string'){
        return str;
    }
    return str.split('').reverse().join('');
}

class Calculator {
    add(x,y){
        return x+y;
    }
    subtract(x,y){
        return x-y;
    }
    multiply(x,y){
        return x*y;
    }
    divide(x,y){
        return x/y;
    }
}

function caesarCipher(str,offset){
    if(typeof(str)!='string'){
        throw new Error('Enter a valid string');
    }
    if(typeof(offset)!='number' || offset < 1){
        throw new Error('Enter a valid number for offset');
    }
    const strArr = str.split('');
    let caesarArr = [];
    strArr.forEach(char => {
        caesarArr.push(shiftLetters(char,offset));
    })
    return caesarArr.join('');
}

function shiftLetters(char,offset){
    let charCode = char.charCodeAt(0);
    if(charCode>=97 && charCode<=122){
        if(charCode+offset>122){
            return String.fromCharCode(((charCode+offset)%122)+96);
        } else {
            return String.fromCharCode(charCode+offset);
        }
    }
    else if(charCode>=65 && charCode<=90){
        if(charCode+offset>90){
            return String.fromCharCode(((charCode+offset)%90)+64);
        } else {
            return String.fromCharCode(charCode+offset);
        }
    } else {
        return char;
    }
}

function validateArrayOfNumbers(arr){
    if(arr.length < 1){
        return false;
    }
    let valid = true;
    arr.forEach((el) => {
        if(typeof(el) != 'number'){
            valid = false;
        }
    })
    return valid;
}

function getMin(arr){
    let min = arr[0];
    arr.forEach(el => {
        if(el<min){min = el}
    })
    return min;
}

function getMax(arr){
    let max = arr[0];
    arr.forEach(el => {
        if(el>max){max = el}
    })
    return max;
}

function getAvg(arr){
    let sum = 0;
    arr.forEach(el => sum+= el);
    return Math.round(sum/arr.length);
}

function analyzeArray(arr){
    if(!validateArrayOfNumbers(arr)){
        throw new Error('Enter a valid array');
    }
    return {'average':getAvg(arr),'min':getMin(arr),'max':getMax(arr),'length':arr.length}
}

export {capitalize,reverseString,Calculator,caesarCipher,analyzeArray,getMin,getMax,getAvg};