// File: scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// استيراد بياناتنا الديناميكية
const articles = require('../api/articles');
const locations = require('../api/locations');

const SITE_ROOT = 'https://www.flyttdirekt.se';

async function generateSitemap() {
    const urlSet = new Set();

    // 1. إضافة الصفحات الثابتة الرئيسية
    const staticPages = [
        '/',
        '/om-oss/',
        '/kontakt/',
        '/priser/',
        '/flyttfirma/',
        '/flytthjalp/',
        '/flyttstadning/',
        '/magasinering/',
        '/foretagsflytt/',
        '/pianoflytt/',
        '/blogg/',
        '/villkor/' // تم تغييرها من terms
    ];
    
    staticPages.forEach(page => {
        urlSet.add(`${SITE_ROOT}${page}`);
    });

    // 2. إضافة صفحات المقالات القديمة (Legacy SEO Pages)
    articles.forEach(article => {
        const url = `${SITE_ROOT}/${article.categoryId}/${article.postId}/${article.slug}/`;
        urlSet.add(url);
    });

    // 3. إضافة الصفحات المحلية من api/locations.js
    locations.forEach(location => {
        urlSet.add(`${SITE_ROOT}/flytthjalp/${location.slug}/`);
        urlSet.add(`${SITE_ROOT}/flyttstadning/${location.slug}/`);
        urlSet.add(`${SITE_ROOT}/magasinering/${location.slug}/`);
    });
    
    // 4. تحويل القائمة إلى XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${[...urlSet].map(url => `
        <url>
            <loc>${url}</loc> 
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
    `).join('')}
</urlset>`;

    // 5. كتابة الملف إلى المجلد العام (public)
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log(`Sitemap generated successfully with ${urlSet.size} URLs!`);
}

generateSitemap();
