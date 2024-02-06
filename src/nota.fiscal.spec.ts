import { NotaFiscal } from './nota.fiscal';
//TODO: Deve ser gerada com a data do dia
//TODO: Deve possuir numeração sequencial;
//todo: DEVE POssuir um tomador e um emissor;
//TODO: deve possuir um produto ou serviço;
//TODO: deve possuir quantidade e descrição e valor produto/serviço
//TODO: serviço tem ISS;
//TODO: deve possuir o valor total da nota;
//TODO: se for produto de possuir o valor do ICMS-ST;
describe('Nota fiscal', () => {
  it('Deve ser gerada com a data do dia', () => {
    const notaFiscal = new NotaFiscal(5);

    expect(notaFiscal.getData).toEqual(new Date());
  });

  it('Toda nota precisa de uma numeração', () => {
    const numero = 1;
    const notaFiscal = new NotaFiscal(numero);

    expect(notaFiscal.getNumero).toEqual(numero);
  });

  it('senão vier o numero deve xingar o usuário', () => {
    const numero = null;

    expect(() => new NotaFiscal(numero)).toThrow(
      'Numero da nota fiscal é obrigatório amiguinho!!!',
    );
  });
});
