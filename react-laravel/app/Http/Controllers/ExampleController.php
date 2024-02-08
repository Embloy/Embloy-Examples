<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Embloy\EmbloyClient;
use Embloy\EmbloySession;

class ExampleController extends Controller
{
    public function handleExampleRequest(Request $request)
    {
        // Retrieve data from the request
        $jobSlug = $request->input('job_slug');

        // Perform validation
        if (!$jobSlug) {
            return response()->json(['error' => 'job_slug is required'], 400);
        }

        // Fetch the client token from the .env file
        $clientToken = env('EMBLOY_CLIENT_TOKEN');
        
        // Create an instance of EmbloySession
        $session = new EmbloySession('job', $jobSlug, [
            'success_url' => 'success_url', // Add your success URL here
            'cancel_url' => 'cancel_url', // Add your cancel URL here
        ]);

        // Create an instance of EmbloyClient
        $client = new EmbloyClient($clientToken, $session);

        try {
            // Make a request to generate the URL
            $url = $client->makeRequest();
            return response()->json(['url' => $url], 302);
        } catch (\Exception $e) {
            // Handle any errors
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}