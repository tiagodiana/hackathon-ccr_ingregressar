<?php

namespace App\Http\Controllers;

use App\Models\Curriculo;

use Illuminate\Http\Request;


class CurriculoController extends Controller
{
    private $curriculo;

    /**
     * Create a new controller instance.
     *
     * @param Curriculo $curriculo
     */
    public function __construct(Curriculo $curriculo)
    {
        $this->curriculo = $curriculo;
    }

    public function getAll(): string
    {
        $curriculo = $this->curriculo->all();
        return $curriculo;
    }

    public function get($id): string
    {
        $curriculo = $this->curriculo->find($id);
        return $curriculo;
    }

    public function add(Request $request): string
    {
        $curriculo = $this->curriculo->create($request->all());
        return response()->json($curriculo);
    }

    public function update($id, Request $request): string
    {
        $curriculo = $this->curriculo->find($id)
            ->update($request->all());

        return response()->json($curriculo);
    }

    public function delete($id): string
    {
        $curriculo = $this->curriculo->find($id)
            ->delete();

        return response()->json(null);
    }
}
