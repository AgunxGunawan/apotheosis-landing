<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apotheosis: Path to Divinity - Premium Landing Page</title>
    
    <!-- Custom CSS (Modular) -->
    <link rel="stylesheet" href="{{ asset('css/global.css') }}">
    <link rel="stylesheet" href="{{ asset('css/preloader.css') }}">
    <link rel="stylesheet" href="{{ asset('css/layout.css') }}">
    <link rel="stylesheet" href="{{ asset('css/sections.css') }}">
</head>
<body>

    <!-- Premium Preloader -->
    @include('partials.preloader')

    <!-- Runic Canvas Background -->
    <canvas id="rune-canvas"></canvas>

    <!-- Premium Cursor Trail Canvas -->
    <canvas id="cursor-canvas"></canvas>

    <!-- Partial Layouts -->
    @include('partials.header')
    @include('partials.hero')
    @include('partials.story')
    @include('partials.codex')
    @include('partials.gallery')
    @include('partials.database')
    @include('partials.cauldron')
    @include('partials.realms')
    @include('partials.arsenal')
    @include('partials.footer')
    @include('partials.lightbox')

    <!-- Custom JavaScript (Modular) -->
    <script src="{{ asset('js/canvas.js') }}"></script>
    <script src="{{ asset('js/interactive.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
