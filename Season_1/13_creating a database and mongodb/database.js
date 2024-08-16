// password for database connection = zDiFnAld679jUSGx

// connection url - mongodb+srv://ankitsingh79834:zDiFnAld679jUSGx@cluster0.e58nx.mongodb.net/


// mongodb+srv://ankitsingh79834:zDiFnAld679jUSGx@cluster0.e58nx.mongodb.net/

const {MongoClient} = require("mongodb")

// const URI = "mongodb+srv://ankitsingh79834:zDiFnAld679jUSGx@cluster0.e58nx.mongodb.net/"

const url = "mongodb+srv://ankitsingh79834:zDiFnAld679jUSGx@cluster0.e58nx.mongodb.net/"

const client = new MongoClient(url)

const dbName = "helloworld";

async function main(){
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName)
    const collection = db.collection('user')

    // insert the data
    // const data = {
    //     firstname:"deepika",
    //     lastname:"padukone",
    //     city:"mumbai",
    //     phonenumber:"12983489347"

    // }
    // const data = {
    //     firstname:"ranveer",
    //     lastname:"singh",
    //     city:"mumbai",
    //     phonenumber:"12983489347"

    // }

    // const insertResult = await collection.insertOne(data)

    // const insertResult = await collection.insertMany([data])

    // Read  from database
    const findResult = await collection.find({}).toArray();
    console.log("found documents:=>",findResult)

    // const countresult = await collection.countDocuments({})
    // console.log(countresult)

//find all documents with filter deepika
    // const result = await collection.find({firstname:"deepika"}).toArray(); //find returns a cursor, hence it is must to convert it to array, 
    // // why cursor - coz its easy to join and chaining of methods with cursor
    // console.log(result)

    return "done"
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close())



//NOtEs:
//steps to get the URI(connection string)
// go to mongodb website
// create a free M0 cluster
// create a user
// get the connection string

//then install mongodb compass
