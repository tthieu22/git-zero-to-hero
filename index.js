require('dotenv').config();
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

(async () => {
  await redis.set("greeting", "Hello Redis!");
  const value = await redis.get("greeting");
  console.log("From Redis:", value);
  redis.disconnect();
})();
