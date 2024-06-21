
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "servers": [
      {
        "url": "https://api.factor2.cl/qa"
      }
    ],
    "info": {
      "title": "API de Ejemplo",
      "version": "1.0.0",
      "description": "Documentación de API generada con swagger-jsdoc"
    },
    "paths": {
      "openapi": {
        "0": "3",
        "1": ".",
        "2": "0",
        "3": ".",
        "4": "0"
      },
      "info": {
        "title": "Factor2 REST API",
        "version": "1.0.0",
        "description": "Documentación de API Factor2"
      },
      "/operaciones/reporte/{factoring}/{fechaDesde}/{fechaHasta}": {
        "get": {
          "summary": "Obtener lista de fichas",
          "parameters": [
            {
              "name": "factoring",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "ID del factoring"
            },
            {
              "name": "fechaDesde",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "Fecha inicio del reporte de fichas YYYY-MM-DD"
            },
            {
              "name": "fechaHasta",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "Fecha fin del reporte de fichas YYYY-MM-DD"
            }
          ],
          "tags": [
            "Fichas"
          ],
          "responses": {
            "200": {
              "description": "Lista de fichas",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Ficha"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Ficha": {
          "type": "object",
          "properties": {
            "rutCliente": {
              "type": "string"
            },
            "razonSocialCliente": {
              "type": "string"
            },
            "estado": {
              "type": "string"
            },
            "createdAt": {
              "type": "string",
              "description": "Fecha creación de la ficha"
            },
            "emailFrom": {
              "type": "string",
              "description": "Correo que carga la ficha en la BD"
            },
            "adjuntos": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Nombre del archivo"
                  },
                  "url": {
                    "type": "string",
                    "description": "URL del archivo"
                  }
                }
              }
            }
          }
        }
      }
    },
    "tags": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
