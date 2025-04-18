# Cofexim WEB.
## Гайд по запуску.

### 1. Установите необходимые зависимости:

- Docker
- Node

### 2. Сборка и установка фронтенда.

1. Переходим в папку с проектом.
```shell
cd path/to/project/cofexim
```

2. Сборка и установка фронтенда.

```shell
cd frontend
npm install
npm run build
cd ..
```

### 2. Подготовка переменных окружения

```shell
cp example_env .env # создать собственный .env
```
Обязательно заполняем все поля:
```shell
POSTGRES_DB=DB_NAME
POSTGRES_USER=USER
POSTGRES_PASSWORD=PASS
POSTGRES_HOST=HOST
POSTGRES_PORT=PORT
SECRET_KEY=YOUR_DJANGO_SECKRET_KEY (example: django-insecure-@tn@(+is%dn4sgh!h&%40$4ttfaj%e)w)rf#*b*naf$31d8@kh)
HOST=YOUR_HOST (example: http://localhost)
```

### 3. Сборка контейнеров.

```shell
docker compose build
```

### 4. Пуск!

```shell
docker compose up
```

### 5. Создание суперпользователя.
```shell
docker compose exec backend python manage.py createsuperuser
```