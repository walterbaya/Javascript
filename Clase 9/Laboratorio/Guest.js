(function(window){
	class Guest extends Usuario{
    constructor(username,email, password,guestId){
        super(username,email,password);
        this.guestId = guestId;
    }
}
	window.Guest = Guest;
})(window)