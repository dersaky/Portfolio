#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting build process...');

try {
  // Try to fix permissions on Windows/Unix systems
  const viteBinPath = path.join('node_modules', '.bin', 'vite');
  const viteJsPath = path.join('node_modules', 'vite', 'bin', 'vite.js');
  
  // Check if vite binary exists and try to make it executable
  if (fs.existsSync(viteBinPath)) {
    try {
      fs.chmodSync(viteBinPath, '755');
      console.log('Fixed permissions for vite binary');
    } catch (err) {
      console.log('Could not fix permissions, will use alternative method');
    }
  }
  
  // Try different build methods
  let buildSuccess = false;
  
  // Method 1: Try npx vite build
  if (!buildSuccess) {
    try {
      console.log('Trying: npx vite build');
      execSync('npx vite build', { stdio: 'inherit' });
      buildSuccess = true;
    } catch (err) {
      console.log('npx method failed, trying next method...');
    }
  }
  
  // Method 2: Try direct node execution
  if (!buildSuccess && fs.existsSync(viteJsPath)) {
    try {
      console.log('Trying: node vite/bin/vite.js build');
      execSync(`node "${viteJsPath}" build`, { stdio: 'inherit' });
      buildSuccess = true;
    } catch (err) {
      console.log('Direct node method failed, trying next method...');
    }
  }
  
  // Method 3: Try direct binary execution
  if (!buildSuccess && fs.existsSync(viteBinPath)) {
    try {
      console.log('Trying: direct vite binary');
      execSync(`"${viteBinPath}" build`, { stdio: 'inherit' });
      buildSuccess = true;
    } catch (err) {
      console.log('Direct binary method failed');
    }
  }
  
  if (!buildSuccess) {
    throw new Error('All build methods failed');
  }
  
  console.log('Build completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
