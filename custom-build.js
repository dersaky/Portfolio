import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function customBuild() {
  try {
    console.log('🚀 Starting custom build process...');
    
    // Import Vite programmatically
    const { build } = await import('vite');
    const { resolve } = await import('path');
    
    // Build configuration
    const buildConfig = {
      root: __dirname,
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html')
          }
        }
      },
      plugins: [
        (await import('@vitejs/plugin-vue')).default()
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      },
      base: './'
    };
    
    console.log('📦 Building with Vite...');
    await build(buildConfig);
    
    console.log('✅ Build completed successfully!');
    
    // Verify dist folder exists
    if (fs.existsSync(join(__dirname, 'dist'))) {
      console.log('📁 Dist folder created successfully');
      const files = fs.readdirSync(join(__dirname, 'dist'));
      console.log('📄 Files in dist:', files);
    }
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

customBuild();
