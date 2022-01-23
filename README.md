# image-processing-api

 Udacity Fullstack Nanodegree 1st Project.

 Develop API with node.js, Express, Typescript, and Jasmine

 For making thumbnail with sharp for resizing and filesystem for caching.



### How to use the project

1. `npm install` - init the node modules files.
2. `npm run start:dev` - runing the server in development.
3. `npm run start:production` - runing the server in production.
4. `npm run test` - runing Jasmine Tests.



## API Endpoint

### `/?imageName=<image_name>&width=<image_width>&height=<image_height>`

### Query parameters
- `imageName`.
Udacity Images
1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

- `width`.
- `height`. 

### example

app running at port 5000 

http://localhost:5000/?imageName=palmtunnel&width=800&height=900


