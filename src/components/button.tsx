import {ComponentProps} from 'react';


export interface ButtonPropsType extends ComponentProps<"button"> {
    className?: string;
}

const Button = ({children, className, ...props}: ButtonPropsType) => (
    <button className={`button transition-fast cursor-pointer bg-transparent rounded-sm ${className}`} {...props}>{children}</button>
);

export default Button;