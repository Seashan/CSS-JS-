/**
 * Created by heshan on 2017/7/25.
 */
function getPosition(dom) {
    var left = 0;
    var top = 0;
    while (dom.offsetParent) {
        left += dom.offsetLeft;
        top += dom.offsetTop;
    }
    return [left, top];
}