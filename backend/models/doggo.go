package models

type DogPersonality struct {
	DogName     string `json: "dog_name"`
	Age         int8   `json: "age"`
	YearsAtHome int8   `json: "years_at_home"`
	Sociality   int8   `json: "sociality"`
	Vocality    int8   `json:"vocality"`
}
