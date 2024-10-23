<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Response;

class LoginController extends Controller
{
    public function index(): Response
    {
        return inertia("auth/login");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string']
        ]);

        $isValid = \Auth::attempt($request->only(['email', 'password']));

        if (!$isValid) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        return back();
    }
}
