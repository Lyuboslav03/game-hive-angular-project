# REST-api for Angular course in SoftUni

## Getting started
Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

```https://localhost:3000/api/test```

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular course workshop in SoftUni",
    "main": "index.js",
}
```

If your response looks slightly different don't panic. This is probably because more data has been added to the API since I made this documentation.

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. You can use the connected REACT-app to make registration and sign in. This also means that I've limited what you can do. If you find a mistake, then just write an issue.

# Endpoints: Users

* ```/register``` -- signing up;
* ```/login``` -- signing in;
* ```/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/register```

### Method --> ```POST```

### Body -->

```
{
    "username":"Johny",
    "email":"john@email.com",
    "password":"12345",
    "rePassword":"12345"
}
```

Required:

```username``` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

```email``` : [string] -- The email of the person is required and must be unique;

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

### Success Response:

Code: 200

Content: 
``` 
{
    "games": [],
    "_id": "5f1875690916010017964978",
    "email": "john@email.com",
    "username": "Johny",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

### Error Response:

Code: 409 CONFLICT

Content: 
```
{
    "message": "This email/username is already registered!"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/login```

### Method --> ```POST```

### Body -->

```
{
    "email":"john@egmail.com",
    "password":"12345"
}
```

Required:

```email``` : [string] -- The email of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    "games": ["5f85c51996b5601b2406e5b7"],
    "_id": "5f1875690916010017964978",
    "email": "john@email.com",
    "username": "Johny",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{ 
    "message": "Wrong username or password"
}
```

## Logout User
Logout user.

### URL --> ```/logout```

### Method --> ```POST```

### Success Response:

Code: 401 Unauthorized

Content: 
``` 
{ 
    "message": "Logged out!"
}
```

# Endpoints: Games

* ```/games```
* ```/games/:gameId```

## Get Games
Returns all games as json.

### URL --> ```/games```

### Method --> ```GET```

### Success Response:

Code: 200

Content: 
``` 
[
    {
        "comments": ["5f8580d25d1da62568dd38fd"],
        "_id": "5f858dd2d895ad23602db9d4",
        "title": "Some Title",
        "genre": "Some Genre",
        "price": "Some Price",
        "gamemode": "Some Gamemode",
        "imageUrl": "Some imageUrl",
        "year": "Some Year",
        "programmer": "Some Programmer",
        "description": "Some Description",
        "userId": "5f8580d25d1da62568dd38fd",
        "created_at": "2020-10-13T11:21:54.863Z",
        "updatedAt": "2020-10-13T11:21:54.898Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Post Game
Creates new game with the first post of the author and returns the game as json.

### URL --> ```/games```

### Method --> ```POST```

### Body -->

```
{
    "title": "Some Title",
    "genre": "Some Genre",
    "price": "Some Price",
    "gamemode": "Some Gamemode",
    "imageUrl": "Some imageUrl",
    "year": "Some Year",
    "programmer": "Some Programmer",
    "description": "Some Description",
}
```

Required:

```title``` : [string] -- The title of your new game

```genre``` : [string] -- The genre of your new game

```price``` : [number] -- The price of your new game

```gamemode``` : [string] -- The gamemode of your new game

```imageUrl``` : [string] -- The imageUrl of your new game

```year``` : [number] -- The year of your new game

```programmer``` : [string] -- The programmer of your new game

```description``` : [string] -- The description of your new game

### Success Response:

Code: 200

Content: 
``` 
{
   "comments": [],
    "_id": "660db4ade717163bfcd79e16",
    "title": "Some title",
    "genre": "Some genre",
    "price": "Some price",
    "gamemode": "Some gamemode",
    "imageUrl": "Some imageUrl",
    "year": "Some year",
    "description": "Some description",
    "programmer": "Some programmer",
    "userId": "66073afacead863f4c6faf55",
    "createdAt": "2024-04-03T19:57:33.855Z",
    "updatedAt": "2024-04-03T19:57:33.855Z",
    "__v": 0
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Edit Game
Edits game if the user is the author of the game and returns the updated game.

### URL --> ```/games/:gameId```

### Method --> ```PUT```

### Success Response:

Code: 200

Content:
```
{
    "comments": [],
    "_id": "660db578e717163bfcd79e28",
    "title": "Some title",
    "genre": "Some genre",
    "price": "Some price",
    "gamemode": "Some gamemode",
    "imageUrl": "Some imageUrl",
    "year": "Some year",
    "description": "Some description",
    "programmer": "Some programmer",
    "userId": "66073afacead863f4c6faf55",
    "createdAt": "2024-04-03T20:00:56.958Z",
    "updatedAt": "2024-04-03T20:00:56.958Z",
    "__v": 0
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Delete Game
Deletes game if the user is the author of the game and returns the deleted post.

### URL --> ```/games/:gameId```

### Method --> ```DELETE```

### Success Response:

Code: 200

Content: 
``` 
{
    "comments": [],
    "_id": "660db4ade717163bfcd79e16",
    "title": "Some title",
    "genre": "Some gengre",
    "price": "Some price",
    "gamemode": "Some gamemode",
    "imageUrl": "Some imageUrl",
    "year": "Some year",
    "description": "Some description",
    "programmer": "Some programmer",
    "userId": "66073afacead863f4c6faf55",
    "createdAt": "2024-04-03T19:57:33.855Z",
    "updatedAt": "2024-04-03T19:57:33.855Z",
    "__v": 0
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```
