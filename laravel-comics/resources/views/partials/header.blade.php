<header class="container">
    <a href="{{ @route('comics')}}">
        <img src="{{ asset('img/dc-logo.png')}}" alt="Logo" />
    </a>
    <ul>
        <li><a href="{{ @route('other')}}">characters</a></li>
        <li><a class="@yield('comics_active')" href="{{ @route('comics')}}">comics</a></li>
        <li><a href="{{ @route('other')}}">movie</a></li>
        <li><a href="{{ @route('other')}}">tv</a></li>
        <li><a href="{{ @route('other')}}">games</a></li>
        <li><a href="{{ @route('other')}}">collectibles</a></li>
        <li><a href="{{ @route('other')}}">videos</a></li>
        <li><a href="{{ @route('other')}}">fans</a></li>
        <li><a href="{{ @route('other')}}">news</a></li>
        <li><a href="{{ @route('other')}}"">shop</a></li>
    </ul>
</header>