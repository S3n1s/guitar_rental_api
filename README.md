# crud.api_nodejs# User CRUD
This project is a user CRUD from a Back End challenge of Dataside

## Project Setup

- *Requirements:*
    - Node: (^22.12.0)
    - MongoDB Comunity: (^8.0.4)
- *Run MongoDB:*
    - Create data directory on locale of yout preference
    - run mongod --dbpath <path to data directory>
- *Install Dependences:*
    - npm install
- *Start Development Serve:*
    - run npm start
    - server will run on [http://localhost:5000/](http://localhost:5000/)

## Project Structure

**|server.js      # Main file to start the server**  
**|-/config       # Database configuration**  
**|-/controllers  # Endpoint logic**  
**|-/db           #**  
**|-/middleware   # Authentication and validation middleware**    
**|-/routes       # Route definition**  
**|-/models       # Modelos de dados (Mongoose)**    

## Routes


- **Create User:** 
  - Method: `POST`
  - URL: `HTTP://localhost:5000/api/auth/register`
  - Body: (Select `raw` and `JSON`)

```
json

{
  "name": "Fulano"
  "email": "fulano@example.com"
  "password": "senha@123"
  "dateOfBirth": "1967-07-01"
}
```
'''

**- Example Response:**


```
json

{
    "message": "Usuário registrado com sucesso!"
}
```
- **User Login**
  -  Method: `Post`
  -  URL: `HTTP://localhost:5000/api/auth/login`
  - Body: (Select `raw` and `JSON`)


```
json

{
   "email":"fulano@example.com",
    "password": "senha@123"
}

```

**- Example Response:**

```
json

{
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTc2MjE3MmJmODA0ZThiOWM3MjQ4YyIsImlhdCI6MTczMzc4NTEzOCwiZXhwIjoxNzMzODcxNTM4fQ.x7cxlFOsmjuugQjDdneFObwzpXAxe7tGA4Z6YuVUpJY",
    "user": {
        "_id": "675762172bf804e8b9c7248c",
        "name": "fulano",
        "email": "fulano@example.com",
        "dateOfBirth": "1967-07-01",
 }
}
}
```
- **List All Users:**
  - Method: `GET`
  - URL: ``HTTP://localhost:5000/api/users/list``
  
**- Example Response:**
  
```
json

 {  
     "_id": "675762172bf804e8b9c7248c",
        "name": "fulano",
        "email": "fulano@example.com",
        "dateOfBirth": "1967-07-01",


      "_id": "675762172df404a8b9c257D",
        "name": "fulano2",
        "email": "fulano2@example.com",
        "dateOfBirth": "1967-07-02",       
}
```
  -**NOTES**:  
    -The response includes a *JWT token* for use on protected endpoints.  
		-Use the token in protected requests by passing the header as ``Authorization: Bearer <token>.``
	

-**Search user with ID:** 
  - Method: `GET`
  - URL: `HTTP://localhost:5000/api/users/:ID`
   - Replace `:id` with your user ID.
  - Body: (Select `raw` and `JSON`)

```
json

{ 
    "_id": "675762172bf804e8b9c7248c",
    "name": "fulano",
    "email": "fulano@example.com",
    "dateOfBirth": "1967-07-01",
}
```
-**Partial User Update**
 - Method: `PATCH`
 - URL: `HTTP://localhost:5000/api/users/:id`
   - Replace `:id` with your user ID.
 - Body: (Select `raw` and `JSON`)

```
json

{
  "email": "newemail@example.com"
}
 ```
  **- Example Response:**
```
json

{
"_id": "675762172bf804e8b9c7248c",
    "name": "fulano",
    "email": "newemail@example.com",
    "dateOfBirth": "1967-07-01",
}
```
- **Delete User**
 - Method:`Delete`
 - URL: `HTTP://localhost:5000/api/users/:id`
   - Replace `:id` with your user ID.

**- Example Response:**
```
json

{
"usuário deletado"
}

```

