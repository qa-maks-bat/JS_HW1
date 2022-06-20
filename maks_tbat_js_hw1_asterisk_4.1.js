/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*_4.1
	 
Environment: Windows 10, Notepad++

Telegram: @maks_tbat 
Name: Maksim Batrakou
Location: Minsk, Belarus


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
