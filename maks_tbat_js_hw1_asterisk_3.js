/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*_3
	 
Environment: Windows 10, Notepad++

Telegram: @maks_tbat 
Name: Maksim Batrakou
Location: Minsk, Belarus


/*
3**. Преобразовать 2* таким образом, чтобы значение '2' (строка, в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number:
*/

let age_2 = 18;
let age_3 = 60;

const checkAge = function(age_1) {

    if(typeof(age_1) === 'number' || typeof(age_1) === 'string' && Number(age_1) != 0 && !isNaN(age_1) || typeof(age_1) === 'string' && age_1 === '0') {

        age_1 = Number(age_1);
        console.log('The age you wrote is ' + age_1, '('+ typeof(age_1) + ')' + ', that\'s why:'); 

        if(age_1 < age_2) {
            console.log('\t\t\t\t\t\tYou don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 +'.\n');

        } else if(age_1 >= age_2 && age_1 < age_3) {
             console.log('\t\t\t\t\t\tWelcome!\n');

        } else if(age_1 > age_3) {
            console.log('\t\t\t\t\t\tKeep calm and look Culture channel!\n');

        } else {
            console.log('\t\t\t\t\t\tTechnical work!\n');
        } 
    } else console.log('The age ' + '"' + age_1 + '"' + ', you wrote, has the incorrect type:', '"' + typeof(age_1) + '"' + ', that\'s why:'),
        console.log('\t\t\t\t\t\t\t\t\tBe careful!\n\t\t\t\t\t\t\t\t\tWrite your age correctly using only numbers!\n');      
}

checkAge(0);         /* => The age you wrote is 0 (number), that's why: You don't have access cause your age is 0. It's less then 18. */
checkAge(17);        /* => The age you wrote is 17 (number), that's why: You don't have access cause your age is 17. It's less then 18. */
checkAge(20);        /* => The age you wrote is 20 (number), that's why: Welcome! */
checkAge(60);        /* => The age you wrote is 60 (number), that's why: Technical work! */
checkAge(61);        /* => The age you wrote is 61 (number), that's why: Keep calm and look Culture channel! */
checkAge('0');       /* => The age you wrote is 0 (number), that's why: You don't have access cause your age is 0. It's less then 18. */
checkAge('2');       /* => The age you wrote is 2 (number), that's why: You don't have access cause your age is 2. It's less then 18. */
checkAge('');        /* => The age "", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */
checkAge(' ');       /* => The age " ", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */
checkAge('Yes');     /* => The age "Yes", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */



/*
Working visualization of the data type change process:


console.log(typeof(0), Boolean(0), 0, Number(0), typeof(Number(0)), isNaN('0'));
console.log(typeof(' '), Boolean(' '), "' '", Number(' '), typeof(Number(' ')), isNaN(' '))
console.log(typeof('2'), Boolean('2'), "'2'", Number('2'), typeof(Number('2')), isNaN('2'))
console.log(typeof(''), Boolean(''), "''", Number(''), typeof(Number('')), isNaN(''))
console.log(typeof('Yes'), Boolean('Yes'), "'Yes'", Number('Yes'), typeof(Number('Yes')), isNaN('Yes'))


      init_type  init_boolean   init_value    number_value      number_type      isNaN_value

    =>  number      false           0               0               number          false
    =>  string      true            ' '             0               number          false    
    =>  string      true            '2'             2               number          false    
    =>  string      false           ''              0               number          false    
    =>  string      true            'Yes'           NaN             number          true
*/


/*
END
*/