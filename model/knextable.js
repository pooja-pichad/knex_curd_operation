const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Pooja@123',
      database: 'mydata'
  }
})



function create(){
    return knex.schema.createTable("knextable", function (t) {
        t.increments("id").primary();
        t.string("username", 255);
        t.string("password", 255);
        t.string("email", 255);
      })
    .then(()=>{
        console.log("table created")
    }).catch((err)=>{
        console.log("already exist")
    })
  }
  // create()
module.exports=knex


