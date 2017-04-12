/**
 * Created by Maryasha on 26.02.17.
 */
function Adult() {}

Adult.prototype = new Teenager();

Adult.prototype.speak = function () {
    alert('Я працюю в Логос');
};