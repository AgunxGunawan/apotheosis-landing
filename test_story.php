<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    $html = view('partials.story')->render();
    echo "Length: " . strlen($html) . "\n";
    if (strpos($html, 'season2') !== false) {
        echo "Found season2\n";
    } else {
        echo "NOT FOUND season2\n";
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
