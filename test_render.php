<?php
define('LARAVEL_START', microtime(true));
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    $html = view('welcome')->render();
    file_put_contents('test.html', $html);
    echo "Render successful. Length: " . strlen($html);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
