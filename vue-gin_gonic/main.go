package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    r := gin.Default()

    r.GET("/api/make_request", func(c *gin.Context) {
        // Your API logic here
        c.JSON(http.StatusOK, gin.H{"message": "Request made successfully"})
    })

    r.Run(":5000")
}
