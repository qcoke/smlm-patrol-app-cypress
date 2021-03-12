describe('空调节能模块', ()=>{
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  it('是否能够正常显示',()=>{
    cy.visit('/pages/air/index/index');
    cy.get('title').should('contain', '空调节能')
  });

  it('近一个月用电量统计', ()=>{
    cy.get('uni-canvas[canvas-id="electPanel"]').should('have.length', 1);
  });
  
  it('近一个月用电量时长', ()=>{
    cy.get('uni-canvas[canvas-id="electMonthPanel"]').should('have.length', 1);
  });

  it('近一个月场所能源统计', ()=>{
    cy.get('uni-canvas[canvas-id="energyPanel"]').should('have.length', 1);
  });
});