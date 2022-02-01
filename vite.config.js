import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import uniHot from './src/uniHot'
uniHot.setupHotJs()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniHot.createHotVitePlugin(),
  ],
})
