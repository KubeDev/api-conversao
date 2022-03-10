# To run
    npm install
    node index.js
    http://localhost:8080/

#To Force down on application
    curl -v -X PUT http://localhost:8080/unhealth

#To Force down on application
    curl -v -X PUT http://localhost:8080/unreadyfor/30

#To Stresstest
    curl -v -X PUT http://localhost:8080/stress/cpu/tempostress/60/intervalo/1/ciclos/2

#To Create your Image
    docker image build -t brunobotelhobrapi-conversao:v1 .

#To Publish your iamge
    docker login
    docker tag brunobotelhobr/api-conversao:v1 brunobotebr/api-conversao:latest
    docker push  brunobotelhobr/api-conversao:v1

#To run a Container
    docker run -d -p 8080:8080 brunobotelhobr/api-conversao:latest