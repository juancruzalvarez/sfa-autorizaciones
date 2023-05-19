const path = require('path');
const os = require("os");
const express = require('express') ;
const session = require('express-session') ;
const genFunc = require('connect-pg-simple') ;
const fileUpload = require('express-fileupload');
const uid = require('uid');
const db = require('./queries') ;

const PostgresqlStore = genFunc(session);
const sessionStore = new PostgresqlStore(
    {
        conString: 'postgres://alvarez:test@localhost:5432/iosfa',
    }
);

const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : os.tmpdir(),
}));

app.use(
    session(
        {
            secret: 'secret',
            resave: false,
            saveUninitialized: false,
            cookie: {maxAge: 1000*60*60*8, httpOnly:false}, // define cookieOptions
            store: sessionStore
        }
    )
);

app.get('/', (req, res, next) => {
});

app.post('/login', async (req, res, next) => {
    //req.body.email && req.body.password are required;
    if(!req.body.mail || !req.body.password){ 
        res.json({err:'missing data in login.'}).end();
        return;
    }
    const found = await db.query("SELECT id FROM users WHERE mail = $1 AND password = $2;", [req.body.mail, req.body.password]);
    
    if(found.rows.length <= 0) {
        res.json({err:'user or password wrong!'}).end();
        return;
    }
    req.session.usr = found.rows[0]['id'];
    console.log(found);

    res.json({err:null}).end();
});

app.post('/cargar', async (req, res, next) => {
    if(!req.session.usr){
        res.json({err:'Not Logged IN!'}).end();
        return;
    }
    res.json({err:'Logged IN!'}).end();
})


app.post('/test', async (req, res, next) => {
    if (!req.files) {
        next()
    }
    else {
       //for uploading mutiple images
       var uploadedFiles = []
       // images is a field name
       uploadedData = req.files.fefe
       console.log(uploadedData)
       for (let i = 0; i < uploadedData.length; i++) {
            const uid = ui
            const uploadPath = path.join(__dirname, '..', '/uploads/', 
            uploadedData[i].name) 
            const fileName = path.join(__dirname, '..', '/uploads/', 
            uploadedData[i].name) 
            uploadedFiles.push(fileName)
                        
            uploadedData[i].mv(uploadPath, function (err) {
                if (err) {
console.log(err)                }
            })
        }
        res.json({f:'ok'});

    }
});

       /*
       if(uploadedData.length > 1){
          for (let i = 0; i < uploadedData.length; i++) {
             const uploadPath = path.join(__dirname, '..', '/uploads/', 
                uploadedData[i].name) 
             const fileName = path.join(__dirname, '..', '/uploads/', 
                uploadedData[i].name) 
             uploadedFiles.push(fileName)
                            
             uploadedData[i].mv(uploadPath, function (err) {
               if (err) {
                  res.send(err); return;
                }
             })
          }
       }
       else{
         // for single image
         const uploadPath = path.join(__dirname, '..', '/uploads/', uploadedData.name) 
         const fileName = path.join(__dirname, '..', '/uploads/', uploadedData.name) 
         uploadedFiles.push(fileName)
         uploadedData.mv(uploadPath, function (err) {
           if (err) {
              res.send(err); return;
            }
         })
      }
     }
})*/

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})