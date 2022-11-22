

const axios = require('axios'); 
const URL = 'http://dapi.kakao.com/v2/local/search/address.json';

module.exports.DaumApi = {
    
  getLatLon : async (name) => {
    let res;

    try {

      const url = `${URL}?query=${encodeURI(name)}`;
  
      res = await axios({
        url: url,
        method: 'get',
        headers: {
          Authorization: `KakaoAK ${process.env.DAUM_REST_API_KEY}`, //KakaoAK 뒤에 위에서 얻은 REST API KEY를 입력
        },
      });

      res = res.data.documents[0];

    } catch (e) {
      console.log(e);
      res = {
        x : 0,
        y : 0
      }
    }
    
    return res;
  }
}