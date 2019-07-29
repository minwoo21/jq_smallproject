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
router.get('/jq_syntax', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_syntax.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_selector', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_selector.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_focus_blur', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_focus_blur.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_eventOn', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_eventOn.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_eventKey', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_eventKey.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_callback', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_callback.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_fade', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_fade.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_callback2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_callback2.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_slide', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_slide.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_animation', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_animation.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_tryslide', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_tryslide.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/jq_content_get', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/minwoo/jq_content_get.html'));
    //__dirname : It will resolve to your project folder.
    });
    router.get('/jq_set1', function (req, res) {
        res.sendFile(path.join(__dirname + '/views/minwoo/jq_set1.html'));
        //__dirname : It will resolve to your project folder.
        });
        router.get('/jq_set2', function (req, res) {
            res.sendFile(path.join(__dirname + '/views/minwoo/jq_set2.html'));
            //__dirname : It will resolve to your project folder.
            });
            router.get('/jq_trySetGet', function (req, res) {
                res.sendFile(path.join(__dirname + '/views/minwoo/jq_trySetGet.html'));
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
router.get('/syntax', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/syntax.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/selectormisc', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/selectormisc.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/focusandblur', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/focusandblur.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/eventon', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/eventon.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/eventkey', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/eventkey.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/jquerycallback', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jquerycallback.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/fade', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/fade.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/functioncallback', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/functioncallback.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/slide', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/slide.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/animation', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/animation.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/slideandstop', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/slideandstop.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/contentget', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/contentget.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/contentset', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/contentset.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/contentset02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/contentset02.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/project_setget', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/project_setget.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/append', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/append.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/css.html'));
    //__dirname : It will resolve to your project folder.
});

//----------------------BaekSeongHoon-----------------------------
router.get('/S_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/seonghoon/intro.html'));
    //__dirname : It will resolve to your project folder.
});




app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))