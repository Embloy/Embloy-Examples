package main

import (
	"log"
	"net/http"
	"os"

	"github.com/embloy/embloy-go/embloy"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	r := gin.Default()

	r.GET("/api/make_request", func(c *gin.Context) {
		// Fetch the client_token from ENV
		clientToken, exists := os.LookupEnv("CLIENT_TOKEN")
		if !exists {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "CLIENT_TOKEN is not set"})
			return
		}

		// Check if request is well-formed
		jobSlug := c.Query("job_slug")
		if jobSlug == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "job_slug is required"})
			return
		}

		// Call Embloy-Go SDK to get a request_token
		sessionData := embloy.SessionData{
			Mode:       "job",
			SuccessURL: "your-success-url",
			CancelURL:  "your-cancel-url",
			JobSlug:    jobSlug,
		}
		client := embloy.NewEmbloyClient(clientToken, sessionData)

		response, err := client.MakeRequest()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Redirect to the Embloy application portal
		c.Redirect(http.StatusFound, response)
	})

	r.Run(":8081")
}
