//Construimos el eventBus

const EventBus = {
    observers: {

    },   
    suscribe(evento, callback) {
        if(!(evento in this.observers)){
            this.observers[evento] = [];
        }
        this.observers[evento].push(callback);
    },
    unsuscribe(evento, callback) {
        if(evento in this.observers){
            return;
        }
        this.observers[evento] = this.observers[evento].filter(cb => cb != callback);
    },
    notify(evento, data) {
        if(evento in this.observers){
            return;
        }
        this.observers[evento].forEach(callback => callback(data));
    }
};