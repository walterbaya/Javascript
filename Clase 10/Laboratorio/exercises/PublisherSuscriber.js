var EventBus = {
    topics: {},
    suscribe: function (topic, listener) {
        if (!this.topics[topic]) this.topics[topic] = [];

        this.topics[topic].push(listener);
    },
    publish: function (topic, info) {
        if (!this.topics[topic] || this.topics[topic].length == 0) {
            return;
        }
        else {
            this.topics[topic].forEach(function (listener) {
                listener(info || {});
            });
        }
    }
}

var Teacher = function () {
    EventBus.suscribe('Add to approved', this.addAproved);
}

Teacher.prototype = {
    addAproved: function (info) {
        if (info[2] >= 4) {
            console.log("Congratulations " + info[0] + " you had passed " + info[1] + " with grade " + info[2]);
        }
        else {
            console.log("Hello " + info[0] + " you had not passed " + info[1] + " your grade is " + info[2] + " and for this course, we  requiere at least a 4.");
        }
    }
}

var Student = function (name, course, grade) {
    this.name = name;
    this.course = course;
    this.grade = grade;
}

Student.prototype = {
    sendGrades: function () {
        EventBus.publish("Add to approved", [this.name, this.course, this.grade]);
    }
}
var teacher1 = new Teacher();
var student1 = new Student("Juan", "Math120", 8);
student1.sendGrades();
var student2 = new Student("Jose", "Math420", 3);
student2.sendGrades();