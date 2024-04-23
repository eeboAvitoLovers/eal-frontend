# EAL Frontend

Фронтенд-приложения команды ЭЭБО для хакатона [BEST-HACK](https://www.хакатоны.рус/tpost/z3htxu2or1-best-hack)

## Переменные окружения

Создайте файл `.env.local` и добавьте в него следующие переменные:

| Название       | Значение      |
| :------------- | :------------ |
| `VITE_API_URL` | URL-адрес API |

## Запуск с Docker

```bash
docker build -t eal-frontend .
docker run -it --rm -p 8080:8080 -e VITE_API_URL=<URL> eal-frontend
```
