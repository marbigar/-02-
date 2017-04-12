function Human(name, age) {
    this.name = name;
    this.age = age;
}

Human.prototype.introduce = function() {
    alert('My name is ' + this.name + '. I am ' + this.age + ' years old.');
};

/////////

function Man(name, age) {
    this.name = name;
    this.age = age;
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

Man.prototype.driveCar = function () {
    alert('I am driving a car');
};

/////

function Hunter(name, age) {
    this.name = name;
    this.age = age;
}

Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype.hunt = function () {
  alert('I am hunting');
};

//

function Worker(name, age) {
    this.name = name;
    this.age = age;
}

Worker.prototype = Object.create(Man.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function () {
    alert('I am working');
};

/////

function Woman(name, age) {
    this.name = name;
    this.age = age;
}

Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;


///////////////

var taras = new Workerr('Taras', 25);
taras.introduce();
taras.driveCar();
taras.work();
