export const Input = ({
  label,
  name,
  id,
  onChange,
  autocomplete,
  placeholder,
  type = "text",
  value = "",
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autocomplete}
        className="block form-input w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-300 focus:ring-orange-300"
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </>
  );
};
