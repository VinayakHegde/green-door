export const Main = ({ children, ...props }: MainProps) => (
  <main className="flex min-h-screen flex-col items-center p-6 md:p-24 w-full" {...props}>
    {children}
  </main>
);