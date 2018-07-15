/*JS中的任务对垒分为两个：宏任务队列和微任务队列
* 宏任务队列：script(整体代码)，setTimeout，setInterval,setImmediate,I/O,UI render
* 微任务：progress.nextTick,promise
* 分发任务时注意：
 （1）setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。
 （2）来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。
 （3）事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。
    之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。
    当所有可执行的micro-task执行完毕之后清空微任务队列。循环再次从macro-task开始，
    找到其中一个任务队列（优先级高的）执行完毕
    （执行的时候有可能又会产生新的微任务，和宏任务微任务会在当前任务队列执行完后立即执行，
    但是宏任务则会等到下一轮循环当我们在执行setTimeout任务中遇到setTimeout时，
    它仍然会将对应的任务分发到setTimeout队列中去，
    但是该任务就得等到下一轮事件循环执行了），
    然后再执行所有的micro-task（上一个宏任务执行时添加的新任务），执行宏任务中的下一个队列中的任务，依次循环循环。
 *
  * 在不清楚顺序的时候记得利用绘图的方式，这样会条理比较清晰
   * */

console.log('golb1');
setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
    setTimeout(function(){
         console.log('timeout13')
    })
})
setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})

process.nextTick(function() {
    console.log('glob1_nextTick');
})

new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})
setTimeout(function() {
    console.log('timeout2');
    process.nextTick(function() {
        console.log('timeout2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })
})
process.nextTick(function() {
    console.log('glob2_nextTick');
})
new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})
setImmediate(function() {
    console.log('immediate2');
    process.nextTick(function() {
        console.log('immediate2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function() {
        console.log('immediate2_then')
    })
})