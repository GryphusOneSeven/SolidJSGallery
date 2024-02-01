import { Show, createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import "./MainGallery.css"

function MainGallery() {

    const [data, setData] = createSignal([])
    const [loaded, setLoaded] = createSignal(false)

    const fetchData = async () => {
        setLoaded(false)
        let tmpList = [];
        const tmpData = await fetch("https://jsonplaceholder.typicode.com/photos")
        const jsonData = await tmpData.json();
        for (let i = 0; i < 30; i++) {
            let randomInt = Math.floor(Math.random() * jsonData.length);
            tmpList.push(jsonData[randomInt]);
        }
        setData(tmpList);
        console.log(tmpList);
        setLoaded(true);
    };

    onMount(fetchData());

    const addImages = async () => {
        setLoaded(false)
        let tmpList = data();
        setData([])
        const tmpData = await fetch("https://jsonplaceholder.typicode.com/photos")
        const jsonData = await tmpData.json();
        for (let i = 0; i < 30; i++) {
            let randomInt = Math.floor(Math.random() * jsonData.length);
            tmpList.push(jsonData[randomInt]);
        }
        setData(tmpList);
        console.log(tmpList);
        setLoaded(true);
    }

    const dummyButton = () => {
        console.log("test");
    }

    return (
        <div>
            <h1 class="titleText" >Main Gallery Page</h1>
            <button class="reloadButton" onClick={fetchData}>Reload photos</button>
            <br/>
            <div class="photoGrid">
                <For each={data()} fallback={<p>Fetching data</p>} >{(elem, i) =>
                    <A href={"/info/" + elem.id}>
                        <img class="photo" src={elem.thumbnailUrl} title={elem.title}></img>
                    </A>
                }</For>
            </div>
            <div class="loadMoreButtonContainer">
                <Show
                    when={loaded()}>
                    <button class="loadMoreButton" onClick={addImages}>Load more photos</button>
                </Show>
            </div>
        </div>
    );
}
export default MainGallery;
