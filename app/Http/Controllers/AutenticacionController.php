<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AutenticacionController extends Controller
{
    

    public function index()
    {

        if (Auth::check()) {
            return redirect('dashboard');
        }

        return view('autenticacion.login');

    }
    

    public function dashboard()
    {

        
        return view('autenticacion.dashboard');

    }



    public function login()
    {
        $this->validate(request(), [
            'usuario' => 'required',
            'password' => 'required',
            'recordar' => 'required',
        ]);


        if (Auth::attempt(['email' => request('usuario'), 'password' => request('password')], request('recordar'))) {

            return json_encode([
                'success' => true,
            ], JSON_NUMERIC_CHECK);

        }

        return json_encode([
            'success' => false,
        ], JSON_NUMERIC_CHECK);


    }


    public function logout()
    {

        //Session::flush();
        Auth::logout();
        return redirect('/');
    }


}
