const ApiResult = require('../../const/ApiResult.js');
const request = require('../module/notion/api.js');
const express = require('express');
const router = express.Router();

/**
 * 등록안된 레이어 리스트를 구분하여 전체 공간 레이어를 조회한다.
 */
router.post(`/getProjList`, async (req, res) => {

    const result = await request.NotionApi.getProjList();

    const list = [];
    result.results.forEach((r) =>{
        list.push(r.properties);
    });

    res.json(ApiResult(list.length == 1 ? 1 : 0, list));
    
});

module.exports = router;