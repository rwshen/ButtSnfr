package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/rwshen/buttSnfr/database"
	"github.com/rwshen/buttSnfr/routes"
)

func main() {
	database.Connect()

	// * => pointer reference to the address
	// & => print the reference of the name
	app := fiber.New()

	routes.Setup(app)

	log.Fatal(app.Listen(":8000"))
}
