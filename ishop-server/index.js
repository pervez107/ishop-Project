const mongoClient=require('mongodb').MongoClient;
var express=require('express');
var cors=require('cors');
require('dotenv').config();

var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

var connectionStr=process.env.MONGO_URL;

app.get('/products',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tblproducts').find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.get('/products/:id',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tblproducts').find({id:parseInt(req.params.id)}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.get('/categories',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tblcategories').find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.get('/categories/:category',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tblproducts').find({category: req.params.category}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.get('/getcustomers',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tblcustomers').find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.get('/getadmins',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        database.collection('tbladmins').find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        });
    });
});

app.post('/customerregister',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        var customer={
            UserId:req.body.UserId,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Password:req.body.Password,
            Gender:req.body.Gender,
            Email:req.body.Email,
            Mobile:req.body.Mobile,
            Address:req.body.Address
        };
        database.collection('tblcustomers').insertOne(customer).then(()=>{
            res.send('Customer Register Successfully.');
            res.end();
        });
    });
});

app.post('/adminregister',(req,res)=>{
    mongoClient.connect(connectionStr).then(clientObj=>{
        var database=clientObj.db('ishopdb');
        var admin={
            UserId:req.body.UserId,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Password:req.body.Password,
            Email:req.body.Email
        };
        database.collection('tbladmins').insertOne(admin).then(()=>{
            res.send('Admin Register successfully');
            res.end();
        });
    });
});
var port=process.env.PORT || 8080;
app.listen(port,()=>{console.log('server:-127.0.0.1:8080');});
