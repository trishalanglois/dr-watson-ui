## Dr Watson 

### Set Up

Clone down this repo, install the dependencies, and start up the application using `npm start`.

You can run existing tests with `npm test`.

### Expectations / Rules

We currently have an Chat application using the [Watson Assistant API](https://cloud.ibm.com/docs/services/assistant?topic=assistant-api-overview).  The purpose of this application is to replace the surveys that students fill out every week.  We are still working on the API so conversations are short currently, but it will respond back based on your feedback.  We have the backend setup, but are having a few bugs/errors in the frontend.  We would like you to go through and fix the bugs, update the tests, and implement a new feature on it as well.

You will have 3 hours to work on this.

#### Dr Watson Login Screenshot (with error)
![dr-watson-login-screenshot](./assets/dr-watson-login-screenshot.png)

#### Dr Watson Chat Screenshot
![dr-watson-chat-screenshot](./assets/dr-watson-chat-screenshot.png)

**Important Note:** *There might be one or two things in the codebase that you might be unfamiliar with.  No worries, you will not need to understand how these work in order to pass this.  For example: do not worry about the `ref` or `createRef` inside of ChatBox or what is happening inside of `componentDidUpdate()`* 

### Endpoints

Note that all of the endpoints require a header of "Content-Type" with a value of "application/json".

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Start a conversation with Dr. Watson | `https://drwatson-api.herokuapp.com/api/v1/start_session` | POST | `{ "feeling": <String> }` | `{ "message": "Hello, I am Dr. Watson..." }` |
| Send a message to Dr. Watson and get a reply message back | `https://drwatson-api.herokuapp.com/api/message` | POST | `{ "message": <String> }` | `{ "message": "I appreciate the feedback..." }` |
| End the session with Dr. Watson | `https://drwatson-api.herokuapp.com/api/v1/end_session` | GET | none | 200 status code, no response body content |


Note: All of these endpoints will return semantic errors if something is wrong with the request.
