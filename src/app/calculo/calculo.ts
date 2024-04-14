export abstract class Calculo {
    perimetro:string

    constructor(perimetro:string) {
        this.perimetro = perimetro
    }
    abstract calcularPerimetro():number
}

export class Circulo extends Calculo {
    radio: number = 0

    constructor(perimetro: string, radio: number) {
        super(perimetro)
        this.radio = radio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio
    }
}

export class Triangulo extends Calculo {
    lado1: number = 0
    lado2: number = 0
    lado3: number = 0
    

    constructor(perimetro: string, lado1: number, lado2: number, lado3: number) {
        super(perimetro)
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3
    }


}