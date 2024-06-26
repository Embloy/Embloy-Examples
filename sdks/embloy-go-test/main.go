package main

import (
	"fmt"

	"github.com/embloy/embloy-go/embloy"
)

func main() {
	sessionData := embloy.SessionData{
		Mode:       "job",
		SuccessURL: "your-success-url",
		CancelURL:  "your-cancel-url",
		JobSlug:    "your-job-slug",
	}
	client := embloy.NewEmbloyClient("your-client-token", sessionData)

	result, err := client.MakeRequest()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("Result:", result)
}
