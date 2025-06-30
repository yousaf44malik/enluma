# agents_be/Dockerfile

FROM python:3.11-slim

WORKDIR /app

# Install system dependencies for audio and ffmpeg
RUN apt-get update && apt-get install -y \
    libsndfile1-dev \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Start your app
CMD ["python", "gemini_backend.py", "dev"]
