describe('系统登录界面', () => {
  const username = 'admin';
  const password_error = '9287394279342333';
  const password_right = '123456';

  it("测试非空字段提示", () => {
    cy.visit("/");
    cy.get('uni-button[data-cy="login_btn"]').click();
    // 断言界面上应该出现提示文字
    cy.get('.u-form-item__message').should('have.length', 3);
  });

  it('测试错误账号登录', () => {
    cy.get('.u-input[data-cy="username"] .uni-input-input').type(username);
    cy.get('.u-input[data-cy="password"] .uni-input-input').type(password_error);
    cy.get('uni-button[data-cy="login_btn"]').click();
    cy.get('.u-form-item__message').should('have.length', 1);
  });

  it('测试正确账号登陆', () => {
    cy.pause();
    cy.get('.u-input[data-cy="password"] .uni-input-input').clear();
    cy.get('.u-input[data-cy="password"] .uni-input-input').type(password_right);
    cy.get('uni-button[data-cy="login_btn"]').click();
    cy.get('.grid-title').should('contain', '功能中心');
    expect(localStorage.getItem('GLOBLE_DATA')).to.not.equal(null||undefined);
    cy.saveLocalStorageCache();
  });
});