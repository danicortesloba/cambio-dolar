const callback = (err, res) => console.log("Error: ", err, "Result: ", res)

User.deleteMany({ id: message.from.id}, callback)



     users = User.find({ id: message.from.id }, callback);


}
