/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // أضف هذا الجزء لعمليات إعادة التوجيه
  async redirects() {
    return [
      // إعادة توجيه لصفحة Solna
      {
        source: '/17/39/flytthjalp-solna',
        destination: '/flytthjalp/solna', // الرابط الجديد والمنظم
        permanent: true, // مهم جداً للـ SEO (301 Redirect)
      },
      // إعادة توجيه لصفحة اتصل بنا
      {
        source: '/17/5/kontakta-oss',
        destination: '/kontakt', // صفحة الاتصال الجديدة
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig