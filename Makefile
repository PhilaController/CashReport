TASKS = build serve

.PHONY: $(TASKS)

$(TASKS):
	export VUE_APP_FISCAL_YEAR=$(fy); export VUE_APP_QUARTER=$(q); yarn run $@ 