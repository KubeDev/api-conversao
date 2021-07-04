# To run
    npm install
    node index.js
    http://localhost:8080/api-docs

#To Force down on application
    http://localhost:8080/unhealth

#To Force down on application
    http://localhost:8080/unreadyfor/30

#To Create your Image
    docker image build -t brunobotelhobrapi-conversao:v1 .

#To Publish your iamge
    docker login
    docker tag brunobotelhobr/api-conversao:v1 brunobotebr/api-conversao:latest
    docker push  brunobotelhobr/api-conversao:v1

#To run a Container
    docker run -d -p 8080:8080 brunobotelhobr/api-conversao:latest