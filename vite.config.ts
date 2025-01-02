import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCSS from 'unocss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import markedPreview from 'vite-plugin-doc-preview'
import { visualizer } from 'rollup-plugin-visualizer';

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

const DEV_CONFIG = {
  config: {
    base: '/restructure/dist/index.html',
    server: {
      host: '0.0.0.0',
      port: 6699,
      open: true
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        '*.{js,ts}',
      ],
      fix: true
    }),
  ]
}

const DOCS_CONFIG = {
  config: {
    base: './',
    build: {
      outDir: `dist`,
      rollupOptions: {
        input: {
          index: 'index.html'
        },
        // 静态资源分类打包
        output: {
          // chunkFileNames: 'static/js/[name]-[hash].js',
          // entryFileNames: 'static/js/[name]-[hash].js',
          // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // TODO: 处理GitHub Pages 部署 _plugin-vue_export-helper.js 404
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name: any) {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
          },
          // manualChunks(id: any) {
          //   if (id.includes('node_modules')) {
          //     return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender'
          //   }
          // }
        }
      }
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
      ],
      fix: true
    }),
    stylelintPlugin({
      include: [
        'doc/**/*.{css,scss,less}',
        'doc/*.{css,scss,less}',
      ],
      fix: true
    })
  ],

}

export default defineConfig(({mode}) => {
  const viteConfig = mode === 'dev' ? DEV_CONFIG : DOCS_CONFIG

  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./doc', import.meta.url)),
      }
    },

    plugins: [
      ...viteConfig.plugins,
    ]
  };
});
