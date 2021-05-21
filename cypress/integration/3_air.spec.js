describe('空调节能模块', () => {
    // beforeEach(() => {
    //     cy.restoreLocalStorageCache();
    // });
    //
    // afterEach(() => {
    //     cy.saveLocalStorageCache();
    // })
    //
    // it('是否能够正常显示', () => {
    //     cy.get('.u-grid-item-box').contains('空调节能管理').click();
    //     cy.wait(3000).then(res => {
    //         cy.get('title').should('contain', '空调节能');
    //     })
    // });
    //
    // it('近一个月用电量统计，近一个月用电量时长，近一个月场所能源统计能否正常显示', () => {
    //     cy.wait(2000).then(() => {
    //         cy.get('.chart-box').contains('近一个月用电量统计').parent().parent().parent().find('canvas').should('have.length', 1);
    //         cy.get('.chart-box').contains('近一个月用电量时长').parent().parent().parent().find('canvas').should('have.length', 1);
    //         cy.get('.chart-box').contains('近一个月场所能源统计').parent().parent().parent().find('canvas').should('have.length', 1);
    //     });
    // });
    //
    // it('统计分析模块是否正常访问', () => {
    //     cy.visit("/pages/air/analysis/analysis");
    //     cy.get('title').should('contain', '统计分析');
    // });
    //
    // it('设备列表模块是否正常访问', () => {
    //     cy.visit("/pages/air/devices/devices");
    //     cy.get('title').should('contain', '设备列表');
    // });
    //
    // it('测试每个类型是否都有数量', () => {
    //     cy.get('.u-tab-item').should('have.length', 5);
    //     cy.get('.u-tab-item').contains(/^.+\d{1}$/);
    // });
    //
    // it('切换一个 Tab 类型', () => {
    //     cy.get('.u-tab-item').each(function (item) {
    //         const _item_ = item;
    //         cy.wait(1000).then(() => {
    //             _item_.click();
    //         });
    //     });
    // });
    //
    // it('测试搜索', () => {
    //     cy.get('.u-tab-item').first().click();
    //     cy.get('.uni-input-input').type('112111{enter}');
    //     cy.wait(3000).then(() => {
    //         cy.get('.uni-scroll-view-content .device-item').should('have.length', 1);
    //     });
    // });
    //
    // it('点击进入详情页', () => {
    //     cy.get('.uni-scroll-view-content .device-item').first().click();
    //     cy.get('.head-temperature-subtitle').contains('室内温度');
    // });
    //
    // it('系统管理是否正常访问', () => {
    //     cy.visit('/pages/air/setting/setting');
    //     cy.get('title').should('contain', '系统管理');
    // });
});
