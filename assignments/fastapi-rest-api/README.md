# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build a small RESTful API using the FastAPI framework. Students will create endpoints for basic CRUD operations and learn how to run and test the API locally.

## 📝 Tasks

### 🛠️ Create a Simple CRUD API

#### Description
Implement a FastAPI application that manages a collection of `Item` objects in memory. Provide endpoints to create, read, update, and delete items.

#### Requirements
Completed program should:

- Define an `Item` model (e.g., `id`, `name`, `description`, `price`).
- Implement endpoints:
  - `POST /items/` — create an item
  - `GET /items/` — list all items
  - `GET /items/{item_id}` — get a single item
  - `PUT /items/{item_id}` — update an item
  - `DELETE /items/{item_id}` — delete an item
- Store items in an in-memory dictionary or list (persistence not required).
- Validate input using Pydantic models.
- Return appropriate HTTP response codes (201, 200, 404, etc.).

### 🛠️ Run and Test the API

#### Description
Provide instructions to run the API and simple curl or HTTP examples to exercise the endpoints.

#### Requirements

- Include a `requirements.txt` listing `fastapi` and `uvicorn`.
- Provide a `starter-code.py` that can be started with `uvicorn starter-code:app --reload`.
- Include at least three example `curl` commands or HTTP requests in the README.

---

## Starter files

- `starter-code.py` — minimal FastAPI app scaffold with CRUD endpoints
- `requirements.txt` — `fastapi` and `uvicorn`

## Tips

- Keep the data model simple and focus on correct HTTP status codes and validation.
- Use `if __name__ == '__main__':` guard only for small local runs; prefer `uvicorn` when testing.
