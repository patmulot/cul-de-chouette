# 1 installer Ratcher pour créer le serveur : 
```
composer require cboden/ratchet
```

# 2 créer "server.php"
créer un fichier server.php et y coder :
```php
<?php
$app = new Ratchet\App('127.0.0.1', 8080);
$app->route('/echo', new Ratchet\Server\EchoServer, ['*']);
$app->run();
```

# 3 lancer le serveur
```php
php server.php
```

# 4 créer le client
```
composer require ratchet/pawl
```

# 2 créer "client.php"
créer un fichier client.php et y coder :
```php
<?php
use Ratchet\RFC6455\Messaging\MessageInterface;

$loop = React\EventLoop\Factory::create();

$connector = new Ratchet\Client\Connector($loop);
$connection = $connector('ws://127.0.0.1:8080/echo')->then(
    function (Ratchet\Client\WebSocket $conn) {
        $conn->on('message', function (MessageInterface $msg) use ($conn) {
            echo "{$msg}\n";
            $conn->close();
        });

        $conn->send('Hello world !');
    }, function (Throwable $e) {
        echo "Could not connect: {$e->getMessage()}\n";
    }
);

$loop->run();
```