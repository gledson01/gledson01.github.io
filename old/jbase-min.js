function createArray2(t){return new Uint8Array(t)}function copyArray(t,r,n,e,o){null==e&&null==o||(t=t.slice?t.slice(e,o):Array.prototype.slice.call(t,e,o)),r.set(t,n)}function copyArray2(t,r,n,e,o){null==e&&null==o||(t=t.slice?t.slice(e,o):Array.prototype.slice.call(t,e,o)),r.set(t,n)}function aeskey(t){return atob(t).norm_to_unicode().crypt_sym()}function convertToInt32(t){for(var r=[],n=0;n<t.length;n+=4)r.push(t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3]);return r}String.prototype.norm_to_ascii=function(){return unescape(encodeURIComponent(this))},String.prototype.norm_to_unicode=function(){return decodeURIComponent(escape(this))},String.prototype.crypt_sym=function(t){return String.fromCharCode.apply(void 0,this.split("").map(function(r){return r.charCodeAt(0)^(t||13)}))};var AES=function(t){if(!(this instanceof AES))throw Error("AES must be instanitated with `new`");Object.defineProperty(this,"key",{value:coerceArray(t,!0)}),this._prepare()};