<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Symfony\Contracts\EventDispatcher\Event;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::select('id','login','password','date','email','phone')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'login'=>'required',
            'password'=>'required',
            'date'=>'required',
            'phone'=>'required',
            'email'=>'required',
        ]);
        try{
            Client::create($request->post());

            return response()->json([
                'message'=>'Client успешно записан!!'
            ]);
        }catch(\Exception $e){

            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Ошибка при записи Client!!'
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return response()->json([
            'client'=>$client
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'login'=>'required',
            'password'=>'required',
            'date'=>'required',
            'phone'=>'required',
            'email'=>'required',
        ]);
        try{

            $client->fill($request->post())->update();

            $client->save();

            return response()->json([
                'message'=>'Изменения Client успешно записаны!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Ошибка при изменении Сlient на сервере!!'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client,Event $event)
    {
        try {
            $client->delete();

            return response()->json([
                'message'=>'Client успешно грохнут!!'
            ]);

        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Ошибочка при удалении Client на стороне сервера!!'
            ]);
        }
    }
}
