const ApiResult = require('../../const/ApiResult.js');
const request = require('../module/notion/api.js');
const daumRequest = require('../module/daum/api.js');
const express = require('express');
const router = express.Router();
/**
 * 등록안된 레이어 리스트를 구분하여 전체 공간 레이어를 조회한다.
 */
router.post(`/getProjList`, async (req, res) => {

    const result = await request.NotionApi.getProjList();
    const isLonLat = req.body.isLonLat && req.body.isLonLat === true ;

    const list = [];
    // const daum = await daumRequest.DaumApi.getLatLon(projNm);
    // console.log(daum.data.documents[0].x);
    // console.log(daum.data.documents[0].y);
    for ( const r of result.results ) {
        const projNm = r.properties['지역'].rich_text[0].plain_text;

        if ( isLonLat ) {
            const daum = await daumRequest.DaumApi.getLatLon(projNm);
            
            r.properties['경도'] = daum.y;
            r.properties['위도'] = daum.x;
        }

        list.push(r.properties);
    }

    await res.json(ApiResult(list.length == 1 ? 1 : 0, list));
    
});

module.exports = router;