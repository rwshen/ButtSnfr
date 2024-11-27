package controllers

import "github.com/gofiber/fiber/v2"

func Hello(c *fiber.Ctx) error {
	return c.SendString("Hello dog lovers")
}

func Dog(c *fiber.Ctx) error {
	return c.SendString("Here is the dog route")
}

func Login(c *fiber.Ctx) error {
	return c.SendString("This will be the login route")
}
