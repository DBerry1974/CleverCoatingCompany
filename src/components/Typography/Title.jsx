export const Title = ({ classes = "", children, textColor = "text-white" }) => {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight ${textColor} lg:text-6xl ${classes}`}
    >
      {children}
    </h1>
  );
};

export const PageTitle = ({ classes = "", children }) => (
  <h1
    className={`text-3xl text-gray-900 block font-bold tracking-tight sm:text-4xl ${classes}`}
  >
    {children}
  </h1>
);

export const SubTitle = ({
  classes = "",
  children,
  textColor = "text-gray-900",
  ...props
}) => (
  <h2
    className={`font text-2xl font-bold tracking-tight ${textColor} sm:text-3xl ${classes}`}
    {...props}
  >
    {children}
  </h2>
);

export const ContentTitle = ({ children }) => (
  <h3 className="text-lg font-medium text-gray-900">{children}</h3>
);
