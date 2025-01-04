package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/rwshen/buttSnfr/controllers"
	"github.com/rwshen/buttSnfr/database"
)

func main() {

	// load environmental variables
	godotenv.Load("/Users/rshen/Desktop/buttSnfr/.env")
	database.Connect()
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("SMART_PROXY"), "http://127.0.0.1:8080", "https://api.usps.com/"},
		AllowMethods:     []string{"PUT", "PATCH", "POST", "GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == os.Getenv("SMART_PROXY")
		},
	}))
	r.POST("/api/login", controllers.Login)
	r.POST("/api/register", controllers.Register)

	r.Run() // listen and serve on 0.0.0.0:8080

}
