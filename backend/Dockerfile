FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server

# Create a minimal runtime image
FROM alpine:latest

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/server .

# Set environment variables
ENV GIN_MODE=release
ENV PORT=9011
# Default MongoDB URI for container networking
ENV MONGO_URI=mongodb://mongodb:27017/pryzm

# Expose the application port
EXPOSE 9011

# Run the application
CMD ["./server"] 