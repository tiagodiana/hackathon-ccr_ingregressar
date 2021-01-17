<?php

namespace App\Http\Controllers;

use App\Models\Jovem;
use Illuminate\Http\Request;

class JovemController extends Controller
{
    private $model;

    /**
     * Create a new controller instance.
     *
     * @param Jovem $model
     */
    public function __construct(Jovem $model)
    {
        $this->model = $model;
    }

    public function getAll(): string
    {
        return $this->model->all();
    }

    public function get($id): string
    {
        return $this->model->find($id);
    }

    public function add(Request $request): array
    {
        $data = [];
        $request['ip_address'] = $_SERVER['REMOTE_ADDR'];
        $email = $request->get('email');
        $token = $request->get('token');
        if (!empty($email))
        {
            $error = $this->model->where('email',$email)->get();
            if (count($error) > 0)
            {
                $data = [
                    'code'=> 2,
                    'msg' => 'E-mail já cadastrado!',
                    'details'=>''
                ];

                return $data;
            }
        }

        if (!empty($token))
        {
            $error = $this->model->where('token',$token)->get();
            if (count($error) > 0)
            {
                $data = [
                    'code'=> 2,
                    'msg' => 'Houve algum problema, tente novamente!',
                    'details'=> ''
                ];
                return $data;
            }
        }


        $model = $this->model->create($request->all());
        if ($model)
        {
            $data = [
                'code'=> 1,
                'msg' => 'Usuário cadastrado com sucesso!',
                'details'=> $model
            ];
        }
        else
        {
            $data = [
                'code'=> 2,
                'msg' => 'Erro ao cadastrar usuário!',
                'details'=> $model
            ];
        }
        return $data;
    }

    public function update($id, Request $request): string
    {
        $model = $this->model->find($id)
            ->update($request->all());

        return response()->json($model);
    }

    public function delete($id): string
    {
        $model = $this->model->find($id)
            ->delete();

        return response()->json(null);
    }
}
