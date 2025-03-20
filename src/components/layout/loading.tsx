import React, { ComponentProps } from 'react';
interface LoadingPropsType extends ComponentProps<"div"> { 
    Redirection?: () => void,
}
const Loading = (props: LoadingPropsType) => {
    const {Redirection} = props;
    if(Redirection) {
        Redirection();
    }
    return <div {...props} className="flex flex-center loading"/>;
}

export default Loading;