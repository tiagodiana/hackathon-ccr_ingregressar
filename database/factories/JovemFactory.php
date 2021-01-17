<?php

namespace Database\Factories;

use App\Models\Jovem;
use Illuminate\Database\Eloquent\Factories\Factory;

class JovemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Jovem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'senha' => $this->faker->password,
            'ip_address' => $this->faker->sentence,
            'token' => $this->faker->sentence
        ];
    }
}
