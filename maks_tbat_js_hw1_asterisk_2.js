/*
QA Course by Vadim Ksendzov 
Group_30_QA
JS HW_1*_2
	 
Environment: Windows 10, Notepad++

Telegram: @maks_tbat 
Name: Maksim Batrakou
Location: Minsk, Belarus


/*
2*. Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И, если он не Number, - кидалась ошибка:
*/

let age_2 = 18;
let age_3 = 60;

const checkAge = function(age_1) {

    if(age_1 && !isNaN(age_1) && (typeof(age_1) != 'string')) { 
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
END
*/