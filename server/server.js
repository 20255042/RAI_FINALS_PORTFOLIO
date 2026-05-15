
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGODB CONNECTION
mongoose
  .connect(
"mongodb://20255042_db_user:Oq0F0HCGibGQ8U02@ac-l6r4z7a-shard-00-00.kcnr5t2.mongodb.net:27017,ac-l6r4z7a-shard-00-01.kcnr5t2.mongodb.net:27017,ac-l6r4z7a-shard-00-02.kcnr5t2.mongodb.net:27017/apptech?ssl=true&replicaSet=atlas-14jc52-shard-0&authSource=admin&appName=Admin"  )

  .then(() => {
    console.log("MongoDB Connected");
  })

  .catch((error) => {
    console.log("MongoDB Error:", error);
  });

// SCHEMA
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// MODEL
const Contact = mongoose.model(
  "contacts",
  contactSchema,
  "contacts"
);

// TEST ROUTE
app.get("/", (req, res) => {

  res.send("Server Running");

});

// SAVE CONTACT MESSAGE
app.post("/contact", async (req, res) => {

  try {

    const contact =
      await Contact.create(req.body);

    res.json({
      message:
        "Message submitted successfully!",
      contact,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

});

// GET ALL CONTACTS
app.get("/contacts", async (req, res) => {

  try {

    const contacts =
      await Contact.find();

    res.json(contacts);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

});

// DELETE CONTACT
app.delete(
  "/contacts/:id",
  async (req, res) => {

    try {

      await Contact.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Message deleted successfully!",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

// START SERVER
app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});