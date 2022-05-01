const mysql = require('mysql');
const SqlString = require('mysql/lib/protocol/SqlString');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'medfast'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
  connection.query('insert into buyer(name,pass,phoneNo,email) values("haris", "1234" , "9384","hjasf@SqlString.com")',(err,res)=>{
    return console.log(res)
  })
});
//export default mysql;
function insertbuyer(arg1,arg2,arg3,arg4){
    connection.query('INSERT INTO buyer (name,pass,phoneNo,email) VALUES ('+tempusername+','+temppassword+','+tempmobilenum+','+tempemail+')');
    console.log("inserted value in Database\n")
}
