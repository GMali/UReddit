test:
	@./node_modules/.bin/mocha -u bdd --reporter landing --require should --timeout 20s

.PHONY: test