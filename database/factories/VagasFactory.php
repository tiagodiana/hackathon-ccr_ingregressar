<?php

namespace Database\Factories;

use App\Models\Vagas;
use Illuminate\Database\Eloquent\Factories\Factory;

class VagasFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Vagas::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_empresa' => $this->faker->randomNumber(),
            'nome' => $this->faker->name,
            'tipo' => $this->faker->sentence,
            'descricao' => $this->faker->text,
            'requisitos' => $this->faker->sentence,
            'salario' => $this->faker->sentence,
            'local' => $this->faker->sentence
        ];
    }
}
