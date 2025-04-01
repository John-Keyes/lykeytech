import {ComponentProps} from 'react';


interface ButtonProps extends ComponentProps<"button"> {
    className?: string;
}

const Button = ({children, className, ...props}: ButtonProps) => (
    <button className={`button transition-fast text-white cursor-pointer bg-transparent rounded-sm ${className} ${props.disabled && "button-disabled button-disabled-effects"}`} {...props}>{children}</button>
);

export default Button;