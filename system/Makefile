NAME = Cybertron
VERSION = 1.0
CUR_DIR = $(shell basename $(CURDIR))

COMPOSE_FILE ?= 'docker-compose.yml'

.PHONY: start dev_up 

set_up:
	cd ../modules/seneca-mongoose && yarn && cd -
	yarn

dev_up:
	docker-compose -f $(COMPOSE_FILE) up -d --remove-orphans
	yarn run fuge

ps:
	docker-compose -f $(COMPOSE_FILE)  ps

stop:
	docker-compose -f $(COMPOSE_FILE)  stop

logs:
	docker-compose -f $(COMPOSE_FILE)  logs -f

down:
	docker-compose -f $(COMPOSE_FILE) down

hotel:
	hotel add http://localhost:3000 --name kingsman

fg:
	yarn run fuge

load_test:
	# Should install npm install -g artillery
	artillery run -o report.json loadtest.yml
	artillery report report.json

repl:
	yarn run repl

