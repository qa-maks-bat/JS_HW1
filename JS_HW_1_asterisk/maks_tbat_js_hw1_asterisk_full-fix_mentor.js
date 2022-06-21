/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*
	 
Environment: Windows 10, Notepad++

Telegram: @maks_tbat 
Name: Maksim Batrakou
Location: Minsk, Belarus


1*. Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
         26. Создать переменную “age_1” и присвоить ей значение 10:
         27. Создать переменную “age_2” и присвоить ей значение 18:
         28. Создать переменную “age_3” и присвоить ей значение 60:
         29. Создать if, в котором будeте проверять значение переменной age_1:
         30. eсли age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”;
         31. eсли age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”;
         32. eсли age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”;
         33. иначе выводите “Technical work”:

    Пример: const checkAge = function(age) {
                Ваши преобразования
            }

    Вывести в консоль результат работы функции с возрастами 17, 18, 61.
*/


let age_2 = 18;
let age_3 = 60;

const checkAge = function(age_1) {

        if(age_1 < age_2) {
            console.log('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 +'.');

        } else if(age_1 >= age_2 && age_1 < age_3) {
            console.log('Welcome!');

        } else if(age_1 > age_3) {
            console.log('Keep calm and look Culture channel!');

        } else {
            console.log('Technical work');
        }       
}


checkAge(17);    /* => (17): "You don't have access cause your age is 17. It's less then 18." */
checkAge(18);    /* => (18): "Welcome!" */
checkAge(61);    /* => (61): "Keep calm and look Culture channel!" */



/*
2*. Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И, если он не Number, - кидалась ошибка:
*/

let age_2 = 18;
let age_3 = 60;

const checkAge = function(age_1) {

    if(typeof(age_1) === 'number') {    /* The previous condition has been simplified: //// if(age_1 && !isNaN(age_1) && (typeof(age_1) != 'string')) { */

        console.log('The age you wrote is ' + age_1 + ', that\'s why:'); 

        if(age_1 < age_2) {
            console.log('\t\t\t\t\tYou don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 +'.\n');

        } else if(age_1 >= age_2 && age_1 < age_3) {
            console.log('\t\t\t\t\tWelcome!\n');

        } else if(age_1 > age_3) {
            console.log('\t\t\t\t\tKeep calm and look Culture channel!\n');

        } else {
            console.log('\t\t\t\t\tTechnical work!\n');
        } 
    } else
        console.log('The age ' + '"' + age_1 + '"' + ', you wrote, has the incorrect type:', '"' + typeof(age_1) + '"' + ', that\'s why:'),
        console.log('\t\t\t\t\t\t\t\t\tBe careful!\n\t\t\t\t\t\t\t\t\tWrite your age correctly using only numbers!\n');      
}


checkAge(17);        /* => The age you wrote is 17, that's why: You don't have access cause your age is 17. It's less then 18. */
checkAge(20);        /* => The age you wrote is 20, that's why: Welcome! */
checkAge(60);        /* => The age you wrote is 60, that's why: Technical work! */
checkAge(61);        /* => The age you wrote is 61, that's why: Keep calm and look Culture channel! */
checkAge('20');      /* => The age "20", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */
checkAge('');        /* => The age "", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */
checkAge('Yes');     /* => The age "Yes", you wrote, has the incorrect type: "string", that's why: Be careful! Write your age correctly using only numbers! */



/*
3**. Преобразовать 2* таким образом, чтобы значение '2' (строка, в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number:
*/

let age_2 = 18;
let age_3 = 60;

function isValidNumber(age_1) {
    return age_1 && !isNaN(age_1) && Number(age_1) != 0;
}

const checkAge = function(age_1) {

    if(typeof(age_1) == 'number' || typeof(age_1) == 'string' && isValidNumber(age_1) || age_1 == '0') {

/* ^ The previous condition has been simplified: //// if(typeof(age_1) === 'number' || typeof(age_1) === 'string' && Number(age_1) != 0 && !isNaN(age_1) || typeof(age_1) === 'string' && age_1 === '0') { */

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
    } else {
        console.log('The age ' + '"' + age_1 + '"' + ', you wrote, has the incorrect type:', '"' + typeof(age_1) + '"' + ', that\'s why:');
        console.log('\t\t\t\t\t\t\t\t\tBe careful!\n\t\t\t\t\t\t\t\t\tWrite your age correctly using only numbers!\n');
    }
       
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
*/

// console.log(typeof(0), Boolean(0), 0, Number(0), typeof(Number(0)), isNaN(0));
// console.log(typeof('0'), Boolean('0'), '0', Number('0'), typeof(Number('0')), isNaN('0'));
// console.log(typeof(' '), Boolean(' '), "' '", Number(' '), typeof(Number(' ')), isNaN(' '))
// console.log(typeof('2'), Boolean('2'), "'2'", Number('2'), typeof(Number('2')), isNaN('2'))
// console.log(typeof(''), Boolean(''), "''", Number(''), typeof(Number('')), isNaN(''))
// console.log(typeof('Yes'), Boolean('Yes'), "'Yes'", Number('Yes'), typeof(Number('Yes')), isNaN('Yes'))

/*
      init_type  init_boolean    init_value    number_value      number_type      isNaN_value
    =>  number      false            0              0               number          false
    =>  string      true            '0'             0               number          false
    =>  string      true            '2'             2               number          false    
    =>  string      false           ''              0               number          false    
    =>  string      true            ' '             0               number          false    
    =>  string      true           'Yes'           NaN              number          true
*/



/*
4***. Преобразовать задание 3* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке:
*/

let age_2 = 18;
let age_3 = 60;

const checkAge = function(age_1) {

    if(typeof(age_1) === 'number' || typeof(age_1) === 'string' && Number(age_1) != 0 && !isNaN(age_1) || typeof(age_1) === 'string' && age_1 === '0') {
        age_1 = Number(age_1);
        alert('The age you wrote is ' + age_1, '('+ typeof(age_1) + ')' + ', that\'s why:'); 

        if(age_1 < age_2) {
            alert('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 +'.\n');

        } else if(age_1 >= age_2 && age_1 < age_3) {
            alert('Welcome!\n');

        } else if(age_1 > age_3) {
            alert('Keep calm and look Culture channel!\n');

        } else {
            alert('Technical work!\n');
        } 
    } else alert('The age ' + '"' + age_1 + '"' + ', you wrote, has the incorrect type:', '"' + typeof(age_1) + '"' + ', that\'s why:'),
    alert('Be careful!\nWrite your age correctly using only numbers!\n');      
}

let a = prompt('Enter your age using only numbers');

checkAge(a)


/*
checkAge(0);
checkAge(17);
checkAge(20);
checkAge(60);
checkAge(61);
checkAge('0');
checkAge('2');
checkAge(''); 
checkAge(' ');
checkAge('Yes');
*/



/*
4.1***. Преобразовать задание 4*** таким образом, чтобы возраст вводился массивом и передовался в привязанную верстку:
*/

let age_2 = 18;
let age_3 = 60;

const div = document.getElementById('checkAge')

const checkAge = function(...age) {
    age.forEach(age_1 => {    
        if(typeof(age_1) === 'number' || typeof(age_1) === 'string' && Number(age_1) != 0 && !isNaN(age_1) || typeof(age_1) === 'string' && age_1 === '0') {
            age_1 = Number(age_1);

            div.innerHTML += 'The age you wrote is ' + age_1 + ', that\'s why:<br>'; 

            if(age_1 < age_2) {
                div.innerHTML += 'You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 + '<br><br>';

            } else if(age_1 >= age_2 && age_1 < age_3) {
                div.innerHTML += 'Welcome!<br><br>';

            } else if(age_1 > age_3) {
                div.innerHTML += 'Keep calm and look Culture channel!<br><br>';

            } else {
                div.innerHTML += 'Technical work!<br><br>';
            } 
        } else div.innerHTML += 'The age ' + '"' + age_1 + '"' + ', you wrote, has the incorrect type' + ' "' + typeof(age_1) + '", that\'s why:<br>',
        div.innerHTML += 'Be careful! Write your age correctly using only numbers!<br><br>';      
    })
}

checkAge(0, 17, 20, 60, 61, '0', '2', '',' ', 'Yes');

/*
END
*/
