package database

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/rwshen/buttSnfr/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	// load environmental variables
	godotenv.Load("/Users/rshen/Desktop/buttSnfr/.env")
	dbStr := os.Getenv("USERNAME") + ":" + os.Getenv("PASSWORD") + "@/buttSnfr"
	// set up mysql db
	database, err := gorm.Open(mysql.Open(dbStr), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		panic("Could not connect to db")
	}

	DB = database

	database.AutoMigrate(&models.User{})

}
