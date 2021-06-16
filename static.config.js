import React from 'react'
import path from 'path'
import packages from './public/mfk-presentation-level-collection.json'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    return [
      {
        path: '/library',
        getData: () => ({packages})
      }
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
  }) => (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet"/> 
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
