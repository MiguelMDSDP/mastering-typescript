function showMessage(texto: string | number | object): boolean {
    console.log(texto);
    return true;
}

console.log(showMessage("Hcode"));
console.log(showMessage(100));
console.log(showMessage({ url: "https://hcode.com.br" }));


const when = (): number | Date | object => {
    return new Date();
}

console.log(when());