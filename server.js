const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// JSON 요청 본문 파싱
app.use(express.json());

// URL-encoded 요청 본문 파싱
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req,res)=>{
    res.send({message: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
