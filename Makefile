# Include environment variables from .env file
ifneq (,$(wildcard ./.env))
	include .env
	export
endif

# Default shell
SHELL := /bin/bash

# Colors for terminal output
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

# Default target
.PHONY: help
help:
	@echo -e "${GREEN}Available commands:${NC}"
	@echo -e "${YELLOW}make up${NC}               - Start all services in production mode"
	@echo -e "${YELLOW}make down${NC}             - Stop all services"
	@echo -e "${YELLOW}make restart${NC}          - Restart all services"
	@echo -e "${YELLOW}make logs${NC}             - View logs from all services"
	@echo -e "${YELLOW}make frontend${NC}         - Start frontend service only"
	@echo -e "${YELLOW}make backend${NC}          - Start backend service only"
	@echo -e "${YELLOW}make build${NC}            - Build all services"
	@echo -e "${YELLOW}make build-backend${NC}    - Build backend service only"
	@echo -e "${YELLOW}make build-frontend${NC}   - Build frontend service only"
	@echo -e "${YELLOW}make clean${NC}            - Remove containers and volumes"
	@echo -e "${YELLOW}make install${NC}          - Install dependencies for both services"
	@echo -e "${YELLOW}make test${NC}             - Run tests for both services"
	@echo -e "${YELLOW}make frontend-install${NC} - Install frontend dependencies"
	@echo -e "${YELLOW}make backend-install${NC}  - Install backend dependencies"
	@echo -e "${YELLOW}make frontend-test${NC}    - Run frontend tests"
	@echo -e "${YELLOW}make backend-test${NC}     - Run backend tests"
	@echo -e "${YELLOW}make go-tidy${NC}          - Update go.mod and go.sum files"
	@echo -e "${YELLOW}make dev${NC}              - Start development environment (backend in Docker, frontend with npm)"

# Docker compose commands
.PHONY: up down restart logs build clean build-backend build-frontend
up: go-tidy
	@echo -e "${GREEN}Starting backend service...${NC}"
	docker compose up -d backend || (echo -e "${RED}Failed to start backend${NC}" && exit 1)
	@echo -e "${GREEN}Starting frontend service...${NC}"
	docker compose up -d frontend || (echo -e "${RED}Failed to start frontend${NC}" && exit 1)

down:
	docker compose down

restart:
	docker compose restart

logs:
	docker compose logs -f

build: build-backend build-frontend

build-backend: go-tidy
	@echo -e "${GREEN}Building backend service...${NC}"
	docker compose build backend

build-frontend:
	@echo -e "${GREEN}Building frontend service...${NC}"
	docker compose build frontend || echo -e "${RED}Frontend build failed. Make sure Dockerfile exists in frontend directory${NC}"

clean:
	docker compose down -v

# Frontend specific commands
.PHONY: frontend frontend-install frontend-test
frontend:
	@echo -e "${GREEN}Starting frontend service...${NC}"
	docker compose up -d frontend || echo -e "${RED}Frontend failed to start. Make sure configuration is correct.${NC}"

frontend-install:
	cd frontend && npm install

frontend-test:
	cd frontend && npm test

# Backend specific commands
.PHONY: backend backend-install backend-test backend-tidy
backend: go-tidy
	@echo -e "${GREEN}Starting backend service...${NC}"
	docker compose up -d backend

backend-install:
	cd backend && npm install

backend-test:
	cd backend && npm test

# Go module management
.PHONY: go-tidy
go-tidy:
	@echo -e "${GREEN}Updating go.mod and go.sum files...${NC}"
	cd backend && go mod tidy

# Install all dependencies
.PHONY: install
install: frontend-install backend-install

# Run all tests
.PHONY: test
test: frontend-test backend-test

# Development environment setup
.PHONY: dev dev-backend dev-frontend
dev: dev-backend dev-frontend

dev-backend: go-tidy
	@echo -e "${GREEN}Starting backend in development mode...${NC}"
	docker compose up -d backend

dev-frontend:
	@echo -e "${GREEN}Starting frontend in development mode with npm...${NC}"
	@echo -e "${YELLOW}Make sure PORT=3000 in frontend/.env matches the port in docker-compose.yml${NC}"
	cd frontend && PORT=3000 npm run dev 