package main

import (
    "github.com/gin-gonic/gin"
    "github.com/joho/godotenv"
    "net/http"
    "os"
    "io/ioutil"
    "encoding/json"
    "fmt"
    "log"
)

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    r := gin.Default()

    r.GET("/api/make_request", func(c *gin.Context) {
        clientToken, exists := os.LookupEnv("CLIENT_TOKEN")
        if !exists {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "CLIENT_TOKEN is not set"})
            return
        }

        req, err := http.NewRequest("POST", "http://localhost:3000/api/v0/sdk/request/auth/token", nil)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
            return
        }
        req.Header.Set("client_token", clientToken)

        resp, err := http.DefaultClient.Do(req)
        if err != nil || resp.StatusCode != http.StatusOK {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
            return
        }
        defer resp.Body.Close()

        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
            return
        }

        var result map[string]string
        json.Unmarshal(body, &result)

        requestToken, exists := result["request_token"]
        if !exists {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
            return
        }

        c.Redirect(http.StatusFound, fmt.Sprintf("http://localhost:3000/sdk/apply?token=%s", requestToken))
    })

    r.Run(":8081")
}