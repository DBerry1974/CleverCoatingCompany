export const api = async (endpoint = "") => {
  const res = await fetch(
    // we do a quick convenience check here to see if the consumer
    // has passed in a '/'. Makes it so you don't have to remember 👌
    `https://massagebodyandmind.co.uk//wp-json/wc/v3${
      endpoint.startsWith("/") ? endpoint : `/${endpoint}`
    }`,
    {
      headers: {
        Authorization:
          "Basic Y2tfMjk5YTIyNzlmOTVkYWYzNDMyNjAxMTg4MjYxN2Y0NzIxMTQ5MWYwMDpjc184YmFjMWU1ZjVjNTYxYmNlMzdhMzBlMWZiM2RlOGE3MDQ5OTRiMjM0",
      },
    }
  );
  const data = await res.json();
  return data;
};
