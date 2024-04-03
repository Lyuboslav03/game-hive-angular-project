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

# Endpoints: Themes

* ```/games```
* ```/games/:gameId```

## Get Games
Returns all themes as json.

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
Creates new Theme with the first post of the author and returns the theme as json.

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

```title``` : [string] -- The Title of your new Game, which you want to create
```postText``` : [string] -- The text of your post. This post will be append as first comment on your Theme.

### Success Response:

Code: 200

Content: 
``` 
{
    "subscribers": ["5f86c1f0a112c130e89964af"],
    "posts": ["5f86c38abfa44331a0ff0094"],
    "_id": "5f86c38abfa44331a0ff0093",
    "themeName": "Some Theme Title",
    "userId": "5f86c1f0a112c130e89964af",
    "created_at": "2020-10-14T09:23:22.102Z",
    "updatedAt": "2020-10-14T09:23:22.114Z",
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

## Delete Game
Deletes Game if the user is the author of the post and returns the deleted post.

### URL --> ```/games/:gameId```

### Method --> ```DELETE```

### Success Response:

Code: 200

Content: 
``` 
{
    "likes": [],
    "_id": "5f86c3fcbfa44331a0ff0095",
    "text": "Changed text",
    "userId": "5f86c1f0a112c130e89964af",
    "themeId": "5f85c51996b5601b2406e5b7",
    "created_at": "2020-10-14T09:25:16.203Z",
    "updatedAt": "2020-10-14T09:33:56.595Z",
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

<!-- users
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info

games
.get /games - lists all themes
.post /games - create new game only for registered users


<!-- http://localhost:3000/api/register --  {"name":"SomeName","email":"some@email.com","username":"someUsername","password":"12345","rePassword":"12345"} -->
<!--http://localhost:3000/api/games -- {"themeName":"Some Theme", "userId":"5f85bf709a517d36f4abe656", "post": "Some Post" } -->
<!-- http://localhost:3000/api/games/5f858dd2d895ad23602db9d4  -- {"userId":"5f8580d25d1da62568dd38fd", "postText": "Some Post textsdfasdf" } -->
