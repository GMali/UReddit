test:
	@./node_modules/.bin/mocha -u bdd --reporter spec --require should --timeout 20s

.PHONY: test