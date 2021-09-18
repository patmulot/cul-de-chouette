tuto ici : 
https://code-boxx.com/php-live-chat-websocket/
https://code-boxx.com/php-live-chat-websocket/

```
php chat-server.php
```

## 1 créer le fichier "composer.json"
y placer :
```
{
    "autoload": {
        "psr-4": {
            "MyApp\\": "app"
        }
    },
    "require": {
        "cboden/ratchet": "^0.4"
    }
}
```

## 2 executer "composer install"
```
composer install
```

## 3 créer la class "WebSocket"

