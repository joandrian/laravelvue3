<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userSubjects = [
            [
                'user_id' => 1,
                'subject_id' => 1,
            ],
            [
                'user_id' => 1,
                'subject_id' => 2,
            ],
            [
                'user_id' => 1,
                'subject_id' => 3,
            ],
            [
                'user_id' => 2,
                'subject_id' => 1,
            ],
            [
                'user_id' => 2,
                'subject_id' => 2,
            ],
        ];

        foreach ($userSubjects as $userSubject) {
            \App\Models\UserSubject::create($userSubject);
        }
    }
}
