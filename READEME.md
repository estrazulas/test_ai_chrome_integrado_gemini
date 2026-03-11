# Local AI Web App (Gemini Nano / Chrome Prompt API)

## Overview

This project is a browser-based AI application that runs **locally
inside Google Chrome** using the **Prompt API for Gemini Nano**.\
It demonstrates how to interact with the experimental on-device language
model provided by Chrome.

The application allows users to send prompts to the local AI model and
receive responses using **streaming output**, enabling a smooth
conversational experience directly in the browser without relying on
external APIs.

The architecture is simple and modular, separating responsibilities
between the UI, AI logic, and optional translation features.

------------------------------------------------------------------------

# Technologies Used

## JavaScript (ES Modules)

The application is written using modern JavaScript with modular
architecture.

Main modules include:

-   **AIService**
    -   Responsible for creating and managing the AI session
    -   Handles streaming responses from the model
    -   Manages prompt execution
    -   Controls aborting requests
-   **View**
    -   Manages UI elements
    -   Displays streamed responses
    -   Handles parameter controls such as temperature and topK
-   **TranslationService**
    -   Uses the browser Translation API (when available)
    -   Allows translating AI responses

------------------------------------------------------------------------

## Chrome Prompt API (Gemini Nano)

The application uses the experimental **Prompt API**, which exposes the
**Gemini Nano on-device language model** directly inside Chrome.

Main capabilities used:

-   Local AI inference (no cloud API required)
-   Prompt streaming responses
-   Adjustable generation parameters
-   Image input support (depending on build)
-   AbortController for canceling prompts

Key API methods:

-   LanguageModel.availability()
-   LanguageModel.create()
-   session.prompt()
-   session.promptStreaming()
-   session.destroy()

------------------------------------------------------------------------

## HTML / CSS Frontend

The UI is built with standard HTML and JavaScript.

The interface includes:

-   Prompt input area
-   Temperature control
-   TopK control
-   Streaming response display
-   Abort button for canceling prompts

------------------------------------------------------------------------

# Project Structure

Example structure:

    project/
    │
    ├── index.html
    ├── index.js
    ├── aiService.js
    ├── view.js
    ├── translationService.js
    │
    └── package.json

------------------------------------------------------------------------

# Running the Project

## Install dependencies

    npm install

## Start the project

    npm start

This will start the development server and open the application in the
browser.

------------------------------------------------------------------------

# Chrome / Chrome Canary Requirements

This project relies on experimental Chrome features.

You must use either:

-   **Google Chrome (latest version)**
-   **Chrome Canary (recommended)**

------------------------------------------------------------------------

## Enable Required Flags

Open:

    chrome://flags

Enable the following:

### Prompt API for Gemini Nano

    chrome://flags/#prompt-api-for-gemini-nano

### On-device AI Model

    chrome://flags/#optimization-guide-on-device-model

### Translation API

    chrome://flags/#translation-api

### Language Detection API

    chrome://flags/#language-detector-api

After enabling these flags:

1.  Restart the browser
2.  Open the application again

------------------------------------------------------------------------

# Model Download

When the application runs for the first time, Chrome may download the
**Gemini Nano model** automatically.

This can take a few minutes depending on your connection and device.

During this time the API may return:

-   `downloading`
-   `downloadable`

Once the download finishes the model becomes **available locally**.

------------------------------------------------------------------------

# Features

## Local AI Inference

The AI runs completely inside the browser using the **on-device Gemini
Nano model**.

No external API or cloud services are required.

------------------------------------------------------------------------

## Streaming Responses

Responses are streamed using:

    session.promptStreaming()

This allows tokens to appear progressively in the interface.

------------------------------------------------------------------------

## Adjustable AI Parameters

The interface allows users to control:

### Temperature

Controls creativity of responses.

Typical values:

-   0.2 → deterministic
-   0.7 → balanced
-   1.0 → creative

### TopK

Controls how many candidate tokens the model considers before selecting
the next token.

Typical values:

-   10 → deterministic
-   40 → balanced
-   100 → more creative

------------------------------------------------------------------------

## Abortable Prompts

Using **AbortController**, the user can stop the AI generation process
at any time.

------------------------------------------------------------------------

## Optional Translation

If supported by the browser, the application can translate responses
using the **Chrome Translation API**.

------------------------------------------------------------------------

# Limitations

Because the Prompt API is still experimental:

-   Not all Chrome builds support every input type
-   Audio input may not be available
-   APIs may change between versions
-   Some features only work in Chrome Canary

------------------------------------------------------------------------

# Future Improvements

Possible enhancements include:

-   Full chat history management
-   Image prompt support
-   Conversation memory
-   UI improvements
-   Better error handling for model availability

------------------------------------------------------------------------

# Summary

This project demonstrates how to build a **fully local AI web
application** using the **Gemini Nano model directly in Chrome**.

It highlights how modern browsers are starting to provide **native AI
capabilities**, enabling powerful applications that run entirely on the
user's device.
