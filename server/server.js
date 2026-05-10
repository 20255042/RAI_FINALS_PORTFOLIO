const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://20255042_db_user:Oq0F0HCGibGQ8U02@ac-l6r4z7a-shard-00-00.kcnr5t2.mongodb.net:27017,ac-l6r4z7a-shard-00-01.kcnr5t2.mongodb.net:27017,ac-l6r4z7a-shard-00-02.kcnr5t2.mongodb.net:27017/apptech?ssl=true&replicaSet=atlas-14jc52-shard-0&authSource=admin&appName=Admin")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
  console.log("MongoDB Error:", err);
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("message", contactSchema, "message");


app.post("/contacts", async (req, res) => {
  try {
    const user = await Contact.create(req.body);
    res.json({
      message: " User Feedback submitted successfully!",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET CONTACTS
app.get("/contacts", async (req, res) => {

  const contacts = await Contact.find();

  res.json(contacts);

});

// DELETE CONTACT
app.delete("/contacts/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);

  res.json({message: "Deleted Successfully"});
});

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {console.log("Server running on port 5000");

});
