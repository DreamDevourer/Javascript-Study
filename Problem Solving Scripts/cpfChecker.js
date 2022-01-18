/* Nicolas Mendes - Jan 8, 2022
Based on https://www.alura.com.br/conteudo/python-validacao-dados#:~:text=Criando%20um%20novo%20Python%20file,contr%C3%A1rio%20o%20retorno%20ser%C3%A1%20False%20

Algorithm for validating CPF
The CPF calculation is based on the final 2 digitcpfContainer.
To validate, take the first 9 digits of the CPF, generate the 2 digits and save in a new CPF.
Compare if the CPF sent is the same as the CPF generated.
If true, the CPF is valid, otherwise invalid.

* Get first digit:
--- Multiply the first 9 digits of the CPF by a count regress starting from 10 and ending at 2.
--- Add all the multiplication values from step 1
--- Get the remainder of the division between the sum and 11 from step 2
--- Subtract the result from step 3 by 11
--- If the result of step 4 is greater than nine, the digit is zero, otherwise the digit is the value from step 4

* Get second digit:
--- Multiply the first 9 digits of the CPF, PLUS THE FIRST DIGIT, previously obtained by a countdown starting from 11 and ending in 2
--- Same logic as step 2 from the first digit onwardcpfContainer.

SAMPLE CPF: 113.314.390-35

TO GET FIRST DIGIT FORM LAST SECTION:

1*10 = 10
1*9 = 9
3*8 = 24
3*7 = 21
1*6 = 6
4*5 = 20
3*4 = 12
9*3 = 27
0*2 = 0

TOTAL: 10 + 9 + 24 + 21 + 6 + 20 + 12 + 27 + 0 + 0 = 129
GET THE REST FROM RESULT => 11 - (129 % 11) = 3

IF RESULT > 9, DIGIT IS 0, ELSE DIGIT IS RESULT.

TO GET SECOND DIGIT FORM LAST SECTION:

1*11 = 11
1*10 = 10
3*9 = 27
3*8 = 21
1*7 = 7
4*6 = 18
3*5 = 15
9*4 = 36
0*3 = 0
3*2 = 6

TOTAL: 11 + 10 + 27 + 21 + 7 + 18 + 15 + 36 + 0 + 6 = 151
GET THE REST FROM RESULT => 151%11 = 5

BONUS:

If the sum pair of all 11 digits are the same, the CPF is invalid.

EXAMPLE:
DIGITS SUM: 1 + 1 + 3 + 3 + 1 + 4 + 3 + 9 + 0 + 3 + 5 = 33 => Is valid.
*/




/******************************************************************************
    Function: validateCPF(<x>){
    Params:
    - n : value to be checked
    Return: boolean
    Desc: If true, then the CPF is valid.
******************************************************************************/

// WARNING: Disable in production!
debugMode = false;

if (debugMode) {
    cpfVal = "113.314.390-35";
    console.log(verificarCPF(cpfVal));
}

function verificarCPF(cpf) {
    // Regular expression to remove all non-digits, including dots, dashes and spaces.
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length != 11) {
        return false;
    }

    var i;
    cpfContainer = cpf;
    var cpf = cpfContainer.substr(0, 9);
    var digitVal = cpfContainer.substr(9, 2);
    var digitOne = 0;

    var valid = false;
    for (i = 0; i < 9; i++) {
        digitOne += cpf.charAt(i) * (10 - i);
    }

    if (digitOne == 0) {
        valid = true;
        return false;
    }

    digitOne = 11 - (digitOne % 11);
    if (digitOne > 9)
        digitOne = 0;
    if (digitVal.charAt(0) != digitOne) {
        valid = true;
        return false;
    }

    digitOne *= 2;
    for (i = 0; i < 9; i++) {
        digitOne += cpf.charAt(i) * (11 - i);
    }
    digitOne = 11 - (digitOne % 11);
    if (digitOne > 9) digitOne = 0;
    if (digitVal.charAt(1) != digitOne) {
        valid = true;
        return false;
    }
    if (!valid) {
        return true;
    }
}
