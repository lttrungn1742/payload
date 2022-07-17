status:
	git status .
add:
	git add .
commit:
	git commit -m "[Update]"
push:
	git push origin master
cd:
	make status
	make add
	make commit
	make push
