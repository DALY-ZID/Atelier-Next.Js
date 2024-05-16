/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL : "http://localhost:3001/api"
    },
    images: {
        domains: ['res.cloudinary.com', 'img.freepik.com'],

    },
};

export default nextConfig;
