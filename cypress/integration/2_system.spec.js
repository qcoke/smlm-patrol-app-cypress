describe("系统主页模块", () => {
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it('是否能够正常加载模块', function () {
        cy.wait(2000).then(()=>{
            // 至少一个模块
            expect('.u-grid-item').to.have.length.above(1);
        });
    });

    it('点击我的进入个人中心,必须包含消息、安全设置、关于我们三个模块', () => {
        cy.get('.u-tabbar__content__item').contains('我的').click();
        cy.get('.u-cell-item-box .u-cell').should('have.length', 3);
    });

    it('点击消息中心进入消息中心界面', () => {
        cy.get(".u-cell").contains('消息中心').click();
        cy.get('.message-panel').should('have.length', 1);
    });

    describe('点击“头像”进入个人资料界面', () => {
        it('点击 “头像“ 要弹出 ”修改，设置默认头像“ 的底部菜单栏', () => {})
        it('点击 ”默认头像“ 设置为基础头像数据', () => {})
    })
})
