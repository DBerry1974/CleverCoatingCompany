import jsdom from "jsdom";

export const decode = (str) => {
  const { JSDOM } = jsdom;
  const dom = new JSDOM(`<!DOCTYPE html><div>${str}</div>`);
  return dom.window.document.querySelector("div").textContent;
};
