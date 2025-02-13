function compare(a,b){
    if (a>b){
        console.log("A is grater B");
    }
    if (b>a) {
       console.log("B is greater than A");  
    }
    else {
        console.log("exit");
    }
}
compare(100,20)

//------------------------------------------------------------

function high(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        }
    }
    else if (c>b) {
        console.log(c);
    } else {
        console.log(b);   
    }
}
high(10, 90000, 200)

//------------------------------------------------------------

function high(a,b,c){
    console.log(a>b ?( a>c ? a : c ): (c > b ? c : b)) ;  
}
high(100, 900, 3000)

function high(a, b, c) {
    console.log(a > b ? (a > c ? a : c) : (c > b ? c : b));
}
high(10, 900, 20000);

//------------------------------------------------------------