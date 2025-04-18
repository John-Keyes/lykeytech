import {ComponentProps} from 'react';


export interface CardPropsType extends ComponentProps<"div"> {
    className?: string;
}

const Card = ({children, className, ...props}: CardPropsType) => (
    <div className={`card ${className}`} {...props}>
        {children}
    </div>
);

export default Card;