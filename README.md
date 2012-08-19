## Плагин для jQuery: Placeholder.
Имитирует placeholder в старых браузерах.

### Инициализация:
```javascript
$('textarea, input').placeholder();
```

### Значения опций по умолчанию:
```javascript
$('textarea, input').placeholder({
    always: false,                    // Плагин будет работать только для браузеров, не поддерживающих плейсхолдер
    class: '',
    style: {}
});
```

### Пример опций:
```javascript
$('textarea, input').placeholder({
    always: true,                     // Плагин будет работать для всех браузеров, включая поддерживающие плейсхолдер
    class: 'class1 class2',           // css-классы для стилизации плейсхолдера
    style: {                          // css-свойства для стилизации плейсхолдера
        'border': '1px solid green',
        'color': 'blue'
    }
});
```