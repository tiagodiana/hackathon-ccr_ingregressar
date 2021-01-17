<?php

namespace App\Http\Controllers;

use App\Models\Vagas;
use Illuminate\Http\Request;

class VagasController extends Controller
{
    private $model;

    /**
     * Create a new controller instance.
     *
     * @param Vagas $model
     */
    public function __construct(Vagas $model)
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
