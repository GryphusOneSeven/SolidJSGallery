import { createSignal } from "solid-js";

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

    return (
        <div>
            <h1>Main Gallery Page</h1>
            <button onClick={reloadData}>Fetch Pictures</button>
            <For each={data()}>{(elem, i) =>
                <img src={elem.thumbnailUrl}></img>
            }</For>
        </div>
    );
}
export default MainGallery;
