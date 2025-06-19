import Link from 'next/link';
import Button, { ButtonPropsType } from './button';

interface TagProps extends ButtonPropsType {
    href: string,
    text: string, 
    className?: string
}

const Tag = (props: TagProps) => (
    <Button className={`tag rounded-md transition-fast ${props.className}`} {...props} id={`${props.id}-button`} aria-label={`${props["aria-label"]}-button`}>
        <span className="text-inherit">&#183; <Link id={`${props.id}-link`} aria-label={`${props["aria-label"]} Link`} title={`${props["aria-label"]} Link`} className="text-inherit" target="_blank" rel="noopener noreferrer" href={props.href}>{props.text}</Link> &#183;</span>
    </Button>
);

export default Tag;