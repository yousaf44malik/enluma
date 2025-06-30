# Enluma-ml-backend (Livekit)
This project has backend functionality for conversational AI agents used in Enluma. It includes a frontend built with Next.js and a Python backend that uses the `livekit-agents` library.

## Architecture

The project is composed of four main services orchestrated by Docker Compose:

-   **`livekit`**: The LiveKit media server handles real-time video, audio, and data streams between clients and agents.
-   **`redis`**: A Redis instance is used by the LiveKit server for message passing and state management.
-   **`conversational_agents_be`**: The Python backend that contains the conversational agent logic. It uses the `livekit-agents` library to connect to the LiveKit server and process media streams.
-   **`agents_playground_fe`**: A Next.js application that provides a user interface for interacting with the conversational agents.

## Getting Started

### Prerequisites

-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://gitlab.com/redbuffer/enluma/enluma-ml-backend
    cd enluma
    ```

2.  **Configure environment variables:**

    There are two .envs.examples in the project, One is conversational_agents_be/.env.example & Second is agents_playground_fe/.env.example
    ```bash
    mv .env.example .env
    ```

    Update the `conversational_agents_be/.env` file with your Google Cloud credentials in both.


3.  **Launch the application:**

    ```bash
    docker compose up
    ```

The frontend will be available at [http://localhost:7860](http://localhost:7860).

## Frontend (`agents_playground_fe`)

The frontend is a Next.js application that allows users to connect to the LiveKit server and interact with the conversational agents.

### Key Technologies

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [LiveKit Components for React](https://docs.livekit.io/components/react)
-   [Tailwind CSS](https://tailwindcss.com/)

### Development

To run the frontend in development mode:

```bash
cd agents_playground_fe
npm install
npm run dev
```

## Backend (`conversational_agents_be`)

The backend is a Python application that uses the `livekit-agents` library to create conversational AI agents.

### Key Technologies

-   [Python](https://www.python.org/)
-   [LiveKit Agents](https://docs.livekit.io/agents/)
-   [Google Cloud Speech-to-Text and Text-to-Speech](https://cloud.google.com/speech-to-text)
