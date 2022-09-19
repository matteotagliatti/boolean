@extends('layouts.main')

@section('title', 'Movies')

@section('content')
    <div class="grid">
        @foreach ($movies as $movie)
            <div>
                <p class="og-title">{{ $movie->original_title }}</p>
                <h1>{{ $movie->title }}</h1>
                <p>Nationality: {{ $movie->nationality }}</p>
                <p>Date: {{ $movie->date }}</p>
                <p>Vote: {{ $movie->vote }}</p>
            </div>
        @endforeach
    </div>
@endsection
