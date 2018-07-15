/**
 * Created by heshan on 2017/8/30.
 */
/*将其中含有大量的条件分支语句的模块，将每种策略封装成多个类，
这样当每种策略发生变化时，可以对单个累积性修改即可，同时也方便做单元测试*/

/*使用策略模式前*/
function Price(personType, price) {
    //vip 5 折
    if (personType == 'vip') {
        return price * 0.5;
    }
    else if (personType == 'old'){ //老客户 3 折
        return price * 0.3;
    } else {
        return price; //其他都全价
    }
}

/*使用策略模式后*/

/*三种顾客类型对应三个类*/
function vipPrice() {
    this.discount = 0.5;
}

vipPrice.prototype.getPrice = function(price) {
    return price * this.discount;
}
// 对于老客户
function oldPrice() {
    this.discount = 0.3;
}

oldPrice.prototype.getPrice = function(price) {
    return price * this.discount;
}
// 对于普通客户
function Price() {
    this.discount = 1;
}

Price.prototype.getPrice = function(price) {
    return price ;
}

// 上下文，对于客户端的使用
function Context() {
    this.name = '';
    this.strategy = null;
    this.price = 0;
}

Context.prototype.set = function(name, strategy, price) {
    this.name = name;
    this.strategy = strategy;
    this.price = price;
}
Context.prototype.getResult = function() {
    console.log(this.name + ' 的结账价为: ' + this.strategy.getPrice(this.price));
}

var context = new Context();
var vip = new vipPrice();
context.set ('vip客户', vip, 200);
context.getResult();   // vip客户 的结账价为: 100

var old = new oldPrice();
context.set ('老客户', old, 200);
context.getResult();  // 老客户 的结账价为: 60

var Price = new Price();
context.set ('普通客户', Price, 200);
context.getResult();  // 普通客户 的结账价为: 200