package models

import "golang.org/x/crypto/bcrypt"

type User struct {
	Id        uint   `json:"id"`
	FirstName string `json: "first_name"`
	DogName   string `json: "dog_name"`
	Email     []byte `json: "-"`
	Address   []byte `json: "-"`
	Password  []byte `json: "-"`
}

// Error implements error.
func (user User) Error() string {
	panic("unimplemented")
}

func (user *User) SetPassword(password string) {
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 14)
	user.Password = hashedPassword
}

func (user *User) ComparePassword(password string) error {
	return bcrypt.CompareHashAndPassword(user.Password, []byte(password))
}
