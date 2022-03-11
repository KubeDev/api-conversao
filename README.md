
# To Access
[Kubernets Loab Balancer](https://api-service-brunobotelhobr.cloud.okteto.net/)

# To run

    npm install
    node index.js
    http://localhost:8080/

# To Publish your image

    docker login
    docker tag brunobotelhobr/api-conversao:v1 brunobotebr/api-conversao:latest
    docker push  brunobotelhobr/api-conversao:v1

# To run a Container

    docker run -d -p 8080:8080 brunobotelhobr/api-conversao:latest
