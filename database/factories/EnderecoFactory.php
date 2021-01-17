<?php

namespace Database\Factories;

use App\Models\Endereco;
use Illuminate\Database\Eloquent\Factories\Factory;

class EnderecoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Endereco::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_rel' => $this->faker->randomNumber(),
            'cep' => $this->faker->sentence,
            'rua' => $this->faker->sentence,
            'numero' => $this->faker->sentence,
            'bairro' => $this->faker->sentence,
            'cidade' => $this->faker->sentence,
            'estado' => $this->faker->sentence
        ];
    }
}
