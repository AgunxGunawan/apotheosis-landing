<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apotheosis: Path to Divinity - Premium Landing Page</title>
    
    <!-- Custom CSS (Modular) -->
    <link rel="stylesheet" href="{{ asset('css/global.css') }}?v=1.2">
    <link rel="stylesheet" href="{{ asset('css/preloader.css') }}?v=1.2">
    <link rel="stylesheet" href="{{ asset('css/layout.css') }}?v=1.2">
    <link rel="stylesheet" href="{{ asset('css/sections.css') }}?v=1.2">
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
    <script src="{{ asset('js/canvas.js') }}?v=1.2"></script>
    <script src="{{ asset('js/interactive.js') }}?v=1.2"></script>
    <script src="{{ asset('js/main.js') }}?v=1.2"></script>
</body>
</html>
