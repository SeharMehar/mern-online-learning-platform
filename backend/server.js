const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);