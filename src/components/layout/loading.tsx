import React, { ComponentProps } from 'react';

const Loading = (props: ComponentProps<"div">) => (
    <div {...props} id="loading-container" aria-label="Loading Container" className="flex flex-center fit-width loading">
        <span id="loading-arrow-0" aria-label="Loading Arrow 0" className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span id="loading-arrow-1" aria-label="Loading Arrow 1" className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span id="loading-arrow-2" aria-label="Loading Arrow 2" className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
        <span id="loading-arrow-3" aria-label="Loading Arrow 3" className="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"/>
    </div>
);

export default Loading;