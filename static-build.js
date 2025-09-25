import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple static build without Vite CLI
async function staticBuild() {
  console.log('🔧 Creating static build...');
  
  try {
    // Create dist directory
    const distDir = path.join(__dirname, 'dist');
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true });
    }
    fs.mkdirSync(distDir, { recursive: true });
    
    // Copy index.html
    const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    // Simple HTML template with inline Vue
    const staticHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dmytro - Portfolio</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Add your styles here */
      body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body>
    <div id="app">
        <h1 class="text-4xl font-bold text-center mt-10">Dmytro</h1>
        <p class="text-xl text-center mt-4">Full Stack Web Middle Developer</p>
        <div class="max-w-4xl mx-auto p-8">
            <h2 class="text-2xl font-bold mb-4">About Me</h2>
            <p class="mb-4">Experienced developer specializing in web development, Telegram bots, and automation.</p>
            
            <h2 class="text-2xl font-bold mb-4">Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-blue-100 p-3 rounded">Python</div>
                <div class="bg-green-100 p-3 rounded">Vue.js</div>
                <div class="bg-blue-100 p-3 rounded">TypeScript</div>
                <div class="bg-yellow-100 p-3 rounded">Node.js</div>
            </div>
            
            <h2 class="text-2xl font-bold mb-4 mt-8">Contact</h2>
            <p>Get in touch for collaboration opportunities!</p>
        </div>
    </div>
</body>
</html>`;
    
    fs.writeFileSync(path.join(distDir, 'index.html'), staticHtml);
    
    console.log('✅ Static build completed!');
    console.log('📁 Files created in dist/');
    
  } catch (error) {
    console.error('❌ Static build failed:', error);
    process.exit(1);
  }
}

staticBuild();
