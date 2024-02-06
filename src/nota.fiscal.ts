export class NotaFiscal {
  private data: Date;

  public get getData() {
    return this.data;
  }
  public get getNumero() {
    return this.numero;
  }

  constructor(private readonly numero: number) {
    if (numero === null)
      throw new Error('Numero da nota fiscal é obrigatório amiguinho!!!');
    this.data = new Date();
  }
}
