import { Input } from "./input";

export const Select = ({ label, name, options, ...props }: SelectProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">{label}</label>
      <div
        className="bg-gray-50 border border-gray-300 rounded-tl-lg rounded-tr-lg text-gray-900 text-sm block w-full p-2.5 h-10 uppercase"
      >{props.value}</div>
      <select id={name} size={5} {...props} className="bg-gray-50 border border-gray-300 border-t-0 text-gray-900 text-sm rounded-bl-lg rounded-br-lg focus:ring-gray-300 focus:border-gray-300 focus-visible:ring-gray-300 focus-visible:outline-none block w-full p-2.5">
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>);
}