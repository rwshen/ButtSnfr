package main

import (
	"github.com/gin-gonic/gin"
	"github.com/rwshen/buttSnfr/controllers"
	"github.com/rwshen/buttSnfr/database"
)

func main() {
	database.Connect()

	r := gin.Default()
	r.POST("/api/register", controllers.Register)
	r.Run() // listen and serve on 0.0.0.0:8080

}
