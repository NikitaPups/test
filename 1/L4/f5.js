function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second (){
    console.log(2);
}

first();
second();

function learnjs(lang, callback){
    console.log("I learn " + lang);
    callback();
}

function done(){
    console.log("i already learned 3rd lesson")
}

learnjs("JavaScript", done)
