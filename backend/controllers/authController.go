package controllers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/rwshen/buttSnfr/database"
	"github.com/rwshen/buttSnfr/models"
	"github.com/rwshen/buttSnfr/util"
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

func Login(c *gin.Context) {
	var data map[string]string

	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User

	// query to find the user from the api call that matches in the database
	// database.DB.Where("email = ?", data["email"]).First(&user)

	if user.Id == 0 {
		c.Status(404)
		c.JSON(400, gin.H{
			"message": "user not found"})
	}

	if err := user.ComparePassword(data["password"]); err != nil {
		c.JSON(400, gin.H{
			"message": "incorrect password",
		})
	}

	token, err := util.GenerateJwt(strconv.Itoa(int(user.Id)))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "failed to generate token"})
	}

	c.JSON(200, gin.H{
		"token": token,
	})
}
