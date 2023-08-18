const app = require("./src/app");
const { notFoundHandler, globalErrorHandler } = require("./src/controllers/error.handler");

app.use([notFoundHandler,globalErrorHandler]);
app.listen(process.env.PORT||8080,()=>console.log(`\t http://localhost:8080/api/`))