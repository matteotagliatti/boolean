@extends('templates.app')

@section('title', $comic['title'])
@section('comics_active', 'active')

@section('content')
    <main class="white-bg">
        @include('partials.jumbotron')

        {{-- Thumb Img --}}
        <div class="thumb-container">
            <div class="container">
                <div class="img-container">
                    <img src="{{ $comic['thumb'] }}" alt="{{ $comic['title'] }}">
                    <span class="type"> {{ $comic['type'] }}</span>
                    <span class="gallery">View Gallery</span>
                </div>
            </div>
        </div>

        {{-- Info --}}
        <div class="container">
            <div class="grid">
                {{-- Left --}}
                <div class="left">
                    <h2>{{ $comic['title'] }}</h2>
                    <div class="green-bg price-container">
                        <div class="price">
                            <p>U.S. Price: <span class="text-white">{{ $comic['price'] }}</span></p>
                            <p class="mr">Avaiable</p>
                        </div>
                        <p class="text-white avaiable">Check Avaiability</p>
                    </div>
                    <p>
                        {{ $comic['description'] }}
                    </p>
                </div>
                {{-- Right --}}
                <div class="right">
                    <span>Advertisement</span>
                    <img src="{{ asset('img/adv.jpg') }}" alt="adv">
                </div>
            </div>
        </div>

        {{-- Talent + Specs --}}
        <div class="grey-bg">
            <div class="container">
                <div class="grid-2">
                    {{-- Left --}}
                    <div>
                        <h3>Talent</h3>
                        <div class="info">
                            <p class="title">Art by:</p>
                            <p class="desc">
                                @foreach ($comic['artists'] as $artist)
                                    {{ $artist }}
                                    @if (!$loop->last)
                                        <span class="text-black">,</span>
                                    @endif
                                @endforeach
                            </p>
                        </div>
                        <div class="info mb">
                            <p class="title">Written by:</p>
                            <p class="desc">
                                @foreach ($comic['writers'] as $writer)
                                    {{ $writer }}
                                    @if (!$loop->last)
                                        <span class="text-black">,</span>
                                    @endif
                                @endforeach
                            </p>
                        </div>
                    </div>
                    {{-- Right --}}
                    <div>
                        <h3>Specs</h3>
                        <div class="info">
                            <p class="title">Series:</p>
                            <p class="desc uppercase">
                                {{ $comic['series'] }}
                            </p>
                        </div>
                        <div class="info">
                            <p class="title">U.S. Price:</p>
                            <p>
                                {{ $comic['price'] }}
                            </p>
                        </div>
                        <div class="info mb">
                            <p class="title">On Sale Date:</p>
                            <p>
                                {{ $comic['sale_date'] }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {{-- Links --}}
        <div class="grey-bg border-top">
            <div class="container">
                <div class="grid-3">
                    {{-- Item --}}
                    <div>
                        <span>Digital Comics</span>
                        <img src="{{ asset('img/buy-comics-digital-comics.png') }}" alt="image" />
                    </div>
                    {{-- Item --}}
                    <div>
                        <span>DC Merchandise</span>
                        <img src="{{ asset('img/buy-comics-merchandise.png') }}" alt="image" />
                    </div>
                    {{-- Item --}}
                    <div>
                        <span>Subscription</span>
                        <img src="{{ asset('img/buy-comics-subscriptions.png') }}" alt="image" />
                    </div>
                    {{-- Item --}}
                    <div>
                        <span>Comic Shop Locator</span>
                        <img src="{{ asset('img/buy-comics-shop-locator.png') }}" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    @endsection
