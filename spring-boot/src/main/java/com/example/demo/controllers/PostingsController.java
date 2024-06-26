package com.example.demo.controllers;

import java.net.URI;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import embloy.EmbloyClient;
import embloy.EmbloySession;
import io.github.cdimascio.dotenv.Dotenv;

@RestController
public class PostingsController {

    @GetMapping(value = "/make_request")
    public ResponseEntity<Void> postJob(@RequestParam String job_slug) { // Use HttpServletResponse here

        Dotenv dotenv = Dotenv.load();
        String clientToken = dotenv.get("CLIENT_TOKEN");

        EmbloySession session = new EmbloySession(EmbloySession.EmbloyRequestMode.ASHBY_MODE,
                job_slug, "your-success-url", "your-cancel-url");

        EmbloyClient embloyClient = new EmbloyClient(clientToken, session);

        try {
            String applyUrl = embloyClient.makeRequest();
            System.out.println("Apply URL: " + applyUrl);
            return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(applyUrl)).build();
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}