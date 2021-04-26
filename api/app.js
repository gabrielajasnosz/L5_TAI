const express=require('express');

const app = express();


app.use(express.static('./public/dist/blog'));

app.listen(3000, () => {
    console.info(`Server is running at 3000`)
});
