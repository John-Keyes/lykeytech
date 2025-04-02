import {ComponentProps} from 'react';


interface CardProps extends ComponentProps<"div"> {
    className?: string;
}

const Card = ({children, className, ...props}: CardProps) => (
    <div className={`card ${className}`} {...props}>
        {children}
    </div>
);

export default Card;