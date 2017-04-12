/**
 * Created by Maryasha on 26.02.17.
 */
function Teenager() {}

Teenager.prototype = new Baby();

Teenager.prototype.sayBadWord = function () {
    alert('Я вмію матюкатись!');
};

Teenager.prototype.speak = function () {
    alert('Мама, купи мені айфон!!!');
};