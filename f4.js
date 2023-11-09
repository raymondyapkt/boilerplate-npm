
var exLs = {
  fd001: { username: 'fcc_test_16993374739' },
  fd003: { username: 'fcc_test_16993374739' },
  fd002: {
    username: 'fcc_test_16993374740',
    count: 7,
    _id: 'fd002',
    log: 
    [{"description":"descr1*","duration":59,"date":"Mon Jan 01 2001"},
    {"description":"descr1*","duration":59,"date":"Tue Jan 02 2001"},
    {"description":"descr1*","duration":59,"date":"Wed Jan 03 2001"},
    {"description":"descr1*","duration":59,"date":"Thu Jan 04 2001"},
    {"description":"descr1*","duration":59,"date":"Fri Jan 05 2001"},
    {"description":"descr1*","duration":59,"date":"Sat Jan 06 2001"},
    {"description":"descr1*","duration":59,"date":"Sun Jan 07 2001"}
  ]}}

var xfrom = "1990-01-02"
var xto = "1990-01-06"
var limit  // = "5"; 
var _id =  "fd002"
var count = 0 

    dfrom = (new Date(from)).getTime()
    dto   = (new Date(to)  ).getTime()

    if     ( typeof(limit) === "undefined" ){
      count =  exLs[_id]["log"].length
    } else { count = parseInt(limit)}
    
    var  tempLogs = {}
    
    tempLogs["username"] = exLs[_id]["username"]
    tempLogs["count"]    = exLs[_id]["count"]
    tempLogs["_id"]      = exLs[_id]["_id"]
    tempLogs["log"]      = []
    
    for ( i=0 ; i<exLs[_id]["log"].length ; i++ ) {
      var dateR = (new Date((exLs[_id]["log"][i]["date"]))).getTime() 
      
      if   ( dateR < dfrom  ||  dto < dateR  ) { continue}
      else {  

        tempLogs["log"].push(exLs[_id]["log"][i])
        limit --  }
    }

   console.log(  tempLogs )

    // http://127.0.0.1:3000/api/users/fd002/logs?from=2001-01-02&to=2001-01-06
    // http://127.0.0.1:3000/api/users/fd012/logs?from=2001-01-01&to=2001-01-04

    // http://127.0.0.1:3000/api/users/fd012/logs?from=1989-12-31&to=1990-01-04&limit=1
    // http://127.0.0.1:3000/api/users/fd012/logs?from=1990-01-02&to=1990-01-04&limit=1


    // fccheader parser 
