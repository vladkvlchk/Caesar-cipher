const importIn = document.getElementById('import-in');
const exportIn = document.getElementById('export-in');
const importOut = document.getElementById('import-out');
const exportOut = document.getElementById('export-out');

const keyIn = document.getElementById('key-in');
const keyOut = document.getElementById('key-out');

const btnIn = document.getElementById('inBtn');
const btnOut = document.getElementById('outBtn');

const inCrypt = () => {
    const words = importIn.value.toUpperCase().split(' ');
    const encrypted = [];
    for(let i in words){
        encrypted.push(EncryptWord(words[i]))
    }
    exportIn.value = encrypted.join(' ');

    function EncryptWord(word){
        const letters = word.split('');
        const encrypted = [];
        for (let i = 0; i < letters.length; i++){
            encrypted[i] = String.fromCharCode(((letters[i].charCodeAt(0) + +keyIn.value) - 1040) % 32 + 1040);
        }
        return encrypted.join('');
    }
}
const outCrypt = () => {
    const encrypted = importOut.value.toUpperCase().split(' ');
    const decoded = [];
    for(let i in encrypted){
        decoded.push(DecodeWord(encrypted[i]))
    }
    exportOut.value = decoded.join(' ');

    function DecodeWord(word){
        const letters = word.split('');
        const decoded = [];
        for(let i in letters){
            let codeNum = letters[i].charCodeAt(0) - (+keyOut.value % 32);
            if( codeNum < 1040) codeNum += 32;
            decoded[i] = String.fromCharCode(codeNum)
        }
        return decoded.join('');
    }
}

btnIn.addEventListener('click', () => inCrypt())
btnOut.addEventListener('click', () => outCrypt())