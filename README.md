# smlm-patrol-app-cypress
智慧消防客户端 E2E 自动化测试工程

### 系统登录
- 系统登录界面
  - 直接提交用户名、密码、验证码应显示红色的提示字段
  - 测试错误账号登录，提示”账号、密码错误“
  - 输入正确账号之后进入系统界面
### 系统主页
- 是否能够正常加载模块
- 点击我的进入个人中心,必须包含消息、安全设置、关于我们三个模块
  - 点击消息中心进入消息中心界面
    - 点击 ”设备异常“ 和 “系统消息” 能够正常的切换数据
    - 滚动能够进行正常的翻页数据加载
  - 点击“头像”进入个人资料界面
    - 点击 “头像“ 要弹出 ”修改，设置默认头像“ 的底部菜单栏
    - 点击 ”默认头像“ 设置为基础头像数据
- 右上角的 “设备” 能够进入设备列表页
  - 列表页是否能够触发下拉加载数据的功能
  - 列表页是否能够正常使用搜索功能
  - 列表页是否能够使用过滤工具栏的功能
  - 点击右上角的 "+" 否能够进入设备添加页面
    - 输入错误的设备编码后点击“校验”应提示 “设备未入库”
    - 输入正确的设备编码后点击“校验”设备的已有数据应自动填写在表单中
    - 点击“设备编码”的输入框，为了保持数据的准确性，应该清理所有已经填写的数据
    - 输入正确的运营商添加的设备编码，点击”校验“保存后提示保存成功，存下当前的编号，然后返回上一级列表页
    - 调用上一步保存的编码，通过”搜索“功能，应该能够在”全部“标签页查询到至少一条记录
### 空调节能
- 进入系统管理界面
  - 点击 ”空调型号“ 能够正常进入界面
    - 点击右上角的 ”+“ 号，正常进入空调型号的添加界面
    - 直接点击右上角的 ”保存“ 功能，应该出现 ”品牌，型号，码值3，4面板中应提示用户输入温度、风向、风速“ 等必填字段的红色文字提示
    - 测试温度仅仅能够输入 16~30 之间的数字
    - 若添加已经存在的空调型号，客户端应提示“该型号已经添加”
    - 输入正确的资料，提示添加成功，并且返回列表页
    - 长按新添加的”空调型号“，底部应该弹出”删除“功能的菜单栏，点击删除后，录入的空调型号应该被删除不在界面显示
  - 点击 “控制器管理” 能够正常进入界面
    - 点击 “未安装、已安装、已下线” 界面需要能够正常显示
    - 点击右上角的 "+" 能够进入控制器管理界面
    - 直接点击右上角的 “保存” 功能，界面上的控制器名称、类型、型号等七个等必填字段需要有红色的提示
    - 输入正确的信息后，点击保存，应提示保存成功。并且返回列表界面。保存控制器名称备用
    - 返回 “控制器管理” 界面，在 “已安装” Tab 页中应该能够查到保存的控制器名称
    - 点击 “下线” 功能，应该弹出 ”确定要下线的控制器“ 的二次确认框，点击 “取消” 模态窗口消失，若点击 “下线” 则移除该条记录。
  - 点击“定时控制”
- 进入空调节能首页
  - 控制器总数应该大于等于 0 
  - 控制器离线数、控制器在线数、空调运行数、空调停止数应该大于等于 0
  - 进一个月用电量统计、近一个月用电时长统计、近一个月场所能源统计组件能够正常的读取数据
- 下行指令界面
    - 如果请求有数据的话，需要根据数据判断加载多少数据量，并且需要判断数据右上角需要显示成功还是发送中
    - 点击左上角的日历控件，需要弹出日历控件，选择日期之后点击 “确认” 需要重新查询数据，并加载至界面中
- 操作日志
  - 进入之后需要能够查询出以往的操作日志
  - 下拉之后应该触发加载事件，并且直接累积在当前列表下
### 消防安全
- 是否能够正常访问
- 是否能够添加运营商已注册的设备
  - 需要调用代理商的接口，然后提交设备数据
  - 点击“验证”之后读取所有数据，然后继续添加设备
  - 

### 账户系统
