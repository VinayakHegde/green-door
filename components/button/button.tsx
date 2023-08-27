export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const className = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
  };
  return (
    <button className={`${className[variant]} text-white font-bold py-2 px-4 rounded disabled:bg-slate-400`}{...props}>{children}</button>
  )
}