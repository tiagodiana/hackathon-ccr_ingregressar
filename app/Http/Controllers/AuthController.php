<?php

namespace App\Http\Controllers;

use App\Models\Jovem;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $jovem;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function login(Request $request ,Jovem $jovem): array
    {
        $data = [];
        $email = $jovem->where('email', $request->get('email'))->get();
        $pass = $request->get('senha');


        if (count($email) > 0 && $pass === $email[0]['senha'])
        {
            return $data = [
                'code' => 1,
                'msg' => 'Login efetuado com sucesso',
                'details' => [
                    'token' => $email[0]['token'],
                    'userName' => $email[0]['nome'],
                    'userEmail' => $email[0]['email'],
                    'userType'=> 'user'
                ]
            ];
        }
        else
        {
            return $data = [
                'code' => 2,
                'msg' => 'Erro ao efetuar login.',
                'details'=>''
            ];
        }
    }

    //
}
