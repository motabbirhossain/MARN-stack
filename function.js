

var setValue = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}


var ageChacked = (age) => {
    let agepatt = /^[0-9]{1,3}$/;

    return agepatt.test(age);
}


let marrageChack = (name, ages, gender)=>{
    if (gender == 'male') {

        let marige_age = 21;

        if (ages >= marige_age) {
            return`HI${name} Vaiya , Apnar marriage age is okey`;
        }else {
            return`HI${name} Vaiya , Apnar marriage age is not okey.you have to wait ${marige_age - age.value} years`;
        }
    } else {

        let marige_age = 18;

        if (ages >= marige_age) {
           return`HI${name} Vaiya , Apnar marriage age is okey`;
        }else {
            return`HI${name} Vaiya , Apnar marriage age is not okey.you have to wait ${marige_age - age.value} years`;
        }
    }
}