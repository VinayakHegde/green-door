export const Input = ({ label, name, ...props }: InputProps) => {
  const hasError = props.required && !props.value;
  return (
    <div className="form-group">
      <label htmlFor={name} className={`block text-sm font-medium text-gray-900 ${props.required ? "after:content-['*'] after:text-red-500 after:ml-1" : ""}`}>{label}</label>
      <input
        className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus-visible:outline-none ${hasError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}}`}
        id={name}
        name={name}
        {...props}
      />
      <span className="text-red-500 text-xs mb-4 block">{hasError ? `${label} is required` : ""}</span>
    </div>
  );
}