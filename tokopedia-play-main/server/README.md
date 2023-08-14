# API Structure

| Title                                                                      | Endpoint                                   | Method |
| -------------------------------------------------------------------------- | ------------------------------------------ | ------ |
| [Get Video List](#get-apivideos)                                           | `/api/videos`                              | GET    |
| [Get Comments List](#get-apicomments)                                      | `/api/comments`                            | GET    |
| [Get Products List](#get-apiproducts)                                      | `/api/products`                            | GET    |
| [Get Specific Video](#get-apivideosvideoid)                                | `/api/videos/:videoId`                     | GET    |
| [Get Video Comments](#get-apivideosvideoidcomments)                        | `/api/videos/:videoId/comments`            | GET    |
| [Get Video Products](#get-apivideosvideoidproducts)                        | `/api/videos/:videoId/products`            | GET    |
| [Get Specific Video Product](#get-apivideosvideoidproductsproductid)       | `/api/videos/:videoId/products/:productId` | GET    |
| [Create New Video](#post-apivideos)                                        | `/api/videos`                              | POST   |
| [Post Video Comment](#post-apivideosvideoidcomments)                       | `/api/videos/:videoId/comments`            | POST   |
| [Post Video Product](#post-apivideosvideoidproducts)                       | `/api/videos/:videoId/products`            | POST   |
| [Update Specific Video](#put-apivideosvideoid)                             | `/api/videos/:videoId`                     | PUT    |
| [Update Specific Video Product](#put-apivideosvideoidproductsproductid)    | `/api/videos/:videoId/products/:productId` | PUT    |
| [Delete Specific Video](#delete-apivideosvideoid)                          | `/api/videos/:videoId`                     | DELETE |
| [Delete Specific Video Product](#delete-apivideosvideoidproductsproductid) | `/api/videos/:videoId/products/:productId` | DELETE |

# API Requests and Responses

#Videos

- Video object

```
{
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
}
```

## **GET /api/videos**

Returns all videos in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
  items: [
          {<video_object>},
          {<video_object>},
          {<video_object>}
         ]
}
```

#Comments

- Comment object

```
{
  id: string
  username: string
  comment: string
  createdAt: datetime(iso 8601)
}
```

## **GET /api/comments**

Returns all comments in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
  items: [
          {<comment_object>},
          {<comment_object>},
          {<comment_object>}
         ]
}
```

#Products

- Product object

```
{
  id: string
  title: string
  price: number
  imageUrl: string
  productUrl: string
}
```

## **GET /api/products**

Returns all products in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
  items: [
          {<product_object>},
          {<product_object>},
          {<product_object>}
         ]
}
```

## **GET /api/videos/:videoId**

Returns the specified video.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  item: {<video_object>}
}
```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no videos found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "invalid video ID format"
    }
  }
  ```

## **GET /api/videos/:videoId/comments**

Returns all Comments associated with the specified video.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  items: [
          {<comment_object>},
          {<comment_object>},
          {<comment_object>}
         ]
}
```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no videos found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "invalid video ID format"
    }
  }
  ```

## **GET /api/videos/:videoId/products**

Returns all Products associated with the specified video.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  items: [
          {<product_object>},
          {<product_object>},
          {<product_object>}
         ]
}
```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no videos found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "invalid video ID format"
    }
  }
  ```

## **GET /api/videos/:videoId/products/:productId**

Return the specified video product.

- **URL Params**  
  _Required:_ `videoId=[string]` & `productId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  item: {<product_object>}
}
```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no products found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "invalid product ID format"
    }
  }
  ```

## **POST /api/videos**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
{
  title: string,
  description: string,
  thumbnailUrl: string,
  videoUrl: string
}
```

- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  item: {<video_object>}
}
```

- **Error Response:**

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "please provide title, description, thumbnailUrl, and videoUrl"
    }
  }
  ```

## **POST /api/videos/:videoId/comments**

Post a new Video Comment and return a new object.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
{
  username: string,
  comment: string
}
```

- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  item: {<comment_object>}
}
```

- **Error Response:**

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "please provide username and comment"
    }
  }
  ```

## **POST /api/videos/:videoId/products**

Post a new Video Product and return a new object.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
{
  title: string,
  price: number,
  imageUrl: string,
  productUrl: string
}
```

- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  item: {<product_object>}
}
```

- **Error Response:**

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "please provide title, price, imageUrl, and productUrl"
    }
  }
  ```

## **PUT /api/videos/:videoId**

Update the specified video and return the updated object.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**

```
{
  title: string,
  description: string,
  thumbnailUrl: string,
  videoUrl: string
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

  ```
  {
    item: {video_object}
  }
  ```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no videos found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "please provide title, description, thumbnailUrl, and videoUrl"
    }
  }
  ```

## **PUT /api/videos/:videoId/products/:productId**

Update the specified video product and return the updated object.

- **URL Params**  
  _Required:_ `videoId=[string]` & `productId=[string]`
- **Data Params**

```
{
  title: string,
  price: number,
  imageUrl: string,
  productUrl: string
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

  ```
  {
    item: {product_object}
  }
  ```

- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no products found with that ID"
    }
  }
  ```

  OR

  - **Code:** 400  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "please provide title, price, imageUrl, and productUrl"
    }
  }
  ```

## **DELETE /api/videos/:videoId**

Delete the specified video.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 204  
  **Content:**
  None
- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no videos found with that ID"
    }
  }
  ```

## **DELETE /api/videos/:videoId/products/:productId**

Delete the specified video product.

- **URL Params**  
  _Required:_ `videoId=[string]` & `productId=[string]`
- **Data Params**
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 204  
  **Content:**
  None
- **Error Response:**

  - **Code:** 404  
    **Content:**

  ```
  {
    error: {
      type: "ResponseError",
      message: "no products found with that ID"
    }
  }
  ```

## How to Run

Before running the application locally, make sure you have the following prerequisites installed on your machine:

- **Node.js:** Ensure you have Node.js installed. You can download it from the [official website](https://nodejs.org/en/download).

- **MongoDB:** Make sure you have MongoDB installed and running on your local machine. You can download it from the [official website](https://www.mongodb.com/try/download/community).

- **Git:** Install Git on your machine if you haven't already. You can download it from the [official website](https://git-scm.com/downloads).

Now, follow the steps below to run the API on your local environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/4ken/tokopedia-play.git
   ```

2. Move to project directory:

   ```bash
   cd tokopedia-play/server
   ```

3. Install all required dependencies:

   ```bash
   npm install
   ```

Before running the application, you need to set up the environment variables:

1. Rename the `.env.example` file to `.env`.

2. Open the `.env` file and configure your own environment variables:

   ```
   DB_URL=your_database_url
   ```

   Replace `your_database_url` with the URL of your MongoDB database.

Once all the preparations have been made, you will be able to run the application locally:

Start the server:

```bash
npm run dev
```
