import { onMount } from "solid-js";
import { useParams } from '@solidjs/router'

function PhotoInfo() {

    const dummyButton = () => {
        console.log("TEST")
    }

    return (
        <div>
            <h1>Picture infos</h1>
            <button onclick={dummyButton} >TEST</button>
        </div>
    );
};
export default PhotoInfo;
