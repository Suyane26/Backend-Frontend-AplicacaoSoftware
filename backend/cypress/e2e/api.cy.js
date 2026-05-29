describe('Testes da API Backend', () => {
  it('Deve retornar uma lista de produtos com status 200', () => {
    cy.request('/api/produtos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('nome', 'Teclado Mecânico');
    });
  });
});