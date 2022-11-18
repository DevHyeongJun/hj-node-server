const pg = require('pg');

const config = {
    
    user:'postgres',
    host:'10.1.73.61',
    database:'gmx_ap_gis',
    password: 'geomex12#',
    port : 5432,
    max: 10,
}

let pool = null;

const conn = async (param) => {
    //param.dburl
    //param.dbid
    //param.dbpw
    pool = new pg.Pool(config);
        
    process.on('unhandledRejection', error => {
        pool.end();
    });

    try {
        await pool.connect();
        return true;
    } catch ( e ) {
        console.log('DB 연결에 실패하셨습니다.23');
        pool.end();
        return false;
    }
}

module.exports.DBQuery = async (sql, param) => {
    try {
        //1. 연결
        const isConn = await conn(config);

        console.log(isConn);
        //2. 쿼리 
        const res = await pool.query(sql, param);
        
        //3. 종료
        pool.end();
        return res;
    } catch (e) {
        pool.end();
        return e
    }
}


module.exports.DBClose = () => {
    pool.end();
}