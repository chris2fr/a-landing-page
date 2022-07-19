run:
	set -e
	git pull origin web
	source ./sourceenv
	echo "3003" > data/port
	#sed -i 's/lesgv\\.com/lesgrandsvoisins.com/g' app.js
	#sed -i "s/shortName: 'a-landing-page/shortName: 'lesgrandsvoisins/g" app.js
	node app @apostrophecms/migration:migrate
	node app @apostrophecms/asset:build
	pm2 restart web 

