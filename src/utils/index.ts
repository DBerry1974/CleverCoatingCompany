export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const toGBP = (price) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
};
