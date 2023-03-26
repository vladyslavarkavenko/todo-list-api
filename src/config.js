module.exports = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',

    JWT_SECRET: process.env.JWT_SECRET || 'jwtSuperSecret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRE_IN || 60 * 60, // 1h

    DATABASE_USERNAME: process.env.DATABASE_USERNAME || "myusername",
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "mypassword",
    DATABASE_NAME: process.env.DATABASE_NAME || "postgres",
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || "postgres",
    DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
}