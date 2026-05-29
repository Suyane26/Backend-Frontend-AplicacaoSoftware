describe('Testes de Filtros do Frontend', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve filtrar tarefas pendentes e concluídas corretamente', () => {
    // 1. Cria duas tarefas distintas
    cy.get('#taskInput').type('Tarefa Pendente');
    cy.get('#addBtn').click();
    
    cy.get('#taskInput').type('Tarefa Concluída');
    cy.get('#addBtn').click();

    // 2. Conclui apenas a segunda tarefa
    cy.get('#taskList li').last().find('.done-btn').click();

    // 3. Testa o Filtro de "Pendentes"
    cy.get('#filterPending').click();
    cy.get('#taskList').should('contain', 'Tarefa Pendente');
    cy.get('#taskList').should('not.contain', 'Tarefa Concluída');

    // 4. Testa o Filtro de "Concluídas"
    cy.get('#filterCompleted').click();
    cy.get('#taskList').should('not.contain', 'Tarefa Pendente');
    cy.get('#taskList').should('contain', 'Tarefa Concluída');

    // 5. Exclui a tarefa para garantir que o botão de remover funciona
    cy.get('.delete-btn').click();
    cy.get('#taskList').should('not.contain', 'Tarefa Concluída');
  });
});