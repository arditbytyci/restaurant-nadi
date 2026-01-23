import React, { forwardRef, ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = "", as: Component = "div" }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={`mx-auto max-w-[110rem] px-6 sm:px-6 lg:px-10 xl:px-16 w-full ${className}`}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = "Container";
