---
title: Testing with Postman
sidebar_position: 3
---

# Testing with Postman

## Learning objectives

By the end of this chapter, you'll be able to:

- Explain why technical writers use Postman.
- Send a basic API request with Postman.
- Inspect API responses to gather documentation details.
- Identify common information to verify before documenting an endpoint.

## What is Postman?

Postman is an API client that allows you to send requests to an API and inspect the responses it returns.

Instead of guessing how an endpoint behaves, you can use Postman to test it yourself and observe the results.

For technical writers, Postman is an essential tool because it helps verify documentation against the actual behavior of an API.

## Why technical writers use Postman

Documentation should reflect how an API actually behaves, not how we assume it behaves.

Testing endpoints with Postman allows you to:

- Verify that request examples work
- Confirm response structures
- Identify required parameters
- Observe authentication requirements
- Capture real error messages
- Detect outdated or incorrect documentation

Testing an API before documenting it helps improve both accuracy and credibility.

## Sending your first request

To send a request in Postman,:

1. Create a new HTTP request
2. Select the appropriate HTTP method
3. Enter the endpoint URL
4. Add any required authentication
5. Include parameters or a request body, if necessary
6. Click **Send**

Postman sends the request to the API and displays the response. 

Now let's see how these steps work in practice.

### Example: Testing the TMDB API

In this example, you'll test an endpoint from the TMDB API. You'll send a request to retrieve information about a specific movie.

#### Step 1: Create a new request

Open Postman and create a new HTTP request.

Set the request method to **GET**.

#### Step 2: Enter the endpoint

Enter the following endpoint in the request URL field.

```http
GET https://api.themoviedb.org/3/movie/550
```

:::important

This endpoint requires authentication. If you send the request without a valid access token, the API will return a **401 Unauthorized** response.

:::

#### Step 3: Add authentication

In the **Authorization** tab:

- Select **Bearer token** as the authorization type.
- Paste your TMDB API Read Access Token into the **Token** field.
- Click **Send**.

Alternatively, you can add the token manually as an HTTP header.

:::note

To test the examples in this guide, you'll need a TMDB API access token. Create a free account on [TMDB](https://www.themoviedb.org/), then navigate to **Settings** → **API**. Here, you'll be able to view your API credentials, including your **Read Access Token**. Copy the token and use it as the Bearer Token when authenticating requests in Postman.

:::

If the request is successful, Postman returns a **200 OK** response together with a JSON response body like:

```json
{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "runtime": 139,
  "vote_average": 8.4
}
```

### What to look for in the response

Testing an endpoint isn't only about confirming that it works. It's also an opportunity to collect the information you'll need when writing your documentation.

As you review the response, ask yourself the following questions:

- Is the endpoint URL correct?
- Does the request use the correct HTTP method?
- Is authentication required?
- Which status code was returned?
- What information does the response contain?
- Are there any fields that require additional explanation?
- Does the API behave as described in the existing documentation?

Answering these questions helps ensure that your documentation reflects the actual behavior of the API rather than assumptions.

### What did we learn?

From this request, we can already identify several important details that belong in API documentation:

| Information | Value |
|------------|-------|
| HTTP method | GET |
| Endpoint | `/movie/{movie_id}` |
| Authentication | Bearer token |
| Success status code | 200 OK |
| Response format | JSON |

As a technical writer, this information forms the foundation of your endpoint documentation.

## Understanding the response

After sending a request, examine the response carefully.

Pay attention to:

- The HTTP status code
- The response body
- Response headers
- Response time

Each of these provides valuable information that can help you write accurate documentation.

## What you should verify

When testing an endpoint, verify the following:

| Verify | Why it matters |
|---------|----------------|
| Endpoint URL | Ensures the documentation points to the correct endpoint. |
| HTTP method | Confirms the correct operation is documented. |
| Parameters | Identifies required and optional inputs. |
| Authentication | Verifies how access is granted. |
| Response body | Confirms the structure and returned fields. |
| Status codes | Documents both successful and failed responses. |
| Error messages | Helps developers troubleshoot issues. |

Testing each endpoint reduces the risk of publishing incorrect documentation.

## Build a testing habit

This point is very important. When working with APIs, avoid relying solely on existing documentation.

Whenever possible:

- Test the endpoint yourself.
- Compare the results with the documentation.
- Update examples if the API behavior has changed.
- Record any inconsistencies or missing information.

A few minutes of testing can prevent hours of confusion for future readers.

## Why this matters

Testing is an important part of the documentation process.

By verifying API behavior yourself, you gain a deeper understanding of the API and produce documentation that developers can trust.

Over time, testing APIs becomes a natural part of your documentation workflow rather than an extra step.

## Key takeaways

After completing this chapter, you should understand that:

- Postman allows you to test API requests and inspect responses.
- Technical writers use Postman to verify API behavior before documenting it.
- Testing helps confirm requests, responses, parameters, and authentication.
- Verifying an API improves the accuracy and reliability of documentation.

## Next steps

Now that you've learned how to test an API, the final step before writing is planning your documentation.

In the next chapter, you'll learn how to organize information and create a clear documentation structure before you begin writing.