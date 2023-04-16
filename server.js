const express = require('express');
const auth_routes = require('./routes/auth_routes');
const users_routes = require('./routes/users_routes')

const app = express();
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

auth_routes.register_routes(app)
auth_routes.login_routes(app)
users_routes.create_users_routes(app)

app.listen(5000, () => {
  console.log('Server running on port 5000');
});