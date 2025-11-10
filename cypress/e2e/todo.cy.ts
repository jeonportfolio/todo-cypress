describe('todo', () => {
  it('todo 아이템을 추가하고, 상태를 변경할 수 있다.', () => {
    cy.visit('/');

    //리스트 로딩 기다리기 
    cy.findAllByRole('checkbox').should('have.length.gte', 1);
  })
})