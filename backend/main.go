package main

import (
	"log"
	"os"
	"os/signal"
	"pryzm.at/backend/middleware"
	"syscall"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"pryzm.at/backend/api"
	"pryzm.at/backend/database"
)

func main() {
	// Load .env file if it exists
	if err := godotenv.Load(); err != nil && !os.IsNotExist(err) {
		log.Println("Error loading .env file:", err)
	}

	// Initialize database connection
	database.Initialize()
	defer database.Close()

	// Set default port or use environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "9011" // Default port as specified in requirements
	}

	// Set Gin mode based on environment
	env := os.Getenv("GIN_MODE")
	if env == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	// Initialize router
	router := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:9010", "https://pryzm.at"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	router.Use(cors.New(config))

	// Register health check endpoint
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "OK",
		})
	})

	// Register API handlers
	api.RegisterHandlers(router)

	router.Use(middleware.CORSMiddleware())

	// Handle graceful shutdown
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-quit
		log.Println("Shutting down server...")
		database.Close()
		os.Exit(0)
	}()

	// Start server
	log.Printf("Server running on port %s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
