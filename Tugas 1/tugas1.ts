// NIM : 050168027

function segitigaNIM (digitTerakhir : number) : void{
    let data:string;
    for(let i = 1; i <= digitTerakhir; i++){
        data = " ";
        for(let j= 1; j <= i; j++) {
            data += j += " ";
        }
        console.log(data.trim())
    }

}
segitigaNIM(7)
console.log("\n")
function deretAritmatika(digitTerakhir : number, tigadigitterakhir : number) : void {
    let data : number[] = [];

    for(let i = 0; i <= 10; i++){
        data.push(digitTerakhir + ((tigadigitterakhir + 1)*i))
    }
    console.log(data.join(", "))
}

deretAritmatika(27,0)
console.log("\n")

function isPrima(n: number): boolean {
  if (n <= 1) return false;

  for (let i: number = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}


function bilanganPrima(digitTerakhir : number) :void {
    let data : number[] = [];
    for(let i = 0; i <= digitTerakhir + 10; i++){
        if(isPrima(i)){
            data.push(i)
        }
    }
    console.log(data.join(", "))
}
bilanganPrima(27)