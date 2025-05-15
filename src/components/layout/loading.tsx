import React, { ComponentProps } from 'react';

const Loading = (props: ComponentProps<"div">) => (
    <div {...props} className="flex flex-center fit-width loading">
        <span className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
    </div>
);

export default Loading;