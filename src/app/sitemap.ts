import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Define the allowed change frequencies as a type
type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://icreatixpro.com'
  
  // Get all static routes
  const staticRoutes = await getStaticRoutes()
  
  // Get all blog posts
  const blogRoutes = await getBlogRoutes()
  
  // Get all service pages
  const serviceRoutes = await getServiceRoutes()
  
  // Get all tool pages
  const toolRoutes = await getToolRoutes()
  
  const allRoutes = [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...toolRoutes]
  
  return allRoutes.map((route): any => ({
    url: baseUrl + route.path,
    lastModified: route.lastModified || new Date(),
    changeFrequency: (route.changeFrequency || 'weekly') as ChangeFrequency,
    priority: route.priority || 0.7,
  }))
}

async function getStaticRoutes() {
  const appDir = path.join(process.cwd(), 'src/app')
  const routes: { path: string; priority: number; changeFrequency: ChangeFrequency; lastModified?: Date }[] = []
  
  function scanDirectory(dir: string, basePath: string = '') {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      if (item.isDirectory()) {
        if (['api', 'components', 'utils', 'lib', 'hooks', '[slug]', '[category]', 'favicon.ico'].includes(item.name)) {
          continue
        }
        
        const folderPath = path.join(dir, item.name)
        const routePath = basePath ? '/' + basePath + '/' + item.name : '/' + item.name
        
        if (fs.existsSync(path.join(folderPath, 'page.tsx'))) {
          const stats = fs.statSync(path.join(folderPath, 'page.tsx'))
          routes.push({
            path: routePath,
            priority: getPriority(item.name),
            changeFrequency: 'monthly' as ChangeFrequency,
            lastModified: stats.mtime,
          })
        }
        
        scanDirectory(folderPath, item.name)
      }
    }
  }
  
  function getPriority(name: string): number {
    const priorities: Record<string, number> = {
      '': 1.0,
      'about': 0.8,
      'contact': 0.8,
      'blogs': 0.9,
      'tools': 0.8,
      'services': 0.8,
      'sitemap': 0.5,
    }
    return priorities[name] || 0.6
  }
  
  scanDirectory(appDir)
  
  // Add home page if not already added
  if (!routes.some(r => r.path === '')) {
    routes.push({
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as ChangeFrequency,
      lastModified: new Date(),
    })
  }
  
  return routes
}

async function getBlogRoutes() {
  const contentDir = path.join(process.cwd(), 'src/content/blogs')
  const routes: { path: string; priority: number; changeFrequency: ChangeFrequency; lastModified?: Date }[] = []
  
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir)
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '')
        const filePath = path.join(contentDir, file)
        const stats = fs.statSync(filePath)
        
        routes.push({
          path: '/blogs/' + slug,
          priority: 0.8,
          changeFrequency: 'weekly' as ChangeFrequency,
          lastModified: stats.mtime,
        })
      }
    }
  }
  
  return routes
}

async function getServiceRoutes() {
  const servicesDir = path.join(process.cwd(), 'src/app/services')
  const routes: { path: string; priority: number; changeFrequency: ChangeFrequency; lastModified?: Date }[] = []
  
  if (fs.existsSync(servicesDir)) {
    const items = fs.readdirSync(servicesDir, { withFileTypes: true })
    
    for (const item of items) {
      if (item.isDirectory()) {
        const servicePath = path.join(servicesDir, item.name)
        if (fs.existsSync(path.join(servicePath, 'page.tsx'))) {
          const stats = fs.statSync(path.join(servicePath, 'page.tsx'))
          routes.push({
            path: '/services/' + item.name,
            priority: 0.8,
            changeFrequency: 'weekly' as ChangeFrequency,
            lastModified: stats.mtime,
          })
        }
      }
    }
  }
  
  return routes
}

async function getToolRoutes() {
  const toolsDir = path.join(process.cwd(), 'src/app/tools')
  const routes: { path: string; priority: number; changeFrequency: ChangeFrequency; lastModified?: Date }[] = []
  
  if (fs.existsSync(toolsDir)) {
    const items = fs.readdirSync(toolsDir, { withFileTypes: true })
    
    for (const item of items) {
      if (item.isDirectory() && !['api'].includes(item.name)) {
        const toolPath = path.join(toolsDir, item.name)
        if (fs.existsSync(path.join(toolPath, 'page.tsx'))) {
          const stats = fs.statSync(path.join(toolPath, 'page.tsx'))
          routes.push({
            path: '/tools/' + item.name,
            priority: 0.7,
            changeFrequency: 'monthly' as ChangeFrequency,
            lastModified: stats.mtime,
          })
        }
      }
    }
  }
  
  return routes
}

