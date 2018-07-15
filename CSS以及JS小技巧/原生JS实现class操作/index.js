/**
 * Created by heshan on 2017/7/14.
 */
var ClassUtil = {
    getClass : function (el) {
        return el.className;
    },
    hasClass: function (el,name) {
        var cls = this.getClass(el).split(" ").trim();
        var index = cls.indexOf(name);
        return index > 0 ? true :false;
    },
    addClass : function (el,name) {
        var cls = this.getClass(el);
        if(!this.hasClass(el, name)){
            cls += " "+name;
        }
        el.className = cls;
    },
    removeClass: function (el,name) {
        var cls = this.getClass(el).split(" ").trim();
        var index = cls.indexOf(name)
        if (index > 0) {
            cls.splice(index, 1);
        }
    },
   toggleClass : function (el, name) {
       if (this.hasClass(el, name)) {
           this.removeClass(el, name);
       } else {
           this.addClass(el, name);
       }
   }

}


/*利用正则表达式匹配*/
var Cls = {
    hasClass :function (el,cls) {
        return el.className.match(new RegExp("\\s|^" + cls + "\\s|$"));
    },
    addClass : function (el,cls) {
        if(this.hasClass(el,cls))
        {
            return
        } else {
            el.className += " " + cls;
        }
    },
    removeClass : function (el,cls) {
        if(this.hasClass(el,cls))
        {
            el.className = el.className.replace(new RegExp("\\s|^" + cls + "\\s|$"), " ").trim();
        }
    },
    toggleClass : function (el, name) {
        if (this.hasClass(el, name)) {
            this.removeClass(el, name);
        } else {
            this.addClass(el, name);
        }
    }
}