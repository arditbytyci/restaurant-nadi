import React from "react";
type MenuSectionProps = {
  title: string;
  children: React.ReactNode;
};

const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap text-5xl">{title}</span>
          <div className="flex-1 border-t border-primary" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default MenuSection;
