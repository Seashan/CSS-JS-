var P =[];
var count = parseInt(read_line());
var line ;
while (count--) {
    line = read_line();
    line=line.split(" ");
    P.push({
        x:parseInt(line[0]),
        y:parseInt(line[1])
    });
}
function findMax(P){
    var res=[];
    P.sort(function(a,b){
        return b.x - a.x;
    })
    var maxY = P[0].y;
    for(var i =0;i<P.length;i++){
        if(P[i].y>=maxY){
            res.push([P[i].x,P[i].y]);
            maxY = P[i].y;
        }
    }
    return res;
}
var result = findMax(P);

/*var result = findMax([{x:1,y:2},{x:5,y:3},{x:4,y:6},{x:7,y:5},{x:9,y:0}]);*/
/*var result = findMax([{x:1,y:2},{x:3,y:1}]);*/

for(var i =result.length -1;i>=0;i--){
    print((result[i][0]+" "+result[i][1]))
}