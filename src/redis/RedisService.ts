import { createClient, RedisClientType } from "redis";

class RedisService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient();

    this.client.connect().catch((err) => {
      console.log("error occured", err);
    });
  }

  async set(key: string, value: string): Promise<void> {
    try {
      await this.client.set(key, value);
    } catch (err) {
      console.log("error occured while setting :: ", err);
    }
  }

  async get(key: string): Promise<String | null> {
    try {
      return await this.client.get(key);
    } catch (err) {
      console.error("Error getting key from Redis:", err);
      return null;
    }
  }
}

export default new RedisService();
