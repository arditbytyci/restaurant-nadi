import React, { forwardRef, ElementType } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = "", as: Component = "div" }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={`mx-auto max-w-[110rem] px-6 sm:px-6 lg:px-10 xl:px-16 w-full ${className}`}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = "Container";
