function insert(num){
    document.form.textview.value = document.form.textview.value + num
}

function equa(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview2.value = parseInt(exp, 2);
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1)
}
