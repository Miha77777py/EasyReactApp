import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
    const [alertVisibility, setAlertVisibility] = useState(false);

    return (
        <>
            {alertVisibility && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    Holly molly!
                </Alert>
            )}
            <Button onClick={() => setAlertVisibility(true)}>
                My Button
            </Button>
        </>
    );
}

export default App;
