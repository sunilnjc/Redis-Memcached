import RedisService from "./RedisService";

(async () => {
  await RedisService.set("myKey", "SunilKumar");

  const value = await RedisService.get("myKey");
  console.log("Value  :: ", value);
})();
