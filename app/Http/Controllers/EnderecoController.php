<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use Illuminate\Http\Request;

class EnderecoController extends Controller
{
    private $model;

    /**
     * Create a new controller instance.
     *
     * @param Endereco $model
     */
    public function __construct(Endereco $model)
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

    public function add(Request $request): string
    {
        $model = $this->model->create($request->all());
        return response()->json($model);
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
