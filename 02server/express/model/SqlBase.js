class SqlBase {
  constructor() {
    let mysql = require("mysql"); //调用MySQL模块

    //1，创建一个connection
    this.connection = mysql.createConnection({
      host: "localhost", //主机 ip
      user: "root", //MySQL认证用户名
      password: "324423sql", //MySQL认证用户密码
      port: "3306", //端口号
      database: "youdao" //数据库里面的数据
      //就在老师的online里面建表 我们访问就OK

    });
    //2,连接
    this.connection.connect();
  }
}

module.exports = SqlBase;
