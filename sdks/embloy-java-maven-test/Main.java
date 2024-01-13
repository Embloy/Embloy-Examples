package com.example

import com.embloy.EmbloyClient;
import com.embloy.EmbloySession;

public class Main {
    public static void main(String[] args) {
        // Replace these values with your actual client token and session data
        String clientToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNzMzNDk5MywidHlwIjoiZW50ZXJwcmlzZV8yIiwiaWF0IjoxNzA1MDg2NjQ0LCJpc3MiOiJzcnYtY21kZXJjdWQzbm1jNzNkamllbjAtaGliZXJuYXRlLWJiOTg3ZmQ1Yi01OWt2OSJ9.QE9jork2-NF4sw6W3-DUN84nElK_8V9zrf5cWxKDP-c";

        EmbloySession session = new EmbloySession(EmbloySession.EmbloyRequestMode.JOB_MODE, "your-job-slug", "your-success-url", "your-cancel-url");

        EmbloyClient embloyClient = new EmbloyClient(clientToken, session);

        try {
            String applyUrl = embloyClient.makeRequest();
            System.out.println("Apply URL: " + applyUrl);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
