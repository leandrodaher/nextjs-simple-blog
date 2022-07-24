build:
	sudo docker compose -f infra/docker-compose.development.yml build

start:
	docker compose -f infra/docker-compose.development.yml up -d

stop:
	docker compose -f infra/docker-compose.development.yml down

terminal:
	CONTAINER_NAME=$(docker ps -aqf "name=nextjs-docker-dev") && docker exec -it ${CONTAINER_NAME} /bin/sh



build-prod:
	docker compose -f infra/docker-compose.production.yml build

start-prod:
	docker compose -f infra/docker-compose.production.yml up -d

stop-prod:
	docker compose -f infra/docker-compose.production.yml down

terminal-prod:
	CONTAINER_NAME=$(docker ps -aqf "name=nextjs-docker") && docker exec -it ${CONTAINER_NAME} /bin/sh