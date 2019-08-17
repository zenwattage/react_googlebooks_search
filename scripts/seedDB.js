const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["Jon Krakauer"],
    description: "In 1997, Krakauer expanded his September 1996 Outside article into what has become his best-known book, Into Thin Air. The book describes the climbing parties' experiences and the general state of Everest mountaineering at the time. Hired as a journalist by the magazine, Krakauer had participated as a client of the 1996 Everest climbing team led by Rob Hall—the team which ended up suffering the greatest casualties in the 1996 Mount Everest disaster.",
    image: "https://books.google.com/books/content?id=gt7EQgH8-b4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73Sm6p6o5zbekkKVSGV82qT82NigY5nhAOpNGlKleTldbzA1-_eFpNVpYfenZOwqvleVwTlvJG9_Zq4cLV_cbk6OWwwdXa7zRobOeQIoHQ2hNnzXSk86nHybsY5FbIuw-is0aDK",
    link: "https://books.google.com/books?id=gt7EQgH8-b4C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false",
    title: "Into Thin Air",
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertOne(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });