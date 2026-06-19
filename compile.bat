@echo off
echo Compiling Blade view into static index.html...
php -r "define('LARAVEL_START', microtime(true)); require 'vendor/autoload.php'; $app = require_once 'bootstrap/app.php'; $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class); $kernel->bootstrap(); file_put_contents('index.html', str_replace('http://localhost/', 'public/', view('welcome')->render()));"
echo SUCCESS: index.html has been generated!
