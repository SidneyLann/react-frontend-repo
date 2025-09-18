import React, { Suspense } from 'react';
import ContainedButton from "../control/button/ContainedButton";

function UiLoad(props) {
    return (
        <Suspense
            fallback={props.uiShow}
        >
            {props.children}
        </Suspense>
    );
}

export default UiLoad;