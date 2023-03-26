# syntax=docker/dockerfile:1

FROM python:3.11

RUN pip3 install poetry
RUN poetry config virtualenvs.create false

WORKDIR /app
COPY . /app

RUN poetry install --no-dev

# ENTRYPOINT ["python"]
# CMD ["make", "start-api"]
CMD ["poetry", "run", "python", "app.py"]