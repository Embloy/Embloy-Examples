package main

import (
    "fmt"
    "github.com/embloy/embloy-go/embloy"
)

func main() {
    client := embloy.NewEmbloyClient("your-client-token", map[string]string{
        "mode":        "job",
        "success_url": "your-success-url",
        "cancel_url":  "your-cancel-url",
        "job_slug":    "your-job-slug",
    })

    result, err := client.MakeRequest()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Result:", result)
}
