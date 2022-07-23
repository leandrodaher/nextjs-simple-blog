build:
	docker compose -f infra/docker-compose.development.yml build

start:
	docker compose -f infra/docker-compose.development.yml up -d

stop:
	docker compose -f infra/docker-compose.development.yml down