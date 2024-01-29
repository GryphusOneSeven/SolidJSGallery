import { createSignal } from "solid-js";
import "./MainGallery.css"

function MainGallery() {

    const [data, setData] = createSignal([])

    const reloadData = async () => {
        let tmpList = [];
        const tmpData = await fetch("https://jsonplaceholder.typicode.com/photos")
        const jsonData = await tmpData.json();
        for (let i = 0; i < 30; i++) {
            let randomInt = Math.floor(Math.random() * jsonData.length);
            tmpList.push(jsonData[randomInt]);
        }
        setData(tmpList);
        console.log(tmpList);
    };

    const dummyFunction = () => {
        console.log("Go to image");
    }

    return (
        <div>
            <h1>Main Gallery Page</h1>
            <button onClick={reloadData}>Fetch Pictures</button>
            <br/>
            <div class="photoGrid">
                <For each={data()} fallback={<p>Fetching data</p>} >{(elem, i) =>
                    <img class="photo" src={elem.thumbnailUrl} title={elem.title} onclick={dummyFunction}></img>
                }</For>
            </div>
        </div>
    );
}
export default MainGallery;
