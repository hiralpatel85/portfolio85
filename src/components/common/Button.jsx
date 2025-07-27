import { Button as ShadcnButton } from '../ui/button'; // Import Shadcn's button

const Button = ({ children, ...props }) => {
  return (
    <ShadcnButton
      className="bg-primary text-white hover:bg-primary-hover rounded-lg shadow-soft-md transition-all duration-200 px-6 py-3"
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;