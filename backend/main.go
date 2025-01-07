package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/rwshen/buttSnfr/controllers"
	"github.com/rwshen/buttSnfr/database"
)

func main() {

	// load environmental variables
	godotenv.Load("/Users/rshen/Desktop/buttSnfr/.env")
	database.Connect()
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.Use(corsMiddleware())
	r.POST("/api/login", controllers.Login)
	r.POST("/api/register", controllers.Register)

	r.Run() // listen and serve on 0.0.0.0:8080

}

// CORS middleware function definition
func corsMiddleware() gin.HandlerFunc {
	// Define allowed origins as a comma-separated string

	// Return the actual middleware handler function
	return func(c *gin.Context) {
		// Function to check if a given origin is allowed

		// Get the Origin header from the request
		origin := c.Request.Header.Get("Origin")

		// Check if the origin is allowed

		// If the origin is allowed, set CORS headers in the response
		c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		// Handle preflight OPTIONS requests by aborting with status 204
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		// Call the next handler
		c.Next()
	}
}
