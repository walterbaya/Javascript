var EventBus = {
    topics: {},
    suscribe: function (topic, listener) {
        if (!this.topics[topic]) this.topics[topic] = [];

        this.topics[topic].push(listener);
    },
    publish: function (topic, data) {
        if (!this.topics[topic] || this.topics[topic].length < 1) {
            return;
        }
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }
}

//EventBus.suscribe('foo', alert);
//EventBus.publish('foo', 'Hello world!');


var Mailer = function () {
    EventBus.suscribe('order/new', this.sendOrder);
};
Mailer.prototype = {
    sendOrder: function (userEmail) {
        console.log("Email send to: " + userEmail);
    }
};
var Order = function (params) {
    this.params = params;
};
Order.prototype = {
    save: function () {
        EventBus.publish('order/new', this.params.userEmail);
    }
};

var mailer = new Mailer();
var order = new Order({ userEmail: 'juan@gmail.com' });
order.save();
