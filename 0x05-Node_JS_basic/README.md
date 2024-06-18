# Full Server with Express

This project demonstrates how to create a full-featured HTTP server using Express.js, structured in a maintainable way by organizing code into controllers, routes, and utility modules. The server handles HTTP requests for retrieving and displaying student information from a CSV file.

## Directory Structure

The project is organized as follows:

```
full_server/
│
├── controllers/
│   ├── AppController.js
│   └── StudentsController.js
│
├── routes/
│   └── index.js
│
├── utils.js
│
├── server.js
│
├── database.csv
│
└── package.json
```

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/alx-backend-javascript.git
    cd alx-backend-javascript/0x05-Node_JS_basic/full_server
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm run dev
    ```

4. **Testing endpoints**:
    Use `curl` or any HTTP client to test the server endpoints.

## Endpoints

- **GET /**: Returns a welcome message.
    ```bash
    curl localhost:1245
    ```

- **GET /students**: Returns a list of all students grouped by their fields.
    ```bash
    curl localhost:1245/students
    ```

- **GET /students/:major**: Returns a list of students in a specific major (CS or SWE).
    ```bash
    curl localhost:1245/students/CS
    curl localhost:1245/students/SWE
    ```

## File Descriptions

### utils.js

Contains utility functions for the server.

- **readDatabase(filePath)**: Reads the CSV file asynchronously and returns a promise. Resolves with an object containing student names grouped by their field.

### controllers/AppController.js

Contains the `AppController` class.

- **getHomepage(req, res)**: Returns a status 200 and the message "Hello Holberton School!".

### controllers/StudentsController.js

Contains the `StudentsController` class.

- **getAllStudents(req, res)**: Returns a list of all students grouped by field. Uses `readDatabase` to fetch data.
- **getAllStudentsByMajor(req, res)**: Returns a list of students in a specified major (CS or SWE). Uses `readDatabase` to fetch data.

### routes/index.js

Defines the routes for the application.

- **/**: Linked to `AppController.getHomepage`.
- **/students**: Linked to `StudentsController.getAllStudents`.
- **/students/:major**: Linked to `StudentsController.getAllStudentsByMajor`.

### server.js

Sets up and starts the Express server.

- Imports routes from `routes/index.js`.
- Uses port 1245.
- Exports the app instance for testing.

### database.csv

Contains sample data for students.

## Running Tests

The project uses `Jest` for testing. Run tests using:
```bash
npm run test
```

## Linting

Ensure your code follows best practices and style guides using `ESLint`:
```bash
npm run lint
```

## Development

For development, the project uses `nodemon` with `babel-node` to support ES6+ syntax:
```bash
npm run dev
```

## Example Data

`database.csv` contains sample student data:
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note**: Ensure you have Node.js version 12.x.x and npm installed. The server uses ES6+ features and requires Babel for transpilation.
