package com.example

import com.embloy.EmbloyClient;
import com.embloy.EmbloySession;

public class Main {
    public static void main(String[] args) {
        // Replace these values with your actual client token and session data
        String clientToken = "your-job-slug";

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
