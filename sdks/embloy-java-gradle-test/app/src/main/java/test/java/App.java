/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package test.java;

import embloy.EmbloyClient;
import embloy.EmbloySession;

public class App {
    public static void exampleEndpoint() {
        // Replace these values with your actual client token and session data
        String clientToken = "your-client-token";

        EmbloySession session = new EmbloySession(EmbloySession.EmbloyRequestMode.JOB_MODE, "your-job-slug", "your-success-url", "your-cancel-url");

        EmbloyClient embloyClient = new EmbloyClient(clientToken, session);

        try {
            String applyUrl = embloyClient.makeRequest();
            System.out.println("Redirect URL: " + applyUrl);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        new App().exampleEndpoint();
    }
}
