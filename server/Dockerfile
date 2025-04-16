FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get clean


COPY . .

RUN chmod +x wait_for_postgres.sh

CMD ["./wait_for_postgres.sh", "gunicorn", "server.wsgi:application", "--bind", "0.0.0.0:8000"]
