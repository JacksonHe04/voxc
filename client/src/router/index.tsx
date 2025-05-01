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
import Album from '@/pages/music/album'
import Song from '@/pages/music/song'
import Artist from '@/pages/music/artist'

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
            path: '/album',
            element: <Album />,
          },
          {
            path: '/artist',
            element: <Artist />,
          },
          {
            path: '/song',
            element: <Song />,
          },
          {
            path: '/follow',
            element: <Follow />,
          },
        ]
      },
    ],
  },
])

export default router