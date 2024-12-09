package database

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/rwshen/buttSnfr/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	// load environmental variables
	godotenv.Load()
	dbStr := os.Getenv("USERNAME") + ":" + os.Getenv("PASSWORD") + "@/buttSnfr"
	// set up mysql db
	database, err := gorm.Open(mysql.Open(dbStr), &gorm.Config{})

	if err != nil {
		panic("Could not connect to db")
	}

	DB = database

	database.AutoMigrate(&models.User{})

}
