# Brazilian Document Generator for Testing

Brazilian document generator for testing.

This library covers the following documents:

- CPF
- CNPJ
- NIT
- CEI

##Usage
If you need the code with ponctuation:

`const generator = new Generator();`
`console.log(generator.cpf(true));`

result:

`085.352.674-50`

If you just need the number of the document:

`const generator = new Generator();`
`console.log(generator.cpf(false));`
or
`console.log(generator.cpf());`

result:

> `08535267450`
