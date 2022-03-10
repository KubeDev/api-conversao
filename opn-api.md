openapi: 3.0.1
info:
  title: Conversão de temperatura
  description: API de conversão de temperatura
  contact:
    email: bruno.botlho.br@gmail.com
  version: 1.0.1
servers:
- url: /
paths:
  /fahrenheit/{valor}/celsius:
    get:
      description: Converte de Fahrenheit para Celsius
      parameters:
      - name: valor
        in: path
        description: Valor que será convertido
        required: true
        schema:
          type: number
      responses:
        200:
          description: Resultado da conversão
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Temperatura'
        400:
          description: Bad Input Parameter
          content: {}
  /celsius/{valor}/fahrenheit:
    get:
      description: Converte de Celsius para Fahrenheit
      parameters:
      - name: valor
        in: path
        description: Valor que será convertido
        required: true
        schema:
          type: number
      responses:
        200:
          description: Resultado da conversão
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Temperatura'
        400:
          description: Bad Input Parameter
          content: {}
  /echo/{msg}:
    get:
      description: Return a message
      parameters:
      - name: msg
        in: path
        description: Mensagem que será retornada
        required: true
        schema:
          type: string
      responses:
        200:
          description: Retorno
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/msg'
        400:
          description: Bad Input Parameter
          content: {}
components:
  schemas:
    Temperatura:
      required:
      - valor
      type: object
      properties:
        valor:
          type: number
          example: 500.0
    msg:
      type: object
      properties:
        valor:
          type: string
          example: Azeitona
