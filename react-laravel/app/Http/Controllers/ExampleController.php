<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

        // Simulate generating a URL based on the job slug
        $url = 'https://example.com/apply/' . $jobSlug;

        // Redirect the user to the obtained URL
        return response()->json(['url' => $url], 302);
    }
}