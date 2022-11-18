
const CorsInit = require('./service/module/cors/cors.js');

const NotionRoute = require('./service/route/notion.js');
const express = require('express');
// 끝
//.env 프로퍼티에서 콘피그를 가져오기 위함...ㅎ
require('dotenv').config();

const {poolConnect} = require('./service/module/db/pool.js');
    
const app = express();

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

CorsInit(app);

const port = app.listen( 5050);

//1. DB 연결    


//각 REST 에 대한 정의는 /service/route/*.js 에서 정의
app.use("/notion", NotionRoute);

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, () => {
    console.log("server start!");
    
});