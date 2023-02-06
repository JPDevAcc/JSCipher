import Cipher from "./ciphers/cipher.js";

export default class CipherChain {
	constructor() {
		this.cipherInstances = [] ;
	}

	addCipherInstance(cipher) {
		if (!instanceCheck(cipher, Cipher)) return consoleErrAndReturnNull('Argument 1 is not a Cipher') ;
		this.cipherInstances.push(cipher) ;
	}

	processText(stageText, dir) {
		if (dir === -1) {
			for (let i = this.cipherInstances.length - 1; i >= 0; i--) {
				stageText = this.cipherInstances[i].processText(stageText, dir) ;
			}
		}
		else {
			for (let i = 0; i < this.cipherInstances.length; i++) {
				stageText = this.cipherInstances[i].processText(stageText, dir) ;
			}
		}
		return stageText ;
	}

	getNumInstances() {
		return this.cipherInstances.length ;
	}
}