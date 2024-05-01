/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "password",
    MYSQL_DATABASE: "enamm_database",
    MYSQL_PORT: "3306",
  },
};

export default nextConfig;
