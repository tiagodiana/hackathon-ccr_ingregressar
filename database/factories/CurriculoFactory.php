<?php

namespace Database\Factories;

use App\Models\Curriculo;
use Illuminate\Database\Eloquent\Factories\Factory;

class CurriculoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Curriculo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_jovem' => $this->faker->randomFloat(0),
            'linkedin' => $this->faker->sentence,
            'github' => $this->faker->sentence,
            'telefone' => $this->faker->sentence,
            'data_nascimento' => $this->faker->date(),
            'escolaridade' => $this->faker->sentence,
            'ano_formacao' => $this->faker->date(),
            'formacao' => $this->faker->sentence,
            'cursos' => $this->faker->name,
            'cursos_realizados' => $this->faker->name
        ];
    }
}
