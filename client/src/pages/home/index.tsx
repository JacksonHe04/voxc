import { useState } from 'react';
import { Layout, Typography, Input, AutoComplete, Card, Rate, Row, Col, Carousel, Space, theme } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  const { token } = theme.useToken();
  const [searchOptions, setSearchOptions] = useState<{ value: string }[]>([]);

  // 模拟数据
  const recentAlbums = [
    { id: 1, cover: 'https://via.placeholder.com/300', name: '午夜咖啡馆', artist: '蓝调爵士乐团', desc: '一张充满夜色氛围的爵士专辑' },
    { id: 2, cover: 'https://via.placeholder.com/300', name: '电子幻境', artist: '未来音乐人', desc: '突破传统的电子音乐作品' },
    { id: 3, cover: 'https://via.placeholder.com/300', name: '民谣故事集', artist: '山野诗人', desc: '温暖hearted原创民谣集' },
    { id: 4, cover: 'https://via.placeholder.com/300', name: '摇滚革命', artist: '雷电乐队', desc: '充满能量的摇滚专辑' },
  ];

  const ratedAlbums = [
    { id: 1, cover: 'https://via.placeholder.com/300', name: '星空协奏曲', artist: '古典交响乐团', rating: 4.8, raters: 2341 },
    { id: 2, cover: 'https://via.placeholder.com/300', name: '城市之声', artist: '现代音乐家', rating: 4.5, raters: 1892 },
    { id: 3, cover: 'https://via.placeholder.com/300', name: '自然之歌', artist: '生态音乐人', rating: 4.7, raters: 2156 },
    { id: 4, cover: 'https://via.placeholder.com/300', name: '电子梦境', artist: '数字音乐团', rating: 4.6, raters: 1765 },
  ];

  const recommendedAlbums = [
    { id: 1, cover: 'https://via.placeholder.com/300', name: '海洋之心', artist: '深海之心', desc: '带你探索深海的神秘音乐之旅' },
    { id: 2, cover: 'https://via.placeholder.com/300', name: '山川之歌', artist: '自然之声', desc: '壮丽山河的交响乐章' },
    { id: 3, cover: 'https://via.placeholder.com/300', name: '都市节奏', artist: '街头艺术家', desc: '充满活力的城市音乐集' },
  ];

  const handleSearch = (value: string) => {
    // 模拟搜索建议
    const suggestions = [
      { value: '午夜咖啡馆 - 蓝调爵士乐团' },
      { value: '电子幻境 - 未来音乐人' },
      { value: '民谣故事集 - 山野诗人' },
    ].filter(option => option.value.toLowerCase().includes(value.toLowerCase()));
    setSearchOptions(suggestions);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: token.colorBgContainer }}>
      <Header style={{ background: token.colorPrimary, padding: '1rem' }}>
        <Row justify="center" align="middle">
          <Col xs={24} sm={16} md={12}>
            <AutoComplete
              style={{ width: '100%' }}
              options={searchOptions}
              onSearch={handleSearch}
            >
              <Input
                size="large"
                placeholder="搜索专辑、艺术家..."
                prefix={<SearchOutlined />}
              />
            </AutoComplete>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: '2rem' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* 近期上架专辑 */}
          <section>
            <Title level={2}>近期上架</Title>
            <Row gutter={[16, 16]}>
              {recentAlbums.map(album => (
                <Col xs={24} sm={12} md={6} key={album.id}>
                  <Card
                    hoverable
                    cover={<img alt={album.name} src={album.cover} />}
                    style={{ height: '100%' }}
                  >
                    <Card.Meta
                      title={album.name}
                      description={
                        <Space direction="vertical">
                          <Text type="secondary">{album.artist}</Text>
                          <Text>{album.desc}</Text>
                        </Space>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* 近期评分专辑 */}
          <section>
            <Title level={2}>近期评分</Title>
            <Row gutter={[16, 16]}>
              {ratedAlbums.map(album => (
                <Col xs={24} sm={12} md={6} key={album.id}>
                  <Card
                    hoverable
                    cover={<img alt={album.name} src={album.cover} />}
                    style={{ height: '100%' }}
                  >
                    <Card.Meta
                      title={album.name}
                      description={
                        <Space direction="vertical">
                          <Text type="secondary">{album.artist}</Text>
                          <Rate disabled defaultValue={album.rating} allowHalf />
                          <Text type="secondary">{album.raters} 人评分</Text>
                        </Space>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* 专辑推荐 */}
          <section>
            <Title level={2}>专辑推荐</Title>
            <Carousel autoplay>
              {recommendedAlbums.map(album => (
                <div key={album.id}>
                  <Card
                    hoverable
                    style={{ margin: '0 1rem' }}
                    cover={<img alt={album.name} src={album.cover} />}
                  >
                    <Card.Meta
                      title={album.name}
                      description={
                        <Space direction="vertical">
                          <Text type="secondary">{album.artist}</Text>
                          <Text>{album.desc}</Text>
                        </Space>
                      }
                    />
                  </Card>
                </div>
              ))}
            </Carousel>
          </section>
        </Space>
      </Content>
    </Layout>
  );
}