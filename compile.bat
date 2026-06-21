@echo off
echo Compiling Blade view into static index.html...
php -r "define('LARAVEL_START', microtime(true)); require 'vendor/autoload.php'; $app = require_once 'bootstrap/app.php'; $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class); $kernel->bootstrap(); $html = view('welcome')->render(); $html = str_replace(['http://localhost/', 'http://127.0.0.1:8001/', 'http://localhost:8001/'], 'public/', $html); file_put_contents('index.html', $html);"
echo SUCCESS: index.html has been generated!
