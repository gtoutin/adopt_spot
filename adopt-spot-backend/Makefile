build-docker:
	docker build -t adopt_spot_backend .

run-docker:
	docker run -it \
	-p 8000:5000 \
	--mount type=bind,source=$(shell pwd),target=/app \
	adopt_spot_backend

# Use when no docker
start-api:
	poetry install
	poetry run python app.py