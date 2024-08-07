import Memcached from "memcached";

class MemCacheClient {
  client: Memcached;
  constructor() {
    this.client = new Memcached("localhost:11211");
    this.client.on("issue", (detail) => {
      console.log("memcache issue :: ", detail);
    });
    this.client.on("failure", (detail) => {
      console.log("memcache failure :: ", detail);
    });
  }

  async set(key: string, value: string, lifetime: number = 3600) {
    try {
      this.client.set(key, value, lifetime, (err) => {
        if (err) {
          console.log("error occured while setting cache :: ", err);
        }
      });
    } catch (err) {
      console.log("error occured while setting the memcache :: ", err);
    }
  }

  async get(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, data) => {
        if (err) {
          console.log(
            "error occured while fetching the cache key data :: ",
            err
          );
          reject(err);
        }
        return resolve(data);
      });
    });
  }
}

export default new MemCacheClient();
