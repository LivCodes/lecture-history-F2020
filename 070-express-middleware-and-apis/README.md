### Building Reddit
- Put as much logic as possible in your server code
- Put as little logic as possible in your templates

## CRUD
- Create a post
- Read a post
- Update a post
- Delete a post

# Middleware
- Functions that execute 'in the middle' of the request response cycle

## How to write middleware
- `app.use(path, callback)`
- where the callback function is invoked after the request but before the route
- where the callback function has parameters `(req, res, next) => {}`

## Example of Middleware
- Logging
- Error checking and validation

### Tags
- Output tags `<%=`
- Control Flow tags (no output) `<%`







## Making APIs call on the backend
- More secure (hide API keys/details from the client)
- Avoid Cross Origin (CORS) complications
  - Most APIs are designed to be called from either the front or back end
  - But some only allow requests from the backend
  - A few APIs are designed to be called from the front end

## Fetching in Node
- Not included
- `npm install node-fetch`
