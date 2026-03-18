<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sale; // import your Sale model

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard'];

        foreach ($products as $product) {
            Sale::factory()->count(10)->create([ // use singular 'Sale'
                'product' => $product
            ]);
        }
    }
}
