package api

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"pryzm.at/backend/database"
	"pryzm.at/backend/models"
)

// RegisterHandlers sets up all the API routes
func RegisterHandlers(router *gin.Engine) {
	api := router.Group("/api")
	{
		api.POST("/demo-request", HandleDemoRequest)
		api.POST("/contact", HandleContactForm)
		api.POST("/register-newsletter", HandleNewsletterSignup)

		// Example of a GET endpoint
		api.GET("/services", GetServices)

	}

}

// HandleDemoRequest processes demo request submissions
func HandleDemoRequest(c *gin.Context) {
	var request models.DemoRequest

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Set timestamp if not provided
	if request.Timestamp == "" {
		request.Timestamp = time.Now().Format(time.RFC3339)
	}

	// TODO: Save to database
	log.Printf("Demo request received: %+v", request)

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Demo request received successfully",
	})
}

// HandleContactForm processes contact form submissions
func HandleContactForm(c *gin.Context) {
	var form models.ContactForm

	if err := c.BindJSON(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Save to database or send email
	log.Printf("Contact form received: %+v", form)

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Contact form submitted successfully",
	})
}

// HandleNewsletterSignup processes newsletter subscriptions
func HandleNewsletterSignup(c *gin.Context) {
	var subscription models.NewsletterSignup

	if err := c.BindJSON(&subscription); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Set timestamp and active status
	subscription.Timestamp = time.Now()
	subscription.Active = true

	// Get the newsletter collection
	collection := database.GetCollection("newsletter_subscriptions")

	// Check if email already exists in the collection
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var existingSubscription models.NewsletterSignup
	err := collection.FindOne(ctx, bson.M{"email": subscription.Email}).Decode(&existingSubscription)

	if err == nil {
		// Email already exists, return success without duplicating
		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "Email already subscribed to newsletter",
		})
		return
	}

	// Insert the subscription to MongoDB
	_, err = collection.InsertOne(ctx, subscription)
	if err != nil {
		log.Printf("Error saving newsletter subscription: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "Failed to save newsletter subscription",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Newsletter subscription received",
	})
}

// GetServices returns the list of available services
func GetServices(c *gin.Context) {
	// This would typically come from a database
	services := []models.Service{
		{
			ID:          "budget-intelligence",
			Name:        "Budget Intelligence",
			Description: "Track financial data and optimize resource allocation with precision analytics.",
			Icon:        "chart-line",
		},
		{
			ID:          "orion-network",
			Name:        "Orion™ Network Graph",
			Description: "Visualize complex relationships and identify key opportunities with our proprietary tool.",
			Icon:        "project-diagram",
		},
		{
			ID:          "org-intelligence",
			Name:        "Organization Intelligence",
			Description: "Gain insights into organizational structures and optimize internal workflows.",
			Icon:        "building",
		},
		{
			ID:          "ai-assistant",
			Name:        "AI-Powered Assistant",
			Description: "Leverage cutting-edge AI to automate processes and enhance decision-making.",
			Icon:        "brain",
		},
	}

	c.JSON(http.StatusOK, gin.H{
		"status":   "success",
		"services": services,
	})
}
