const express=require('express') ;
const cors=require('cors');
require('dotenv').config();
const app=express();
const port=process.env.PORT ||5000;

// --------MIDDLE WARE-------
app.use(cors());
app.use(express.json());

// shahsutanjoy
// TKSXn4mNR28tTu7D




// --------------Mongo db   --------//


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xs0uqtx.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // ------------- connect database and access -------------
    const coffeeCollection=client.db('coffeeDB').collection('coffee');



// ---------  get method data  -----------

app.get('/coffee',async(req,res)=>{
  const cursor=coffeeCollection.find();
  const result=await cursor.toArray();
  res.send(result);
})

app.get('/coffee/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=await coffeeCollection.findOne(query);
  res.send(result);
})

// --------post form data------------------
app.post('/coffee',async(req,res)=>{
  const newCoffee=req.body;
  console.log(newCoffee)
  const result=await coffeeCollection.insertOne(newCoffee);
  res.send(result);
})


//--------------- update put------------

app.put('/coffee/:id',async(res,req)=>{
  const id = req.params.id;
  const filter={_id:new ObjectId(id)}
  const options={upsert:true};
  const updatedCoffee=req.body;
  const coffee={
    $set:{
     name :updatedCoffee.name,
      quantity :updatedCoffee.quantity,
       supplier :updatedCoffee.supplier,
        taste :updatedCoffee.taste,
         category :updatedCoffee.category,
         details :updatedCoffee.details,
          photo :updatedCoffee.photo
    }
  }

  const result=await coffeeCollection.updateOne(filter,coffee,options)
  res.send(result);

})

// ===============delete opration=======================
app.delete('/coffee/:id', async(req,res)=>{
  const id=req.params.id;
  const query={_id: new ObjectId(id)}
  const result =await coffeeCollection.deleteOne(query)
  res.send(result);
})

    //============ Send a ping to confirm a successful connection===========
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


// -------------------------------//

app.get('/',(req,res)=>{
    res.send('coffee making serve is running')
})
app.listen(port,()=>{
    console.log(`coffie sever is runnuing on port: ${port}`)
});


