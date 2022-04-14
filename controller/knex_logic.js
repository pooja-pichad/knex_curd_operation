// const req = require("express/lib/request");

const knex = require("../model/knextable");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request")


const inserted = (req,res) => {
    console.log(req.body);
    const data =
    {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    console.log(data);
    knex('knextable').insert(data).then(() => {
        res.send({message: "data post succefully"})
        console.log("data inserted")})
            .catch((err) => { console.log(err) })
}


const selected=(req,res)=>{
    knex("knextable").select("*")
    .then((data)=>{
        res.send({message:'data select',data:data})
    })

}

const updated=(req,res) =>{
knex.select('*').from("knextable").where("username",req.body.username)
.update({   username:req.body.username,
            // password:req.body.password,
            //  email:req.body.email
            })
.then(()=>{
    // console.log(username)
    res.send("data updated")
}).catch((err)=>{
    console.log(err)
})
}


const deleted=(req,res)=>{
    knex.delete("*").from("knextable").where("id","=",req.params.id)
    .then((data)=>{
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"no delete"})
        console.log(err)
    })
}


module.exports = { inserted, 
                 selected ,
                updated ,
                deleted,
                 }
