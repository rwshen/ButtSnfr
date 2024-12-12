package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/rwshen/buttSnfr/database"
	"github.com/rwshen/buttSnfr/models"
	"golang.org/x/crypto/bcrypt"
)

func ValidateAddress(address string) string {
	// google address validate api
	return address
}

func Register(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
	}

	// confirm passwords at registration match
	if data["password"] != data["confirm_password"] {
		c.JSON(400, gin.H{
			"message": "passwords do not match"})
	}

	hashedEmail, _ := bcrypt.GenerateFromPassword([]byte(data["email"]), 14)
	hashedAddress, _ := bcrypt.GenerateFromPassword([]byte(data["address"]), 14)

	user := models.User{
		FirstName: data["first_name"],
		DogName:   data["dog_name"],
		Email:     hashedEmail,
		Address:   hashedAddress,
	}

	user.SetPassword(data["password"])

	// store it in the database
	database.DB.Create(&user)
}
