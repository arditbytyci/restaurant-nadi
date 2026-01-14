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
      className={`mx-auto max-w-[90rem] px-6 sm:px-6 lg:px-10 xl:px-20 w-full ${className}`}
    >
      {children}
    </Component>
  );
};
