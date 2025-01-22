# Blog App

This is a simple blog application built with React and Node.js. It allows users to create, read, update, and delete blog posts.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Endpoints](#endpoints)
  - [Create a New Blog Post](#create-a-new-blog-post)
  - [Get All Blog Posts](#get-all-blog-posts)
  - [Get a Specific Blog Post](#get-a-specific-blog-post)
  - [Update a Blog Post](#update-a-blog-post)
  - [Delete a Blog Post](#delete-a-blog-post)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- Node.js (>= 14.17.0)
- npm (>= 6.14.13)
- MongoDB (>= 4.4.3)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   This will start the server on [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Create a New Blog Post**: 
  Navigate to [http://localhost:3000/create-blog](http://localhost:3000/create-blog), fill in the form, and submit it.

- **View All Blog Posts**: 
  Navigate to [http://localhost:3000/all-blogs](http://localhost:3000/all-blogs) to see the list of all blog posts.

- **View a Specific Blog Post**: 
  Navigate to [http://localhost:3000/blog-details/:blogId](http://localhost:3000/blog-details/:blogId), replacing `:blogId` with the ID of the blog post you want to view.

- **Update a Blog Post**: 
  Navigate to [http://localhost:3000/edit-blog/:blogId](http://localhost:3000/edit-blog/:blogId), replacing `:blogId` with the ID of the blog post you want to update. Fill in the form and submit it.

- **Delete a Blog Post**: 
  Navigate to [http://localhost:3000/delete-blog/:blogId](http://localhost:3000/delete-blog/:blogId), replacing `:blogId` with the ID of the blog post you want to delete. Click the "Delete" button.

---

## API Reference

### Endpoints

#### Create a New Blog Post

- **Endpoint**: `/api/blogs/createBlog`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "authorName": "John Doe",
    "authorDepartment": "Engineering",
    "blogImage": "https://example.com/image.jpg",
    "blogHeading": "My First Blog Post",
    "blogContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
  ```

#### Get All Blog Posts

- **Endpoint**: `/api/blogs/getAllBlogs`
- **Method**: `GET`

#### Get a Specific Blog Post

- **Endpoint**: `/api/blogs/getBlogById/:blogId`
- **Method**: `GET`
- **Path Parameters**:
  - `blogId`: The ID of the blog post

#### Update a Blog Post

- **Endpoint**: `/api/blogs/updateBlog/:blogId`
- **Method**: `PUT`
- **Path Parameters**:
  - `blogId`: The ID of the blog post
- **Request Body**:
  ```json
  {
    "blogHeading": "My Updated Blog Post",
    "blogContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
  ```

#### Delete a Blog Post

- **Endpoint**: `/api/blogs/deleteBlog/:blogId`
- **Method**: `DELETE`
- **Path Parameters**:
  - `blogId`: The ID of the blog post

---

## Error Handling

Error handling is implemented using `try-catch` blocks. Proper error messages are returned in JSON format for all failed operations.

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
