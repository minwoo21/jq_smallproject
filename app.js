const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
    //__dirname : It will resolve to your project folder.
    });

//-------------------kimminwoo------------------------------------ 

    router.get('/manage', function (req, res) {
        res.sendFile(path.join(__dirname + '/manage.html'));
        //__dirname : It will resolve to your project folder.
        });
        

        
router.get('/success', function (req, res) {
    // console.log(req.query);
    //     res.send('<h1>Request parmeters</h1>First name : '+ req.query.first +'<br>Last name : '
    //     + req.query.last + '<br>Username : '+ req.query.name+ '<br>City : '+ req.query.city
    //     + '<br>State : '+ req.query.state+ '<br>Zip : '+ req.query.zip);
    
    });

//-------------------choijungjin------------------------------------ 







app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))