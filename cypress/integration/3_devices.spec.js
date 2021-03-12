describe('设备列表模块',()=>{
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  it('是否正常访问', ()=>{
    cy.visit("/pages/air/devices/devices");
    cy.get('title').should('contain', '设备列表');
  });

  it('测试每个类型是否都有数量', ()=> {
    cy.get('.u-tab-item').should('have.length', 5);
    cy.get('.u-tab-item').contains(/^.+\d{1}$/);
  });

  it('切换一个 Tab 类型', ()=> {
    cy.get('.u-tab-item').each(function(item){
      cy.get(item).click();
      cy.wait(800);
    });
  });

  it('测试搜索', () => {
    cy.get('.u-tab-item').first().click();
    cy.get('.uni-input-input').type('112111{enter}');
    cy.get('.uni-scroll-view-content .device-item').should('have.length', 1);
  });

  it('点击进入详情页', () => {
    cy.get('.uni-scroll-view-content .device-item').first().click();
    cy.get('.head-temperature-subtitle').contains('室内温度');
  });
});