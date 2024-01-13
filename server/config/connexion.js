const { connect } = require("mongoose");
const { MONGO_URL } = require("dotenv").config().parsed
const connectingToMongo = () => {
  connect(MONGO_URL)
    .then(() => console.log("connection good withe mongodb *_*"))
    .catch((err) => console.log(err));
};
connectingToMongo()
