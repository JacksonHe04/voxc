import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import BasicLayout from '@/components/layout/BasicLayout'
// basic
import Home from '@/pages/basic/home'
import Login from '@/pages/basic/login'
import Signup from '@/pages/basic/signup'
import Ranking from '@/pages/basic/ranking'
import Result from '@/pages/basic/result'
import About from '@/pages/basic/about'

// music
import Albums from '@/pages/music/albums'
import Songs from '@/pages/music/songs'
import Artists from '@/pages/music/artists'

// rate
import Rate from '@/pages/rate'
import Album from '@/pages/rate/album'
import Song from '@/pages/rate/song'
import Artist from '@/pages/rate/artist'

// user
import Me from '@/pages/user/me'
import Collection from '@/pages/user/collection'
import Rated from '@/pages/user/rated'
import Setting from '@/pages/user/setting'
import Follow from '@/pages/user/follow'

// community
import Issues from '@/pages/community/issues'
import Vote from '@/pages/community/vote'
import Playground from '@/pages/community/playground'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <BasicLayout/>,
        children: [
          {
            path: '/',
            // 重定向到/home
            loader: () => {
              return window.location.replace('/home')
            },
          },
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/me',
            element: <Me />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
          {
            path: '/setting',
            element: <Setting />,
          },
          {
            path: '/collection',
            element: <Collection />,
          },
          {
            path: '/rated',
            element: <Rated />,
          },
          {
            path: '/ranking',
            element: <Ranking />,
          },
          {
            path: '/result',
            element: <Result />,
          },
          {
            path: '/issues',
            element: <Issues />,
          },
          {
            path: '/playground',
            element: <Playground />,
          },
          {
            path: '/vote',
            element: <Vote />,
          },
          {
            path: '/albums',
            element: <Albums />,
          },
          {
            path: '/artists',
            element: <Artists />,
          },
          {
            path: '/songs',
            element: <Songs />,
          },
          {
            path: '/follow',
            element: <Follow />,
          },
          // rate
          {
            path: '/rate',
            element: <Rate />,
            children: [
              {
                path: '/rate/album',
                element: <Album />,
              },
              {
                path: '/rate/song',
                element: <Song />,
              },
              {
                path: '/rate/artist',
                element: <Artist />,
              },
            ]
          },
        ]
      },
    ],
  },
])

export default router