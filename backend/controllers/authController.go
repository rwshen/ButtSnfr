package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/rwshen/buttSnfr/database"
	"github.com/rwshen/buttSnfr/models"
)

func Register(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
	}

	// confirm passwords at registration match

	if data["password"] != data["confirm_password"] {
		c.JSON(400, gin.H{
			"message": "passwords do not match"})
	}

	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
	}

	user.SetPassword(data["password"])

	// store it in the database
	database.DB.Create(&user)

}
