const express=require("express");
var  {inserted, selected, updated, deleted}  = require("../controller/knex_logic");
const router=express.Router();


router.post('/post1',inserted)
router.get("/select1",selected)
// router.get("/select1/:id",get_by_id)
router.put("/put1",updated)
router.delete("/delete1/:username",deleted)

module.exports = {router}