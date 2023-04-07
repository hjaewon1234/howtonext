/** @type {import('next').NextConfig} */
const API_KEY = "60dfbe512725b7dd377ff63a70fad821";
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        // 유저가 어딘가로 이동하면(여기서는 contact)
        destination: "/form",
        // 유저를 form 으로 보낸다
        permanent: false,
        // 이것이 브라우저가 기억을 하게 하냐 안하냐??
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
