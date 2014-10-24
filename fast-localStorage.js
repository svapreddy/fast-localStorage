// Author : Prathap Reddy SV
 
var LStorage = (function () {
	function LStorage() {
		this.init = function(){
			if(!this.localStorage) {
				this.localStorage = JSON.parse(JSON.stringify(localStorage));
			}
		}
		// or new Function("return JSON.parse('" + JSON.stringify(localStorage) + "')")(); 
	}
	LStorage.prototype.setItem = function (key, val) {
		this.init();
		if(this.localStorage[key] == val) return;
		this.localStorage[key] = val;
		localStorage.setItem(key, val);
	};
	LStorage.prototype.getItem = function (key, undef) {
		this.init();
		var val = this.localStorage[key];
		return val;
	};
        LStorage.prototype.removeItem = function (key) {
		this.init();
		delete this.localStorage[key];
		localStorage.removeItem(key);
		return true;
	};
	return LStorage;
})();
