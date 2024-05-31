import { useState } from "react";

function NiceText() {
    const [text, setText] = useState(0);

    return <button onClick={() => setText(text + 1)}>Clicked {text} times</button>;
}

export default NiceText;
