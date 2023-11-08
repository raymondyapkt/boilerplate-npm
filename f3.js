

let exLs = {
  "fd001": { "username": 'fcc_test_16993219380' },
  "fd002": {
    username: 'fcc_test_16993219380',
    count: 1,
    _id: 'fd002',
    log: [  { "description": 'des', "duration": '59', "date": 'Mon Jan 01 1990' }  ]
  },
  "fd003": { "username": 'fcc_test_16993219480' },
  "fd004": { "username": 'fcc_test_16993219530' },
  "fd005": { "username": 'username1' },
  "fd006": { "username": 'username1' },
  "fd007": { "username": 'username1' },
  "fd008": { "username": 'username1' }
}
 var _id =   "fd002"



var log = { 'description': "des1",
            'duration'   : "40" ,
            'date'       : "Mon Feb 01 1990", 

}

if ("log" in exLs[_id] ) {
exLs[_id]["log"].push(log)
exLs[_id]["count"] ++
console.log( exLs[_id]["log"] ) 
} else { 
exLs[_id]["count"] = 1; 
exLs[_id]["_id"] = _id 
exLs[_id]["log"] = [log]
console.log( exLs[_id]["log"] ) 
}

console.log ( exLs)