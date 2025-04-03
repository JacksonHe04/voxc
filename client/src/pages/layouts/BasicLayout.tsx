import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu, Avatar, Button, Typography, Space } from 'antd'
import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined, 
  HomeOutlined, 
  SearchOutlined, 
  UserOutlined, 
  PlaySquareOutlined,
  LeftOutlined,
  RightOutlined,
  CustomerServiceOutlined,
  SoundOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography

export default function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100vh', background: '#fff' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        theme="light"
        style={{ 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10
        }}
        width={220}
      >
        <div style={{ padding: '16px 16px 0', display: 'flex', alignItems: 'center' }}>
          <Title level={5} style={{ margin: 0 }}>Playcloud</Title>
          <Space style={{ marginLeft: 16 }}>
            <Button type="text" icon={<LeftOutlined />} size="small" />
            <Button type="text" icon={<RightOutlined />} size="small" />
          </Space>
        </div>
        
        <div style={{ margin: '20px 16px 10px', fontWeight: 'bold' }}>
          <Text>浏览音乐</Text>
        </div>
        
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ border: 'none' }}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: '首页',
              onClick: () => navigate('/')
            },
            {
              key: '2-1',
              icon: <CustomerServiceOutlined />,
              label: '专辑',
              onClick: () => navigate('/albums')
            },
            {
              key: '2-2',
              icon: <PlaySquareOutlined />,
              label: '歌曲',
              onClick: () => navigate('/tracks')
            },
            {
              key: '2-3',
              icon: <UserOutlined />,
              label: '歌手',
              onClick: () => navigate('/artists')
            },
            {
              key: '2-4',
              icon: <SoundOutlined />,
              label: '流派',
              onClick: () => navigate('/genres')
            }
          ]}
        />
        
        <div style={{ margin: '20px 16px 10px', fontWeight: 'bold' }}>
          <Text>音乐库</Text>
        </div>
        
        <Menu
          theme="light"
          mode="inline"
          style={{ border: 'none' }}
          items={[
            {
              key: '3-1',
              label: '最近播放',
              onClick: () => navigate('/recently-played')
            },
            {
              key: '3-2',
              label: '收藏歌曲',
              onClick: () => navigate('/favorites')
            },
            {
              key: '3-3',
              label: '排行榜',
              onClick: () => navigate('/charts')
            },
            {
              key: '3-4',
              label: '电台',
              onClick: () => navigate('/radio')
            }
          ]}
        />
      </Sider>
      
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'all 0.2s', backgroundColor: '#fff' }}>
        <Header style={{ 
          padding: 0, 
          background: '#fff', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          height: 64
        }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: '16px', height: 64 }}
              />
              
              <Space size={24} style={{ marginLeft: 16 }}>
                <Button type="primary">新发布</Button>
                <Button type="text">新闻动态</Button>
                <Button type="text">随机播放</Button>
              </Space>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                shape="circle" 
                icon={<SearchOutlined />} 
                style={{ marginRight: 16 }} 
              />
              <Avatar size="default" style={{ backgroundColor: '#1890ff' }}>S</Avatar>
            </div>
          </div>
        </Header>
        
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'calc(100vh - 112px)' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}