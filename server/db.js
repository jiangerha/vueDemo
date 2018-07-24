// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'qdm109009624.my3w.com',
//   user     : 'qdm109009624',
//   password : 'erha0805',
//   database : 'qdm109009624_db',
//   insecureAuth: true
// });

// connection.connect();
// // var  addSql = 'INSERT INTO userInfo(user_name,user_id,name,gender) VALUES("test2",?,?,?)';
// // var  addSqlParams = ['4', '大黑','1'];

// // connection.query(addSql,addSqlParams,function (err, result) {
// //   if(err){
// //    console.log('[INSERT ERROR] - ',err.message);
// //    return;
// //   }        

// //  console.log('--------------------------INSERT----------------------------');
// //  console.log('new:',result);        
// //  console.log('-----------------------------------------------------------------\n\n');  
// // });

// connection.query('select user_name from userInfo',function(error, results, fields) {
//   if (error) throw error;
//   results.forEach(function(element) {
//     console.log(element.user_name)
//   }, this);
// });

// var modSql = 'UPDATE test SET name = ?,descrip = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',1];
// //改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

// var delSql = 'DELETE FROM userInfo where user_id=4';
// //删
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// connection.end();


const express = require('express')
const app = express()
var mysql = require('mysql'), 
myConnection = require('express-myconnection'),
dbOptions = {
  host     : 'qdm109009624.my3w.com',
  user     : 'qdm109009624',
  password : 'erha0805',
  database : 'qdm109009624_db',
  insecureAuth: true
}

app.use(myConnection(mysql, dbOptions, 'single')