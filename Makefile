test:
	@./node_modules/.bin/mocha -u bdd --reporter landing --require should

.PHONY: test