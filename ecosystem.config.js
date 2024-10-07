module.exports = {
  apps: [
    {
      name: 'downtime-monitoring-frontend',
      script: 'yarn',
      args: 'start', // Starts the Next.js app
      instances: 1, // 1 instance, but can be scaled
      exec_mode: 'fork', // Use fork mode to handle a single instance
      watch: false, // Disable watching as it's in production
      autorestart: true, // Restarts if it crashes
      max_memory_restart: '500M', // Restart if it exceeds 500MB
      env: {
        NODE_ENV: 'development', // Development environment variables
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      },
      env_production: {
        NODE_ENV: 'production', // Production environment variables
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      },
    },
  ],
};
