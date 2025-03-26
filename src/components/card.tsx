import {ComponentProps} from 'react';


interface CardProps extends ComponentProps<"div"> {
    className?: string;
}

const Card = ({children, className, ...props}: CardProps) => (
    <div className={`card border-icon rounded-md ${className}`} {...props}>
        {children}
    </div>
);

export default Card;