// File: scripts/generate-sitemap.js

const fs = require('fs');
const { globSync } = require('glob');
const path = require('path'); // استيراد وحدة path لمعالجة المسارات

// استيراد بياناتنا الديناميكية
const articles = require('../api/articles');
const locations = require('../api/locations');

const SITE_ROOT = 'https://www.flyttdirekt.se';

async function generateSitemap() {
    const urlSet = new Set();

    // 1. إضافة الصفحات الثابتة التي نريدها فقط
    const staticPages = [
        '/',
        '/om-oss',
        '/kontakt',
        '/priser', // الصفحة التي أعدنا تسميتها
        '/flyttfirma',
        '/flytthjalp',
        '/flyttstadning',
        '/magasinering',
        '/foretagsflytt',
        '/pianoflytt',
        '/blogg',
        '/terms', // إذا كنت تستخدم صفحة الشروط
    ];
    
    staticPages.forEach(page => {
        const url = `${SITE_ROOT}${page}`;
        urlSet.add(url);
    });

    // 2. إضافة صفحات المقالات القديمة (Legacy SEO Pages)
    articles.forEach(article => {
        const url = `${SITE_ROOT}/${article.categoryId}/${article.postId}/${article.slug}`;
        urlSet.add(url);
    });

    // 3. إضافة صفحات المدونة العادية
    // (هنا نفترض أنك ستضيف مقالات إلى api/blogs.js في المستقبل)
    // const blogs = require('../api/blogs');
    // blogs.forEach(blog => {
    //     urlSet.add(`${SITE_ROOT}/blogg/${blog.slug}`);
    // });


    // 4. إضافة الصفحات المحلية من api/locations.js
    locations.forEach(location => {
        urlSet.add(`${SITE_ROOT}/flytthjalp/${location.slug}`);
        urlSet.add(`${SITE_ROOT}/flyttstadning/${location.slug}`);
        urlSet.add(`${SITE_ROOT}/magasinering/${location.slug}`);
    });
    
    // 5. تحويل القائمة إلى XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${[...urlSet].map(url => `
        <url>
            <loc>${url.replace(/\\/g, '/')}</loc> 
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
    `).join('')}
</urlset>`;

    // 6. كتابة الملف إلى المجلد العام (public)
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log(`Sitemap generated successfully with ${urlSet.size} URLs!`);
}

generateSitemap();