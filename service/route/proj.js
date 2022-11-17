
const ApiResult = require('../../const/ApiResult.js');
const ProjMapper = require('../mapper/projMapper.js');
const express = require('express');
const router = express.Router();

router.get(`/list`, async (req, res) => {


    const result = await ProjMapper.getList();
    const code = !res ? 1 : 0;


    console.log(result);
    res.json(ApiResult(code, result));
    
});

module.exports = router;