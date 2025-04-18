import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Dropdown, Button, Space } from 'antd';
import { HomeOutlined, UserOutlined, HeartOutlined, StarOutlined, PlayCircleOutlined, TeamOutlined, SearchOutlined, BellOutlined, SettingOutlined, InfoCircleOutlined, QuestionCircleOutlined, LogoutOutlined, ShareAltOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './BasicLayout.css';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const siderMenuItems: MenuProps['items'] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Logo（首页）',
    },
    {
      key: 'my',
      icon: <UserOutlined />,
      label: '我的',
      children: [
        { key: 'collection', icon: <HeartOutlined />, label: '收藏' },
        { key: 'follow', icon: <StarOutlined />, label: '关注' },
      ],
    },
    {
      key: 'music',
      icon: <PlayCircleOutlined />,
      label: '音乐',
      children: [
        { key: 'album', label: '专辑' },
        { key: 'song', label: '单曲' },
        { key: 'artist', label: '艺术家' },
      ],
    },
    {
      key: 'community',
      icon: <TeamOutlined />,
      label: '社区',
      children: [
        { key: 'issues', label: '议题' },
        { key: 'playground', label: '广场' },
        { key: 'vote', label: '投票' },
      ],
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    { key: 'share', icon: <ShareAltOutlined />, label: '分享' },
    { key: 'settings', icon: <SettingOutlined />, label: '设置' },
    { key: 'about', icon: <InfoCircleOutlined />, label: '关于' },
    { key: 'help', icon: <QuestionCircleOutlined />, label: '帮助' },
    { key: 'logout', icon: <LogoutOutlined />, label: '退出登录' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={200} className="bg-white">
        <div className="h-16 flex items-center justify-center">
          <span className="text-lg font-bold">{collapsed ? 'L' : 'Logo'}</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          defaultOpenKeys={['my', 'music', 'community']}
          items={siderMenuItems}
        />
      </Sider>
      <Layout>
        <Header className="bg-white px-4 flex items-center justify-between">
          <Space>
            <Button type="text" icon={<LeftOutlined />} />
            <Breadcrumb
              items={[
                { title: '首页' },
                { title: '音乐' },
                { title: '专辑' },
              ]}
            />
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
        <Content className="m-4 p-4 bg-white">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;