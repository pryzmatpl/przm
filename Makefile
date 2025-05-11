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
NC := \033[0m # No Color

# Default target
.PHONY: help
help:
	@echo -e "${GREEN}Available commands:${NC}"
	@echo -e "${YELLOW}make up${NC}               - Start all services"
	@echo -e "${YELLOW}make down${NC}             - Stop all services"
	@echo -e "${YELLOW}make restart${NC}          - Restart all services"
	@echo -e "${YELLOW}make logs${NC}             - View logs from all services"
	@echo -e "${YELLOW}make frontend${NC}         - Start frontend service only"
	@echo -e "${YELLOW}make backend${NC}          - Start backend service only"
	@echo -e "${YELLOW}make build${NC}            - Build all services"
	@echo -e "${YELLOW}make clean${NC}            - Remove containers and volumes"
	@echo -e "${YELLOW}make install${NC}          - Install dependencies for both services"
	@echo -e "${YELLOW}make test${NC}             - Run tests for both services"
	@echo -e "${YELLOW}make frontend-install${NC} - Install frontend dependencies"
	@echo -e "${YELLOW}make backend-install${NC}  - Install backend dependencies"
	@echo -e "${YELLOW}make frontend-test${NC}    - Run frontend tests"
	@echo -e "${YELLOW}make backend-test${NC}     - Run backend tests"

# Docker compose commands
.PHONY: up down restart logs build clean
up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

logs:
	docker compose logs -f

build:
	docker compose build

clean:
	docker compose down -v

# Frontend specific commands
.PHONY: frontend frontend-install frontend-test
frontend:
	docker compose up -d frontend

frontend-install:
	cd frontend && npm install

frontend-test:
	cd frontend && npm test

# Backend specific commands
.PHONY: backend backend-install backend-test
backend:
	docker compose up -d backend

backend-install:
	cd backend && npm install

backend-test:
	cd backend && npm test

# Install all dependencies
.PHONY: install
install: frontend-install backend-install

# Run all tests
.PHONY: test
test: frontend-test backend-test

# Development environment setup
.PHONY: dev
dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d 