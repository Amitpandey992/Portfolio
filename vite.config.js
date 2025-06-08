import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      autoInstall: true,
      scale: 1.2,
      defaultStyle: '',
      defaultClass: '',
      customCollections: {
        'si': {
          github: 'SiGithub',
          linkedin: 'SiLinkedin',
          instagram: 'SiInstagram',
          twitter: 'SiTwitter',
          youtube: 'SiYoutube',
          mongodb: 'SiMongodb',
          express: 'SiExpress',
          react: 'SiReact',
          nodedotjs: 'SiNodedotjs',
          nextdotjs: 'SiNextdotjs',
          nestjs: 'SiNestjs',
          tailwindcss: 'SiTailwindcss',
          antdesign: 'SiAntdesign',
          // materialui: 'SiMaterialui',
          postgresql: 'SiPostgresql',
          mysql: 'SiMysql',
          nginx: 'SiNginx',
          redis: 'SiRedis',
          amazonaws: 'SiAmazonaws',
          vercel: 'SiVercel',
          postman: 'SiPostman',
          git: 'SiGit',
          user: 'SiUser',
      
          heart: 'SiHeart',
          spotify: 'SiSpotify',
          snapchat: 'SiSnapchat'
        }
      }
    })
  ],
  optimizeDeps: {
    include: ['react-icons']
  },
  build: {
    commonjsOptions: {
      include: [/react-icons/]
    }
  },
  resolve: {
    alias: {
      '~icons': 'unplugin-icons/vite'
    }
  }
})
