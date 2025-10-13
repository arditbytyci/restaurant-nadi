import { JSX } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component
      className={`max-w-7xl mx-auto  sm:px-6 lg:px-10 w-full ${className}`}
    >
      {children}
    </Component>
  );
};
