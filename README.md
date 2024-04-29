---

## Authentication API Documentation

### Introduction

This API provides endpoints for user authentication, including signup, login,
and logout functionalities.

| Endpoint           | Method | Description         | Request Body                                     | Success Response                                             | Error Response                                  |
| ------------------ | ------ | ------------------- | ------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| `/api/auth/signup` | POST   | User registration   | `{ "username": "string", "password": "string" }` | `{ "message": "User created successfully" }`                 | `{ "message": "Username already exists" }`      |
| `/api/auth/login`  | POST   | User authentication | `{ "username": "string", "password": "string" }` | `{ "message": "Successfully logged in", "token": "string" }` | `{ "message": "Invalid username or password" }` |
| `/api/auth/logout` | POST   | User logout         | None                                             | `{ "message": "Logged out successfully" }`                   | None                                            |

## Availability Management API Documentation

### Introduction

This API provides endpoints to manage user availability. Users can add, edit,
and delete their availability slots. Additionally, it allows retrieving
availability slots based on user.

| Endpoint                                                               | Method                                                                  | Description                                                         | Request Body                                                                                                                                                                                                    | Success Response                                                                     | Error Response                                                                                                                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/api/availability/add`                                                | POST                                                                    | Adds availability slots for different days or the same day.         | - `startTime`: Start time of the availability slot (Date)<br>- `endTime`: End time of the availability slot (Date)<br>- `dayOfWeek`: Day of the week for the availability slot (String)                         | Status Code: 200                                                                     | Status Code: 400 Bad Request<br>Content: `{ "error": "Error message" }`                                                                                                                                                 |
| `/api/availability/edit/:id`                                           | PUT                                                                     | Edits existing availability slots identified by their unique ID.    | - `startTime`: Updated start time of the availability slot (Date)<br>- `endTime`: Updated end time of the availability slot (Date)<br>- `dayOfWeek`: Updated day of the week for the availability slot (String) | Status Code: 200 OK<br>Content: `{ "message": "Availability updated successfully" }` | Status Code: 400 Bad Request<br>Content: `{ "error": "Error message" }`                                                                           |
| `/api/availability/delete/:id`                                         | DELETE                                                                  | Deletes existing availability slots identified by their unique ID.  | - None                                                                                                                                                                                                          | Status Code: 200 OK<br>Content: `{ "message": "Availability deleted successfully" }` | Status Code: 400 Bad Request<br>Content: `{ "error": "Error message" }`                                                                           |
| `/api/availability/get`                                                | GET                                                                     | Retrieves all availability slots associated with a authorized user. | - None                                                                                                                                                                                                          | Status Code: 200 OK<br>Content: Array of availability slots                          | Status Code: 404 Not Found<br>Content: `{ "error": "User not found" }`<br>Status Code: 400 Bad Request<br>Content: `{ "error": "Error message" }` |

### Notes

- All requests and responses are in JSON format.
- Proper authentication and authorization mechanisms should be implemented to
  secure these endpoints in a production environment.

---
