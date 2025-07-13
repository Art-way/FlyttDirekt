/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Let Next.js handle the trailing slash automatically.
  // This is more stable than handling it in the middleware.
  trailingSlash: true,

  async redirects() {
    return [
      // --- The existing redirects are correct and will work with trailingSlash ---
      { source: '/17/3/om-oss', destination: '/om-oss/', permanent: true },
      { source: '/17/5/kontakta-oss', destination: '/kontakt/', permanent: true },
      { source: '/17/19/blogg', destination: '/blogg/', permanent: true },
      { source: '/17/35/priser', destination: '/priser/', permanent: true },
      { source: '/17/54/har-jobbar-vi', destination: '/har-jobbar-vi/', permanent: true },
      { source: '/17/7/bohagsflytt', destination: '/flytthjalp/', permanent: true },
      { source: '/17/9/flyttstadning', destination: '/flyttstadning/', permanent: true },
      { source: '/17/10/pianoflytt', destination: '/pianoflytt/', permanent: true },
      { source: '/17/12/foretagsflytt-kontorsflytt', destination: '/foretagsflytt/', permanent: true },
      { source: '/17/13/flytt-med-magasinering', destination: '/magasinering/', permanent: true },
      { source: '/17/4/flytt-flyttstadning', destination: '/flytthjalp/', permanent: true },
      { source: '/17/8/budfirma', destination: '/budfirma/', permanent: true },
      { source: '/17/38/flytthjalp-sollentuna', destination: '/flytthjalp/sollentuna/', permanent: true },
      { source: '/17/50/flytthjalp-strangnas', destination: '/flytthjalp/strangnas/', permanent: true },
      { source: '/17/44/flytthjalp-nacka', destination: '/flytthjalp/nacka/', permanent: true },
      { source: '/17/40/flytthjalp-sodertalje', destination: '/flytthjalp/sodertalje/', permanent: true },
      { source: '/17/41/flytthjalp-norrtalje', destination: '/flytthjalp/norrtalje/', permanent: true },
      { source: '/17/52/flytthjalp-sundbyberg', destination: '/flytthjalp/sundbyberg/', permanent: true },
      { source: '/17/53/flytthjalp-vallingby', destination: '/flytthjalp/vallingby/', permanent: true },
      { source: '/17/43/flytthjalp-sodermalm', destination: '/flytthjalp/sodermalm/', permanent: true },
      { source: '/17/48/flytthjalp-haninge', destination: '/flytthjalp/haninge/', permanent: true },
      { source: '/17/49/flytthjalp-lidingo', destination: '/flytthjalp/lidingo/', permanent: true },
      { source: '/17/45/flytthjalp-taby', destination: '/flytthjalp/taby/', permanent: true },
      { source: '/17/47/flytthjalp-huddinge', destination: '/flytthjalp/huddinge/', permanent: true },
      { source: '/17/46/flytthjalp-bromma', destination: '/flytthjalp/bromma/', permanent: true },
      { source: '/17/39/flytthjalp-solna', destination: '/flytthjalp/solna/', permanent: true },
      { source: '/17/51/flytthjalp-jarfalla', destination: '/flytthjalp/jarfalla/', permanent: true },
      { source: '/17/30/flytta-med-barn-tips-for-en-smidigare-flyttupplevelse', destination: '/guider/flytta-med-barn-tips/', permanent: true },
      { source: '/17/33/packa-som-proffsen-sakra-tips-for-glas-konst', destination: '/guider/packa-som-proffsen/', permanent: true },
      { source: '/17/22/vad-ingar-inte-i-flyttstadning', destination: '/guider/vad-ingar-inte-i-flyttstadning/', permanent: true },
      { source: '/17/14/flytta-kassaskap', destination: '/guider/flytta-kassaskap/', permanent: true },
      { source: '/17/26/rutavdrag-flyttstadning-tips', destination: '/guider/rutavdrag-flyttstadning-tips/', permanent: true },
      { source: '/17/31/flytta-internationellt-guide-till-en-problemfri-internationell-flytt', destination: '/guider/flytta-internationellt-guide/', permanent: true },
      { source: '/17/15/flytthjalp-mellan-stader-europa', destination: '/guider/flytthjalp-mellan-stader-europa/', permanent: true },
      { source: '/17/25/guide-till-flyttstadning', destination: '/guider/guide-till-flyttstadning/', permanent: true },
      { source: '/17/23/guide-till-flyttstadning-kostnad', destination: '/guider/guide-till-flyttstadning-kostnad/', permanent: true },
      { source: '/17/36/fran-flyttstadning-till-hemstadning', destination: '/guider/fran-flyttstadning-till-hemstadning/', permanent: true },
    ]
  },
}

module.exports = nextConfig;
