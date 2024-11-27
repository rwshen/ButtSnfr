package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rwshen/buttSnfr/controllers"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.Hello)
	app.Get("/dog", controllers.Dog)
	app.Get("/login", controllers.Login)
}
