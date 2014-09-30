// Author : Prathap Reddy SV
 
var LStorage = (function () {
	function LStorage() {
		this.localStorage = JSON.parse(JSON.stringify(localStorage));
		// or new Function("return JSON.parse('" + JSON.stringify(localStorage) + "')")(); 
	}
	LStorage.prototype.setItem = function (key, val) {
		if(this.localStorage[key] == val) return;
		this.localStorage[key] = val;
		localStorage.setItem(key, val);
	};
	LStorage.prototype.getItem = function (key, undef) {
		var val = this.localStorage[key];
		return val;
	};
        LStorage.prototype.removeItem = function (key) {
		delete this.localStorage[key]
		localStorage.removeItem(key);
		return true;
	};
	return LStorage;
})();
