import MemCacheClient from "./MemCacheClient";

(async () => {
  MemCacheClient.set("myKey", "SunilKumar");

  const value = await MemCacheClient.get("myKey");
  console.log("Value  :: ", value);
})();
