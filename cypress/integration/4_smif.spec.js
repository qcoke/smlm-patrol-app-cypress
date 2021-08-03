describe('开始测试消防安全模块', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  it('是否能够正常访问', () => {
    cy.visit('/pages/fire/index/index');
    cy.wait(5000).then(()=> {
      cy.get('.top-banner .nav-bar-img').should('have.length', 4);
    });
  });

  it('首页能够正常显示添加的设备，并且状态应该有在线、离线、告警、预警的区别', () => {
    // 目前检测的结果是至少一条
    cy.get('.device-item-alert').contains('187ED5335908').should('have.length', 1)
  });
  
  describe('专门测试deviceCode为187ED5335908的设备', () => {

    it('获取实时数据应该正常，并且能够按照 “日、月、年” 来查询实时数据', () => {
      cy.visit("/pages/fire/device-detail/device-detail?deviceCode=187ED5335908")
      // 模拟一次tab点击，界面上至少要出现一个设备编码的字段，且编码为 187ED5335908
      cy.get('.u-tab-item').contains('基本信息').click();
      cy.contains('187ED5335908').should('have.length', 1);
    });
    it('根据不同的设备类型，判断是否有相应的控制选项，进行操作之后需要判断是否有 200 的服务器状态返回', () => {

    });
    it('基本信息需要能够正常显示', () => {

    });
    it('如果设备支持摄像头，需要显示摄像头的列表，并且能够点击进入播放界面进行播放', () => {

    });
  });
});
