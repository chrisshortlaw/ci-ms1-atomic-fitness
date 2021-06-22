import {PUBSUB} from './viewModel.js';

const DATAMODEL = {
                    // operand1: 0, 
                    // operator: [], 
                    // operand2: 0,
                    numString: '0',  // String of inputs from DOM
                    calcData: [],   // holds 2 operands and 1 operator
                    /**
                     * @param {string} num
                     */
                    get number(num) {
                        parseFloat(num);
                    },
                    get outputData() {
                        return DATAMODEL.calcData;
                    },
                    get getNumString() {
                        return DATAMODEL.numString;
                        },
                    /** constructNumber: function(numString) {
                        // DMValue is value of Object (i.e. operand1, operand2)
                        // if (parseInt(numString) {
                        //    DATAMODEL.calcData.push(numString);
                        // } else {
                        //    if (numString === ('+'||'-'||'/'||'*'||'%')) {
                        //       DATAMODEL.operator = numString;
                        //     }
                        //  }
                        }, **/
                    calcResult: function() {
                            // call function from calc.js to resolve function
                        },
                    clearData: function() {
                            for (data in DATAMODEL.calcData) {
                                DATAMODEL.calcData[data].pop();
                            }
                            for (op in DATAMODEL.operator) {
                                DATAMODEL.operator[op].pop();
                            } 
                        },
                    clearLastEntry: function() {
                        DATAMODEL.calcData.pop();
                        },
                    
                    /**
                     * @param {string} newString
                     */
                    set setNumString(newString) {
                            if (DATAMODEL.numString === '0') {
                                DATAMODEL.numString = newString;
                                PUBSUB.pubDataChange(DATAMODEL.getNumString);
                            } else {
                                DATAMODEL.numString += newString;
                                PUBSUB.pubDataChange(DATAMODEL.getNumString);
                            }
                        },
                    /**
                     * 
                     */
                    set clearDisplay() {
                        DATAMODEL.numString = '0';
                        PUBSUB.pubDataChange(DATAMODEL.getNumString)
                        },
    }

// Insert function to enforce Number type, throwing errors where applicable, and passing correct values to appropriate function

function expressionParser(exprString) {

    /* Function that will use regular expressions to parse out input expressions and calculate them in accordance with BODMAS. This will use regular expressions to achieve this task. */
    return eval(exprString);
}

function evalInput(string){
    /* Takes a string, converts it to javascript object,connects to Math.js API and transmits object via POST.
    Returns JSON object which is parsed and a string is returned 
    Consider refactoreing this function to respect single responsibility */
}

function NumberCheck(left, right, ...Args) {
    // Checks to see if values passed to it are numbers, throwing errors where applicable and passing correct values
}

function addition(left, right) {
    // Adds two numbers together
    // Consider using reduce function instead - investigate which is faster

    let result;
    result = left + right;
    // console.log(result)
    return result;

}

function subtraction(left, right) {
    // Subtracts two numbers.
    // Adhering to D.R.Y. principles, this inverts the right number to a negative and the updated right number and left number to the addition function
    right = right * -1;
    addition(left, right);

}

function multiplication(left, right) {

    let result = Number;
    result = left * right;
    console.log(result);
    return result;

}


function division(left, right) {

    right = (1/right);
    multiplication(left, right);

}

function squareroot(operand){

    let x = num;
    let y = 1;

    e = 0.01;
    while((x - y) > e) {
        x = (x + y)/2;
        y = num/x;
    }
    return x;
}

PUBSUB.subscribe(DATAMODEl.setNumString);

export {addition, division, subtraction, multiplication, DATAMODEL, expressionParser};