const from = document.querySelector(".from-action");
const alret = document.querySelector(".alret");
const alrte = document.querySelector(".alrte-long");
// const name = document.getElementById("your");
// const age = document.getElementById("age");
// const male = document.getElementById("male");
// const female = document.getElementById("female");
// const sub = document.getElementById("sub");

// submite event
from.onsubmit = (f) => {
    f.preventDefault();

    //console.log(f.target);

    //fields value
    let name = from.querySelector('input[name="name"]');
    let age = from.querySelector('input[name="age"]');
    let gender = from.querySelectorAll('input[name="gender"]');

    //gender choos
    let gender_name = '';
    gender.forEach(item => {
        if (item.checked) {
            gender_name = item.value;
        }
    });
    console.log(gender_name);
   

    if (name .value==''|| age.value==''||gender_name=='') {
        alret.innerHTML = setValue('All fields are Requires');
    } else if (ageChacked(age.value) == false) {
        alret.innerHTML = setValue('your age is invalide','warning');
    } else {
        //marige function 
        // let marige_age = gender_name == 'male' ? 21 : 18;

        // let marige_age = 0;

        // if (gender_name=='male') {
        //     marige_age = 21;
        // } else {
        //     marige_age = 18;
        // }

        
        // if (gender_name == 'male') {
            
        //     if ( age.value>=marige_age) {
        //         alrte.innerHTML=`HI${name.value} Vaiya , Apnar marriage age is okey`;
        //     }else {
        //         alrte.innerHTML= `HI${name.value} Vaiya , Apnar marriage age is not okey.you have to wait ${marige_age - age.value} years`;
        //     }
        // } else {
        //     if ( age.value>=marige_age) {
        //         alrte.innerHTML=`HI${name.value} Apu , Apnar marriage age is okey`;
        //     }else {
        //         alrte.innerHTML= `HI${name.value} Apu , Apnar marriage age is not okey.you have to wait ${marige_age - age.value} years`;
        //     }
        // }
        alrte.innerHTML= marrageChack(name.value, age.value, gender_name);
    }

}

