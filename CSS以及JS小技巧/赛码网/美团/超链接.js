/**
 * Created by heshan on 2017/8/31.
 */
var n,m,links = {},linked = [];
while(n = read_line()){
    n = parseInt(n);
    for(let i = 0;i<n;i++){
        var link = read_line().trim();
        links[link]= 1;
    }
    m = parseInt(read_line());
    for(let i = 0;i<m;i++){
        linked.push(read_line().trim());
    }
    linked = Array.from(new Set(linked));
    blueLink(links,linked);
}

function blueLink(links,linked) {
    var res = [];
    for(var i = 0;i<linked.length;i++){
        if(links[linked[i]]){
            delete links[linked[i]];
        }
    }
    for(link in links){
        res.push(link);
    }
    res.sort().forEach(num=>console.log(num));
}
