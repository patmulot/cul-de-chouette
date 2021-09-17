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