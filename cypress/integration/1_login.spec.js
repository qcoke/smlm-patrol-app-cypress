describe('系统登录界面', () => {
    const username = 'admin';
    const password_error = '9287394279342333';

    before(() => {
        cy.visit("/");
    });

    it("直接提交用户名、密码、验证码应显示红色的提示字段", () => {
        cy.get('uni-button[data-cy="login_btn"]').click();
        cy.get('.u-form-item__message').should('have.length', 3);
    });

    it('测试错误账号登录，提示”账号、密码错误“', () => {
        cy.get('.u-input[data-cy="username"] .uni-input-input').type(username);
        cy.get('.u-input[data-cy="password"] .uni-input-input').type(password_error);
        cy.get('uni-button[data-cy="login_btn"]').click();
        cy.get('.u-form-item__message').should('have.length', 1);
    });

    it('输入正确账号之后进入系统界面', () => {
        // 未使用 commands 版本
        // cy.get('.u-input[data-cy="password"] .uni-input-input').clear();
        // cy.get('.u-input[data-cy="password"] .uni-input-input').type(password_right);
        // 使用 commands
        cy.setRightAccound();
        cy.pause();
        cy.get('uni-button[data-cy="login_btn"]').click();
        cy.get('.grid-title').should('contain', '功能中心');
        expect(localStorage.getItem('GLOBLE_DATA')).to.not.equal(null || undefined);
        cy.saveLocalStorageCache();
    });
});
