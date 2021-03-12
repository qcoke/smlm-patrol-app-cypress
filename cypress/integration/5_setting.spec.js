describe('系统管理',()=>{
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  it('是否正常访问', ()=> {
    cy.visit('/pages/air/setting/setting');
    cy.get('title').should('contain', '系统管理');
  });
});