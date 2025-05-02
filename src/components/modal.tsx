import {ComponentProps, useEffect, useRef, useState} from 'react';
import Button from './button';


export interface CardPropsType extends ComponentProps<"div"> {
    className?: string;
    open?: boolean;
}

const Modal = ({open = false, ...props}: CardPropsType) => {
    const modalRef = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const HandleClickOutside = (e: any) => {
              if (modalRef.current && !modalRef.current.contains(e.currentTarget)) {
                setModalOpen(false);
              }
            }
            document.addEventListener("mousedown", HandleClickOutside);
            return () => {
              document.removeEventListener("mousedown", HandleClickOutside);
            };
          }, [modalRef]);
    const [modalOpen, setModalOpen] = useState<boolean>(open);
    return (
        <div className={`${props.className} modal ${modalOpen ? "modal-flex" : "modal-none"}`} {...props}>
            <Button onClick={() => setModalOpen(false)} className="rounded-pfp bg-light-purple bg-hover-lighter-purple button-glow-purple">
                <span className="text-white fa-solid fa-x"/>
            </Button>
            <div ref={modalRef} className="modal-content">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;