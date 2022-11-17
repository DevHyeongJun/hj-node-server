
const {DBClose, DBQuery} = require('../module/db/pool.js');


module.exports = ProjMapper = { 
    
    getList : async () => {
        
        let sql = "";
        sql += " SELECT 1;";
        
        const res = await DBQuery(sql, []);
        return res.rows;
    },

    
    // add : async (values) => {

    //     if ( !values ) return null;
        
    //     await query('BEGIN');
    
    //     let sql = "";
    //     sql += "  INSERT INTO xeus.gis_lyr_list( schem_nm, tbl_id, lyr_nm, lyr_typ, grp_mgr_seq, mk_user)";
    //     sql += "  VALUES ($1,$2,$3,$4,$5,$6) RETURNING mgr_seq";
        
    //     let res = await query(sql, values);
    //     const mgrSeq = res.rows[0].mgr_seq;

    //     sql = "";
    //     sql += "  INSERT INTO xeus.gis_lyr_style( lyr_mgr_seq)";
    //     sql += "  VALUES ($1);";
        
    //     res = await query(sql, [mgrSeq]);
    //     await query('COMMIT');
    //     return res;
    // },

    // mod : async (values) => {

    //     if ( !values ) return null;

    //     let sql = "";
    //     sql += "  UPDATE xeus.gis_lyr_list SET lyr_nm=$1 ";
    //     sql += "  WHERE mgr_seq = $2";
        
    //     let res = await query(sql, values);

    //     return res;
    // },

    // remove : async (values) => {

    //     if ( !values ) return null;

    //     let sql = "";
    //     sql += "  DELETE xeus.gis_lyr_style WHERE lyr_mgr_seq=$1;";
    //     sql += "  DELETE xeus.gis_lyr_list WHERE mgr_seq=$2; ";

    //     let res = await query(sql, values);

    //     return res;
    // }

}

