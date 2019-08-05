class Generator {
  random = (n: number) => Math.round(Math.random() * n);

  cpf = (mask: boolean = false) => {
    const n = 9;
    const n1 = this.random(n);
    const n2 = this.random(n);
    const n3 = this.random(n);
    const n4 = this.random(n);
    const n5 = this.random(n);
    const n6 = this.random(n);
    const n7 = this.random(n);
    const n8 = this.random(n);
    const n9 = this.random(n);
    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;
    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    return mask ?
      `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}` :
      `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
  }

  cnpj = (mask: boolean) => {
    const n = 9;
    const n1 = this.random(n);
    const n2 = this.random(n);
    const n3 = this.random(n);
    const n4 = this.random(n);
    const n5 = this.random(n);
    const n6 = this.random(n);
    const n7 = this.random(n);
    const n8 = this.random(n);
    const n9 = 0;
    const n10 = 0;
    const n11 = 0;
    const n12 = 1;

    let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;
    let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    return mask ?
      `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}` :
      `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
  }

  nit = (mask: boolean) => {
    const n = 9;
    const n1 = 1;
    const n2 = this.random(n);
    const n3 = this.random(n);
    const n4 = this.random(n);
    const n5 = this.random(n);
    const n6 = this.random(n);
    const n7 = this.random(n);
    const n8 = this.random(n);
    const n9 = this.random(n);
    const n10 = this.random(n);

    let d1 = n1 * 3 + n2 * 2 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + n10 * 2;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    return mask ?
      `${n1}${n2}${n3}.${n4}${n5}${n6}${n7}${n8}.${n9}${n10}-${d1}` :
      `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${d1}`;
  }

  cei = (mask: boolean) => {
    const n = 9;
    const n1 = 2;
    const n2 = this.random(n);
    const n3 = this.random(n);
    const n4 = this.random(n);
    const n5 = this.random(n);
    const n6 = this.random(n);
    const n7 = this.random(n);
    const n8 = this.random(n);
    const n9 = this.random(n);
    const n10 = this.random(n);
    const n11 = 8;

    let aux1 = n1 * 7 + n2 * 4 + n3 * 1 + n4 * 8 + n5 * 5 + n6 * 2 + n7 * 1 + n8 * 6 + n9 * 3 + n10 * 7 + n11 * 4;
    let aux2 = aux1.toString();

    var aux3 = parseInt(aux2[aux2.length - 1]) + parseInt(aux2[aux2.length - 2]);
    var Soma = aux1;
    var d1 = (10 - (((Soma % 10) + Soma / 10) % 10)) % 10;
    d1 = Math.abs(d1);

    return mask ?
      `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}${n9}${n10}/${n11}${d1}` :
      `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${d1}`;
  }
}

const generator = new Generator();

console.log(generator.cpf(true));

console.log(generator.nit(true))

console.log(generator.cnpj(true))

console.log(generator.cei(true))
