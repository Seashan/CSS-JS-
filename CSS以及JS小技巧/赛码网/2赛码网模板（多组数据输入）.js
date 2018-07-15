var line1 ;
while(line1=read_line() ){
    var a = + line1.split(" ")[0];
    var b = + line1.split(" ")[1];
    var line2 = readLine().split(" ");
    var line3 = readLine().split(" ");
    var res = union(a,b,line2,line3);
    print(res.join(" "));
}

function union(a,b,setA,setB){
    if(a > b){
        for(var i =0;i< b;i++){
            if(setA.indexOf(setB[i]) < 0){
                setA.push(setB[i]);
            }
        }
        return setA.sort(function (a,b) {
            return parseInt(a) - parseInt(b);
        });
    }
    else{
        for(var i =0;i< a;i++){
            if(setB.indexOf(setA[i]) < 0){
                setB.push(setA[i]);
            }
        }
        return setB.sort(function (a,b) {
            return parseInt(a) - parseInt(b);
        });
    }

}

function readLine() {
    var line = "";
    var next = read_line();
    while(next.length >= 1024) {
        line += next;
        next = read_line();
    }
    line += next;
    return line;
}