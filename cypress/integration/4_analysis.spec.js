describe('统计分析模块',()=>{
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  it('是否正常访问', ()=>{
    cy.visit("/pages/air/analysis/analysis");
    cy.get('title').should('contain', '统计分析');
  });
});