describe('Testes de Filtros do Frontend', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve adicionar, filtrar e excluir tarefas corretamente', () => {
    // 1. Adiciona duas tarefas (sem usar acentos para garantir compatibilidade no CI)
    cy.get('#taskInput').type('Tarefa 1');
    cy.get('#addBtn').click();
    
    cy.get('#taskInput').type('Tarefa 2');
    cy.get('#addBtn').click();

    // 2. Conclui a segunda tarefa (clica no botão de check dela)
    cy.get('#taskList li').last().find('.done-btn').click();

    // 3. Testa o Filtro de "Pendentes" (A Tarefa 2 deve sumir/ficar oculta)
    cy.get('#filterPending').click();
    cy.get('#taskList li').last().should('have.class', 'hidden');
    
    // 4. Testa o Filtro de "Concluidas"
    cy.get('#filterCompleted').click();
    cy.get('#taskList li').first().should('have.class', 'hidden');

    // 5. Volta para "Todas" e testa a exclusão de uma tarefa
    cy.get('#filterAll').click();
    cy.get('#taskList li').first().find('.delete-btn').click();
    cy.get('#taskList').should('not.contain', 'Tarefa 1');
  });
});