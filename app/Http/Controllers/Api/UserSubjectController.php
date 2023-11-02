<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\UserSubject;
use Illuminate\Http\Request;



class UserSubjectController extends Controller
{
    public function getUserSubjects(Request $request)
    {

        if (Auth::user()) {
            $userId =$request->user()->id;
            $userSubjects = UserSubject::where('user_id', $userId)
            ->join('subjects', 'user_subjects.subject_id', '=', 'subjects.id')
            ->select('subjects.*')
            ->get();

        return response()->json($userSubjects);
        }
        else
        return \response()->json("User not authenticated");


    }
}
