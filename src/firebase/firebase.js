import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase,database as default}; 


/*
database.ref().set({
    name:"ivan",
    age: 28,
    stressLevel: 6,
    job: {
        title: "Developer",
        company: "google"
    },
    location:{
        city: "Zagreb",
        country:"Croatia"
    }
}).then(()=>{
    console.log("Saved");
}).catch((error)=>{
    console.log("errorr", error);
});


database.ref("isSingle")
    .remove()
    .then(()=>{
        console.log("Data removed");
    })
    .catch((e)=>{
        console.log("Not removed",e);
    });

database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city":"Seatle"
});

database.ref()
    .once("value")
    .then((snapshot)=>{
        const value = snapshot.val();
        console.log(value);
    })
    .catch((e)=>{
        console.log("Error while fetching");
    });

const onValuechange = database.ref()
    .on("value",(snapshot)=>{
        console.log(snapshot.val());
    }, (e)=>{
        console.log("Error while fetching");
    });

setTimeout(()=>{
    database.ref("age").set(29);
}, 3000);

setTimeout(()=>{
    database.ref().off(onValuechange);
}, 6000);

setTimeout(()=>{
    database.ref("age").set(89);
}, 9000);




const notes = [{
    id: "12",
    title:"First",
    body: "My note"
},{
    id: "13",
    title:"Second",
    body: "My second note"
}];

//database.ref("note").set(notes);
/*
database.ref("notes").push({
    id: "12",
    title:"First",
    body: "My note"
});


//database.ref("notes/-L7B7JDLoTt-XKQkPBN8").update({body:"new"});
database.ref("notes/-L7B7JDLoTt-XKQkPBN8").remove();
*/