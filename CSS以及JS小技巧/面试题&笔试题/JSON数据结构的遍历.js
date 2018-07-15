/**
 * Created by heshan on 2017/8/23.
 */

var data=[{
    "id":"1",
    "children":[
        {
            "id":"1-1",
            "children":[],
            "value":"a-1"

        }, {
            "id":"1-2",
            "children":[],
            "value":"a-2"
        }],
    "value":"a"
},
    {
        "id":"2",
        "children":[
            {
                "id":"2-1",
                "children":[{
                    "id":"2-1-1",
                    "children":[ {
                        "id":"2-1-1-1",
                        "value":"b-1-1-1",
                        "children":[]
                    }],
                    "value":"b-1-1"
                }],
                "value":"b-1"

            }, {
                "id":"2-2",
                "children":[
                    {
                        "id":"2-2-1",
                        "children":[],
                        "value":"b-2-1"
                    },
                    {
                        "id":"2-2-2",
                        "children":[],
                        "value":"b-2-2"
                    }],
                "value":"b-2"
            }],
        "value":"b"
    },
    {
        "id":"3",
        "children":[],
        "value":"c"
    }];

function formData(data) {
    var parentNode ;
    for(var i =0;i<data.length;i++){
        if(data[i].children.length === 0 ){
            return data[i].id;
        }
        data[i].relateId = formData(data[i].children);
        if(parentNode === undefined ){
            parentNode = data[i].relateId;
        }
    }
    return parentNode;
}
formData(data)
console.log(data);
