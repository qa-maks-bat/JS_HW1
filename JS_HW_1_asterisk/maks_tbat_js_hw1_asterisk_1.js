/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*_1
	 
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
END
*/