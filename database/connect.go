package database

import (
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() {
	// load environmental variables
	godotenv.Load()
	dbStr := os.Getenv("USERNAME") + ":" + os.Getenv("PASSWORD") + "@/buttSnfr"
	// set up mysql db
	_, err := gorm.Open(mysql.Open(dbStr), &gorm.Config{})

	if err != nil {
		panic("Could not connect to db")
	}

}

type User struct {
	gorm.Model
	username string
	password string
	age      int
}
