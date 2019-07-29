const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
    });

//-------------------kimminwoo------------------------------------ 
router.get('/jq_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_intro.html'));
    //__dirname : It will resolve to your project folder.
    });
    router.get('/manage', function (req, res) {
        res.sendFile(path.join(__dirname + '/views/manage.html'));
        //__dirname : It will resolve to your project folder.
        });
        

        
router.get('/login', function (req, res) {
    console.log(req.query);
        res.send('<h1>Request parmeters</h1>First name : '+ req.query.first +'<br>Last name : '
        + req.query.last + '<br>Username : '+ req.query.name+ '<br>City : '+ req.query.city
        + '<br>State : '+ req.query.state+ '<br>Zip : '+ req.query.zip);
    
    });

//-------------------choijungjin------------------------------------ 
router.get('/jquery', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jquery.html'));
    //__dirname : It will resolve to your project folder.
});






app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))