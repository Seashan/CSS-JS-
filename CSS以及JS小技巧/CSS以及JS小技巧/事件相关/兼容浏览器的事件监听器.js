/**
 * Created by heshan on 2017/6/15.
 */
EventUnit={
    addEvent:function(ele,type,handler){
        if(ele.addEventListener)
        {
            ele.addEventListener(type,handler,false);
        }
        else if(ele.attachEvent)
        {
            ele.attachEvent('on'+type,handler);
        }
        else ele['on'+type]=handler;
    },
    removeEvent:function (ele,type,handler) {
        if(ele.removeEventListener)
            ele.removeEventListener(type,handler);
        else if(ele.dispatchEvent())
            ele.dispatchEvent('on'+type,handler);
        else ele['on'+type]=null;
    },
    stopPropagation:function (ev) {
        if(ev.stopPropagation) ev.stopPropagation();
        else ev.cancelBubble=true;
    },
    preventDefault:function (ev) {
        if(ev.preventDefault)ev.preventDefault();
        else ev.returnValue=false;
    },
    getTarget:function(ev)
    {
       return ev.target||ev.srcElement;
    },
    getEvent:function (ev) {
        var ev=ev||window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;

    }

}