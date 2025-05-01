import React from 'react';
import { Layout, Menu, Input, Avatar, Dropdown, Button, Space } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LeftOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import './BasicLayout.css';
import { processMenuItems } from '@/config/iconMap';
import menuConfig from '@/config/menu.json';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => {
  const navigate = useNavigate();
  
  // 侧边栏是否收起
  // const [collapsed, setCollapsed] = useState(false);

  // 处理菜单配置和用户菜单配置，添加图标组件
  const siderMenuItems = processMenuItems(menuConfig.siderMenu);
  const userMenuItems = processMenuItems(menuConfig.userMenu);

  // 处理菜单点击事件
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(`/${key}`);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider
        width={200}
        className="bg-white"
      >
        <div className="h-16 flex items-center justify-center">
          <span className="text-lg font-bold">VoxC</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          defaultOpenKeys={['my', 'music', 'community']}
          items={siderMenuItems}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout>
        {/* 顶栏 */}
        <Header className="bg-white px-4 flex items-center justify-between">
          <Space>
            {/* 回退 */}
            <Button type="text" icon={<LeftOutlined />} />
            {/* <Breadcrumb
              items={[
                { title: '首页' },
                { title: '音乐' },
                { title: '专辑' },
              ]}
            /> */}
          </Space>
          <Space size="middle">
            <Input
              placeholder="搜索"
              prefix={<SearchOutlined />}
              className="w-48"
            />
            <Avatar icon={<UserOutlined />} />
            <span>用户名</span>
            <Button type="text" icon={<BellOutlined />} />
            <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
              <Button type="text" icon={<MenuOutlined />} />
            </Dropdown>
          </Space>
        </Header>

        {/* 内容区域 */}
        <Content className="m-4 p-8 bg-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
