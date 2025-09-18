interface MenuButtonProps {
    open: boolean;
    className?: string;
}


export const MenuButton: React.FC<MenuButtonProps> = ({open, className}) => {

    return (
        <svg width="60" height="60" className={className} viewBox="0 0 64 44" fill="none"  xmlns="http://www.w3.org/2000/svg" >
        <g className={`transition-transform duration-500 ease-in-out origin-top  ${open ? "translate-y-1/2" : "translate-0"} ${open ? " rotate-y-65 -rotate-x-30" : ""} `}><path d="M2 2H62" stroke="#65171D" strokeWidth="4" stroke-linecap="round"/></g>
        <g className={`transition-opacity duration-400 ease-in-out ${open ? "opacity-0" : "opacity-100"} `}><path d="M2 22H62" stroke="#65171D" stroke-width="4" stroke-linecap="round"/></g>
        <g className={`transition-transform duration-500 ease-in-out origin-center ${open ? "-translate-y-1/3" : "translate-0"} ${open ? " -rotate-y-65 -rotate-x-30" : ""} `}><path d="M2 42H62" stroke="#65171D" strokeWidth="4" stroke-linecap="round"/></g>
        </svg>

        

    )

}