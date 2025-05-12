package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// DemoRequest represents a demo request submission
type DemoRequest struct {
	Email     string `json:"email" binding:"required,email"`
	Company   string `json:"company" binding:"required"`
	Name      string `json:"name" binding:"required"`
	Phone     string `json:"phone"`
	Message   string `json:"message"`
	Service   string `json:"service"`
	Timestamp string `json:"timestamp"`
}

// ContactForm represents a contact form submission
type ContactForm struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Subject string `json:"subject"`
	Message string `json:"message" binding:"required"`
}

// NewsletterSignup represents a newsletter subscription
type NewsletterSignup struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Email     string             `json:"email" binding:"required,email" bson:"email"`
	Timestamp time.Time          `json:"timestamp" bson:"timestamp"`
	Active    bool               `json:"active" bson:"active"`
}

// Service represents a service offered by Pryzm
type Service struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
	Details     string `json:"details,omitempty"`
}

// CaseStudy represents a case study
type CaseStudy struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Company     string `json:"company"`
	Industry    string `json:"industry"`
	Description string `json:"description"`
	Results     string `json:"results"`
	ImageURL    string `json:"imageUrl"`
}

// Testimonial represents a client testimonial
type Testimonial struct {
	ID       string `json:"id"`
	Quote    string `json:"quote"`
	Author   string `json:"author"`
	Position string `json:"position"`
	Company  string `json:"company"`
	ImageURL string `json:"imageUrl"`
} 