const Bamadash = {
    calc(operand1, operand2, operator) {
        if(operator == '+')
        {
        return operand1+operand2;
        }
       else if(operator == '-')
        {
        return operand1-operand2;
        }
        if(operator == '*')
        {
        return operand1*operand2;
        }
        if(operator == '/')
        {
        return operand1/operand2;
        }
        //throw new Error("Method not implimented.");
    },
    compact(array){
        let arr;
        array.forEach(function(value){
            if((value != NaN&&value != false && value != "" && value != null && value != undefined))
            {
                arr.push(value);    
            }
        })
        return arr;

        //throw new Error("Method not implimented.");
    },
    intersection(array1,array2, isStrict){
        throw new Error("Method not implimented.");
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        throw new Error("Method not implimented.");
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}

module.exports = Bamadash;