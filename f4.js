

var exLs = {
  fd001: { username: 'fcc_test_16993374739' },
  fd002: { username: 'fcc_test_16993374739' },
  fd012: {
    username: 'fcc_test_16993374740',
    count: 9,
    _id: 'fd012',
    log: [ 
      { description: 'test', duration: 60, date: '1989-12-30' },
      { description: 'test', duration: 60, date: '1989-12-31' },
      { description: 'test', duration: 60, date: '1990-01-01' },
      { description: 'test', duration: 60, date: '1990-01-02' },
      { description: 'test', duration: 60, date: '1990-01-03' },
      { description: 'test', duration: 60, date: '1990-01-04' },
      { description: 'test', duration: 60, date: '1990-01-05' }
]}}

var from = "1989-12-31"
var to = "1990-01-03"
var limit //  = "3"; 
var _id =  "fd012"

    from = (new Date(from)).getTime()
    to   = (new Date(to)  ).getTime()

    if     ( typeof(limit) === "undefined" ){
      limit =  exLs[_id]["log"].length
    } else { limit = parseInt(limit)}
    

    
    for ( i=0 ; i<exLs[_id]["log"].length ; i++ ) {
      var dateR = (new Date((exLs[_id]["log"][i]["date"]))).getTime() 
      
      if   ( dateR < from  ||  to < dateR || limit < 1 ) { continue}
      else {  console.log(  exLs[_id]["log"][i] )  ; limit --  }


    }