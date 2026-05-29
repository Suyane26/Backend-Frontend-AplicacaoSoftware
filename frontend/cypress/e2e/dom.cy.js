describe('Testes do Frontend', () => {
  beforeEach(() => {
    // Abre o arquivo index.html diretamente para o teste
    cy.visit('index.html');
  });

  it('Deve adicionar uma nova tarefa à lista com sucesso', () => {
    const tarefa = 'Estudar automação com Cypress';
    
    cy.get('#taskInput').type(tarefa);
    cy.get('#addBtn').click();
    
    cy.get('#taskList').should('contain', tarefa);
  });
});