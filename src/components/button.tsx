import {ComponentProps} from 'react';


interface ButtonProps extends ComponentProps<"button"> {
    className?: string;
}

const Button = ({children, className, ...props}: ButtonProps) => (
    <button className={`button transition-fast cursor-pointer bg-transparent rounded-sm ${className}`} {...props}>{children}</button>
);

export default Button;