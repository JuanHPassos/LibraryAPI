import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// Waiting event at PORT
app.listen(PORT, () => {
    console.log("server listening");
});

