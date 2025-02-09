# Use Node.js base image
FROM node:18

# Set working directory for backend
WORKDIR /app

# Copy backend package files and install dependencies
COPY backend/package.json ./backend/
RUN cd backend && npm install

# Copy backend code
COPY backend/ ./backend/

# Set working directory for frontend
WORKDIR /app

# Copy frontend package files and install dependencies
COPY frontend/package.json ./frontend/
RUN cd frontend && npm install

# Copy frontend code
COPY frontend/ ./frontend/

# Build frontend
RUN cd frontend && npm run build

# Expose port and start the backend
EXPOSE 5000
CMD ["node", "backend/index.js"]