process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var s = line;
        var n = +input_array[nLine++];
        while(n--){
            var input_arrays = input_array[nLine++].trim().split(' ');
            var p = +input_arrays[0];
            var l = +input_arrays[1];

            s=s.split('');
            var arr=s.slice(p,p+l);
            s.splice(p+l,0,arr.reverse().join(''));
            s=s.join('')
        }
        console.log(s);
    }

});