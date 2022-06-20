/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*_4
	 
Environment: Windows 10, Notepad++

Telegram: @maks_tbat 
Name: Maksim Batrakou
Location: Minsk, Belarus


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
END
*/