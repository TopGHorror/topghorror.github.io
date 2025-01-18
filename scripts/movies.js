 var movies = [
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg",
		"Movie": "Midsommar",
		"Score": 78.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzE1NzM4MjEyNV5BMl5BanBnXkFtZTgwMjYzMjMzMTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Oculus",
		"Score": 78,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Talk to Me",
		"Score": 77.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Sinister",
		"Score": 75.5,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Hereditary",
		"Score": 75.32,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Conjuring 2",
		"Score": 75.3,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Conjuring",
		"Score": 75,
		"Year": 2016
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
		"Movie": "X",
		"Score": 74.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_FMjpg_UX1000_.jpg",
		"Movie": "IT",
		"Score": 74.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzQ0MzE4OTUzMF5BMl5BanBnXkFtZTgwODAyNzI3NjE@._V1_.jpg",
		"Movie": "Bone Tomahawk",
		"Score": 74.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
		"Movie": "Pearl",
		"Score": 74.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Boy",
		"Score": 74.25,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTM1Nzk5ZTItN2ZkNi00MDRjLWIwYWUtOWY4ZjZmZjkyM2I0XkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_.jpg",
		"Movie": "Aliens",
		"Score": 73.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2M3Y2NhMGYtYjUxOS00M2UwLTlmMGUtYzY4MzFlNjZkYzY2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Barbarian",
		"Score": 73.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Insidious",
		"Score": 73.3,
		"Year": 2016
	},
	{
		"Poster": "https://image.tmdb.org/t/p/original//tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
		"Movie": "The Thing",
		"Score": 73,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Scream",
		"Score": 73,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODc1MjAxZGQtYTZhOC00NWI4LTk1M2EtY2RkYjM0YjlhOGNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Lights Out",
		"Score": 73,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NTU4M2UtNWI0Ni00Y2Y3LWE2YWUtZDVjYjFmMjVkZTYyXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "House",
		"Score": 72.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Lighthouse",
		"Score": 72.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWVmZTM1OGYtZDE5Zi00ZjU4LTliODQtNjI1Y2E4Y2I1YTlmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
		"Movie": "The Autopsy of Jane Doe",
		"Score": 72,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDkyNjE0NzMtNTgxYS00MDE4LWI0OWYtZGNmNDcxNjRhMTY3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Late Night with the Devil",
		"Score": 71.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODQ5NzA0N15BMl5BanBnXkFtZTgwMDg5MTA5NzE@._V1_.jpg",
		"Movie": "The Green Room*",
		"Score": 71.67,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTJmNTZlZWUtZTQ2Yi00YTFjLWFiNzctYzFlNmZmZGMzYTlmXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "[REC]",
		"Score": 71.3,
		"Year": 2016
	},
	{
		"Poster": "https://image.tmdb.org/t/p/original//vs9I9RFIGYaIn3XQXkuNy2BrTCt.jpg",
		"Movie": "The Wicker Man",
		"Score": 70.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Train to Busan",
		"Score": 70.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjUyNjU0NDE0OV5BMl5BanBnXkFtZTYwNzcwMzg3._V1_FMjpg_UX1000_.jpg",
		"Movie": "House of 1000 Corpses",
		"Score": 70.67,
		"Year": 2024
	},
	{
		"Poster": "https://image.tmdb.org/t/p/original//ydsLYdSiPSIL1LOWWYu7VCvDTT8.jpg",
		"Movie": "The Loved Ones",
		"Score": 70.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_.jpg",
		"Movie": "Annabelle Creation",
		"Score": 70.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Don't Breathe",
		"Score": 70.34,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "A Quiet Place",
		"Score": 70,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDJmNzM4OTAtZTM4MS00YWRiLThmNTItN2I5N2JmYzcwMDBhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
		"Movie": "The Night House",
		"Score": 70,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjAyZmEwZGItZmFjYS00YjRiLTgxMjEtZWY4ZDUyZmU1ODU4XkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The House that Jack Built",
		"Score": 69.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTY0NTZlZjYtNWRmZi00MGRjLTk4ZDctMjE4NjBiZTUyNGNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Martyrs",
		"Score": 69.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Alien",
		"Score": 69.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTcxNTQ5NF5BMl5BanBnXkFtZTgwNTk5OTU4OTE@._V1_.jpg",
		"Movie": "Ouja: Origin of Evil",
		"Score": 69.5,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmMxNzA0OTUtOTJiOS00NTc4LWJmNTItMGM3OWE0N2Y0NjhjXkEyXkFqcGdeQXVyMTg5NjU4NjE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Terrifier",
		"Score": 69.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmJkNGNiNjgtMzFlYy00ZDI5LWI2YzktZGVjYjI5MjQyMGU3XkEyXkFqcGc@._V1_.jpg",
		"Movie": "Longlegs",
		"Score": 69.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Candyman",
		"Score": 69.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzAyMDI4Ml5BMl5BanBnXkFtZTgwODMwOTY2NDM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Ritual",
		"Score": 69.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTdkZGE1YTgtNWY4MC00NDQxLWI2OTQtYmNlZDU3ODI0ODI5XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Inside",
		"Score": 69.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjBmYzFmODktNDIyZC00NWFmLTk2NTctYmZiY2E2OTA2OTc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "MaXXXine",
		"Score": 69,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Descent",
		"Score": 69,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
		"Movie": "Last Night in Soho",
		"Score": 69,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTlmOWI2ZDctZDM4Ny00YzljLTlmYTAtOTgxZmI5MGU1Yzk3XkEyXkFqcGc@._V1_.jpg",
		"Movie": "Smile",
		"Score": 69,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEzNDk1MzM4MDleQTJeQWpwZ15BbWU4MDM2NTI4ODEy._V1_FMjpg_UX1000_.jpg",
		"Movie": "A Dark Song",
		"Score": 69,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Gerald's Game",
		"Score": 69,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTE5YzIzMjQtMzUxNC00Njk4LWI1MjAtZWQyZGRkNTlkMGE1XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
		"Movie": "Audition",
		"Score": 68.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Alien: Romulus",
		"Score": 68.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NzU2ODA5OF5BMl5BanBnXkFtZTgwNTk1ODkwMzI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Super Dark Times",
		"Score": 68.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTAxMDAxODg5ODReQTJeQWpwZ15BbWU3MDI5ODYxODI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The House of the Devil",
		"Score": 68.33,
		"Year": 2022
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEzNjkwMzIyMjZeQTJeQWpwZ15BbWU4MDI2NTU5ODYx._V1_.jpg",
		"Movie": "Tremors",
		"Score": 68.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmI4NWNkYmYtMTgzNi00NTdmLWIzNTctOGQxYzc1ZTZlMTQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ju-On: The Curse",
		"Score": 68.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTBjMjY0ODEtZGVkMy00MjUyLTlkMjAtNDBmNzVjOTk0NzQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
		"Movie": "Orphan",
		"Score": 68.25,
		"Year": 2017
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTgxMGQ2ZDctYWY4Yy00YTI4LWIxMmYtOWViMGI5ZDIwMmFiXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
		"Movie": "Fresh",
		"Score": 68,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjcxOTcwZDAtYjg4Ny00YzUzLWJkNDgtMzhkMDJlOTg1YTFiXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_.jpg",
		"Movie": "Re-Animator",
		"Score": 68,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZThhNDQxNzAtOTYzZC00MzZkLWI2YjItOTE2ZjliZDY3NTFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Christine",
		"Score": 68,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQwODAxMTE1NF5BMl5BanBnXkFtZTcwNTQ0MjY3OQ@@._V1_.jpg",
		"Movie": "You're Next",
		"Score": 67.7,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Menu",
		"Score": 67.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzE5MGUyYTUtODMxZi00Y2VjLTlmYjItY2NjMDkzYmYzODY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Dark Water",
		"Score": 67.67,
		"Year": 2022
	},
	{
		"Poster": "https://image.tmdb.org/t/p/w500/lBhU4U9Eehr9shstPem6I7BdkxK.jpg",
		"Movie": "Threads",
		"Score": 67.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDRkMDczOWYtZTkxYi00YzZkLTk0MzAtODA0ZTE3ODMwYjkxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
		"Movie": "In a Violent Nature",
		"Score": 67.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjAwZTEyNzItYWJmZC00ZDU3LTk2NWYtNjNmNDlmYzEwNWEzXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
		"Movie": "The Black Phone",
		"Score": 67.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Others",
		"Score": 67.5,
		"Year": 2017
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTA2ODg5ZjgtOTU2My00MzFkLWI0NzMtZmQ5MmRhMWU1NzhlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
		"Movie": "Bodies Bodies Bodies",
		"Score": 67.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NjA3MzcyM15BMl5BanBnXkFtZTgwNDY3MjA2MjE@._V1_.jpg",
		"Movie": "The Taking of Deborah Logan",
		"Score": 67.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWNmYWZlNDUtZTdjNy00OWRkLTgxYTEtMDc5ZjU5NTc3ZWIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Man Behind the Sun*",
		"Score": 67.33,
		"Year": 2019
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTA5NWQwMmYtZjEyYS00Nzc2LTgwZjAtNTQ4NmFmZjNkNjg4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Rosemary's Baby",
		"Score": 67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM4NzkxMDM4N15BMl5BanBnXkFtZTcwMTI1NzQwNA@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Rare Exports: A Christmas Tale",
		"Score": 67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2VlNDg5MWEtMjk5YS00OTVjLThjNmYtMWQ3OTc0NWM0M2E4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
		"Movie": "Relic",
		"Score": 67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Halloween",
		"Score": 67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
		"Movie": "Us",
		"Score": 67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Babadook",
		"Score": 67,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQxMDMxNjMwOV5BMl5BanBnXkFtZTgwNzk1MzI1MTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Wolf Creek 2",
		"Score": 67,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjYzNGQzMjQtZmFkZi00MDBiLWExODItNjExYjI3MTIzYzI0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
		"Movie": "Videodrome",
		"Score": 66.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWY5NWVhMWMtNTIzZC00MTc3LWEzZDEtMWVhOTE1YjY3ZjEzXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
		"Movie": "You Are Not My Mother",
		"Score": 66.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWY3ODZlOGMtNzJmOS00ZTNjLWI3ZWEtZTJhZTk5NDZjYWRjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Evil Dead II",
		"Score": 66.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
		"Movie": "The Exorcist",
		"Score": 66.5,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Evil Dead",
		"Score": 66.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmU4MmNmZWYtMmIxMC00MGE3LTljODctNWQ1ZTQ4NDBlNzQ1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
		"Movie": "The Fog",
		"Score": 66.33,
		"Year": 2021
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2YzYjI0MWYtYWUyZS00ZDQ4LWEzN2EtMDU4NDJmNjA2ZWFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Halloween III: Season of the Witch",
		"Score": 66,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTA4OWQ0NGYtNDgxNC00MzI4LTgzNzktYzAxMDcyMGI3OTFmXkEyXkFqcGdeQXVyNTIyODMzMzA@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ghost Stories",
		"Score": 66,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI2NTM5MjQ0Nl5BMl5BanBnXkFtZTcwNDAxNjAzMQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Exorcism of Emily Rose",
		"Score": 65.68,
		"Year": 2018
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjBlNTBhYWQtMzg5Yi00NDA2LWJmMjYtZmM0ODhiYzkwYmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Pet Sematary",
		"Score": 65.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjM3MjBhMGEtMmQ0MS00MTIzLWFkNDMtNjQxMGEyNDM1OGE0XkEyXkFqcGdeQXVyMjIwMjE3ODc@._V1_.jpg",
		"Movie": "Be My Cat: A Film for Anne",
		"Score": 65.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODcyYzM4YTAtNGM5MS00NjU4LTk2Y2ItZjI5NjkzZTk0MmQ1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		"Movie": "Army of Darkness",
		"Score": 65.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGRlZTdhOGYtODc5NS00YmJkLTkzN2UtZDMyYmRhZWM1NTQwXkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_.jpg",
		"Movie": "Hellraiser",
		"Score": 65.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDk2ZGVkY2UtZGE0MS00NTY1LThiZjYtYjQxMTAwMjM5M2VlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
		"Movie": "The Dead Zone",
		"Score": 65.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjk0MjMzMTI3NV5BMl5BanBnXkFtZTgwODEyODkxNzE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Krampus",
		"Score": 65.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
		"Movie": "A Nightmare on Elm Street",
		"Score": 65.34,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTc5YWQ2MzAtM2E3Yi00MDUyLWFiYzctMzQ5NWVkMmQ0OTcxXkEyXkFqcGdeQXVyMTU2MDk3MDQz._V1_FMjpg_UX1000_.jpg",
		"Movie": "Terrifier 2",
		"Score": 65.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGI0NDMwNjAtNGEzNC00MzA1LTlkMjQtYjBkYTZlZjAyZWEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Event Horizon",
		"Score": 65.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3MDk2MDI5N15BMl5BanBnXkFtZTcwMDgyNzUzMw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Vacancy",
		"Score": 65.33,
		"Year": 2024
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA2MTkxMDYzN15BMl5BanBnXkFtZTgwNTc3Mzc4MzI@._V1_.jpg",
		"Movie": "Creep 2",
		"Score": 65,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTJhMmQyZDAtZTg3Mi00NzQwLWJkZWEtNzE5MTZhMzIyYTM2XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Summer of 84",
		"Score": 65,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjk1MjhmZWQtNzU3OC00NDE4LThlODQtNTdhZGM4M2E3MWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Mandy",
		"Score": 65,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjI4Nzk2NzAzOV5BMl5BanBnXkFtZTgwNjI1NzY4NjE@._V1_.jpg",
		"Movie": "The Final Girls",
		"Score": 65,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Life",
		"Score": 65,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU3MDUxMDI0MV5BMl5BanBnXkFtZTgwMzk3OTg3MDI@._V1_.jpg",
		"Movie": "Raw",
		"Score": 65,
		"Year": 2017
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Mist",
		"Score": 65,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ready or Not",
		"Score": 64.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDZmYTMxMmQtMzUyYS00NGI4LTliZmYtNzg0M2JkZTY2MzMwXkEyXkFqcGdeQXVyNDUzNzgxODE@._V1_.jpg",
		"Movie": "The Tunnel",
		"Score": 64.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUzMzkzMDgzOV5BMl5BanBnXkFtZTcwMjIyMjQ0OA@@._V1_.jpg",
		"Movie": "Wake in Fright",
		"Score": 64.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTg5MTMyNjktNTZhOC00MGFlLWFlMTMtZGU2MjE3OWQ3NjJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Jacob's Ladder",
		"Score": 64.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzE3ZDg0OTktYjlhNC00ZmQ0LTk0YjktMDE1ZWE2YjIwMjk4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Saint Maud",
		"Score": 64.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmQyMmUzMmYtMTA4OS00ZmRjLWE0NWYtNjc0ZGM0N2E4YzQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Tusk",
		"Score": 64.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTg2MTE5Nl5BMl5BanBnXkFtZTcwMTQxNjQyMw@@._V1_.jpg",
		"Movie": "Lake Mungo",
		"Score": 64.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0OTMxNDYtOTYzMS00NDM0LWJlNDAtOGM0OGYyYjQwN2YyXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_FMjpg_UX1000_.jpg",
		"Movie": "Lifeforce",
		"Score": 64.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2UzMzQyNTYtOWIwMC00M2RhLTkyZTMtMTYzYzFmNTRkODU4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
		"Movie": "Shutter",
		"Score": 64.3,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Friday the 13th",
		"Score": 64,
		"Year": 2021
	},
		{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWVjMGI4ZTAtOTJjYS00NjZkLWEzZGUtNDMxZTEyMjE5ODdjXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg",
		"Movie": "The Banana Splits Movie",
		"Score": 64,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTc3ZjVkYTYtMDZiMC00OTliLWE3OTEtYjY5NTBmNGJjYTBmXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_.jpg",
		"Movie": "Willy's Wonderland",
		"Score": 64,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
		"Movie": "Psycho",
		"Score": 64,
		"Year": 2017
	},
	{
		"Poster": "https://image.tmdb.org/t/p/original//2oU700G9pDwFt7px5GxOqDHFPfR.jpg",
		"Movie": "White Dog",
		"Score": 63.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTk3NGNiMDYtOTlkZS00OTBlLWI1MzItMWUyNTE5YzU5OGFkXkEyXkFqcGdeQXVyMjc0MTQ5NA@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Coming Home in the Dark",
		"Score": 63.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTZmMjk1ZjAtZjg0Yy00MWIyLWI5NmYtMThlYmU3NTc2NzdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Friday the 13th Part II",
		"Score": 63.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Evil Dead (2013)",
		"Score": 63.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjI5ODIxYjktMGU3Ny00MmZmLWIyYzUtMmQ0ZjIzNzUwNWVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "April Fool's Day",
		"Score": 63.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGFjOWQ5NDQtNzlkNy00OTY0LTllYmItMjU1ZGNiOWRmMzM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "My Bloody Valentine",
		"Score": 63.5,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_.jpg",
		"Movie": "The Purge",
		"Score": 63.33,
		"Year": 2018
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
		"Movie": "Malignant",
		"Score": 63.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGQxNGI5YzEtZmViZS00YzRhLTg2YjMtYWNjZWY4YWZjODNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ice Cream Man",
		"Score": 63.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTVlMTk2YmYtNjQyYS00YTBmLWFhZjEtZjk0Zjc4MDFkYmExXkEyXkFqcGdeQXVyMzU4ODM5Nw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Roadgames",
		"Score": 63.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGQ2ZDNiMjgtMTNhNS00MjUxLWFkYTMtYTI1OTE0MmQ2MmJkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
		"Movie": "Men",
		"Score": 63.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZjUwMjItNDc3Ny00NWFhLWEwZDItMTNjMThhZGFiNjYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
		"Movie": "Censor",
		"Score": 63.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDdhMGFlNzEtMWMxZS00NDAwLWJiYzctNmMyZDdhMTYwZDY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Night of the Creeps",
		"Score": 63,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Silence of the Lambs",
		"Score": 63,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWE5NGFmZjMtZmNhZi00ZWNiLWE4NTYtOGZkYzQwNDk2ZGE0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ravenous",
		"Score": 63,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTIyZGM3NDItMTNmNS00Yzc4LTg2MzItOWY4MTE1NDlmZDIyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Cube",
		"Score": 63,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		"Movie": "28 Days Later...",
		"Score": 63,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDZhYjY4ZmUtNTU1Yy00ODBlLWEyNTctNjk3MzRhMmUzZDZkXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
		"Movie": "The Devil's Candy",
		"Score": 62.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmIyY2E5YjMtZDA3NC00MmIzLWFkZmItNzVlODllZWNlZmRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
		"Movie": "Trick 'r Treat",
		"Score": 62.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg",
		"Movie": "The Texas Chainsaw Massacre",
		"Score": 62.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNzYwMjc1Ml5BMl5BanBnXkFtZTcwNDI3MDE3Mg@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Jennifer's Body",
		"Score": 62.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Drag me to Hell",
		"Score": 62.5,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmIyZmE0ODYtZjEwYi00MzMyLWJmZTEtMTAzMTgzZWYzZTFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Witch",
		"Score": 62.5,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2JlY2JlYTYtNmI3NC00YTk3LWEyYTgtNzg0ODJlYzViNjc4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
		"Movie": "I Know What You Did Last Summer",
		"Score": 62.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWM0NTM1NjgtNDk5ZS00ZjM5LWIwODItZTUzNmEwM2I0ZjgyXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Piggy",
		"Score": 62.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
		"Movie": "Sleepy Hollow",
		"Score": 62.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMDQzOWEtZGQxYS00NGFjLWJlNTMtNTc2MjRiZmU0ODEzL2ltYWdlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
		"Movie": "The Belko Experiment",
		"Score": 62.33,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGIyMDY0MzEtNjAwMC00ZGNiLWJjNDAtZDUxMDI5NDExZDU3XkEyXkFqcGdeQXVyNDUzNzgxODE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Eye",
		"Score": 62.3,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGU1MjNiYWYtNGQ5MS00MTgzLTlkYjItZDhhNTdlMTkxZGVlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Child's Play",
		"Score": 62.3,
		"Year": 2016
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTE0MTM4ZGUtMjE3Yi00ZjZlLWExYjAtNWFkNTc5ZGM5MDMzXkEyXkFqcGdeQXVyMTI2NTcyMjU5._V1_.jpg",
		"Movie": "Skinamarink",
		"Score": 62,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI0MjgzNzMyOF5BMl5BanBnXkFtZTcwMDM0MzU1MQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Poughkeepsie Tapes",
		"Score": 62,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Get Out",
		"Score": 62,
		"Year": 2017
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTI2MzIzNmQtZWY3Mi00MGVlLThjOTUtYzBjOWFmODIyYjNmXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
		"Movie": "Friday the 13th: The Final Chapter",
		"Score": 62,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODczNzBhOWMtZGNlOS00YjBhLWI2ZDgtMzA2MjFkZmJhNTNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Haunt",
		"Score": 61.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGZlMmE5MjctMjFhOC00Mjk4LTkwYTctODhiZjcyYmU3OTU3XkEyXkFqcGdeQXVyNTcwMzkyNDE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Hell House LLC",
		"Score": 61.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjZmYjg0ODctOTIyYy00YzhkLTgyMzEtNjUyY2JiZjVmYzI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Halloween II",
		"Score": 61.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDUxM2IyYzgtMjU1ZS00Mzc4LWIwMmUtYzczMzM5ZWIzNGUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Black Christmas",
		"Score": 61.67,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2FkZjM2ZTUtMGNlYy00MTQwLWIyNDktN2Q0MzNiYzEwMDA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Severance",
		"Score": 61.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjY4Mjg4YTgtZWU2MC00MzVlLTg3MDgtYzUyYzU1NGMyMmU5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Saw II",
		"Score": 61.5,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGQ2NzZhYjItMTYwNC00YzVhLWIwNzItMGEwM2M2ZDI3ZmNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Halloween 4: The Return of Michael Myers",
		"Score": 61.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjVjMjY4MzMtYzljNi00NDQ5LTk3NTYtNzY5NzYyY2FjZTZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
		"Movie": "Teeth",
		"Score": 61.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmNjZDcwNTMtMjQxMy00ZTY5LTg4M2YtYjA5NDliNjNhYzQ3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
		"Movie": "The Omen",
		"Score": 61.33,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Carrie",
		"Score": 61.25,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmY2NjQwZTgtYjQ5Ny00NTlhLTg1NzUtZGYwNTc3NWZhMTg1XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Hole in the Ground",
		"Score": 61,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDNjNTg3MWUtNjUxNi00MzYxLWJmODctNTg0ZmI1Zjc2Y2Q0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Texas Chainsaw Massacre 2",
		"Score": 61,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTU5NDk5ZDYtMDA0NC00MjNiLTkzNTQtZjBlYzRmNzZlNzM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Braindead",
		"Score": 61,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MDEwMDg4Nl5BMl5BanBnXkFtZTgwOTk3NTcxMTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Under the Skin",
		"Score": 60.67,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDM5YzZmZjUtMjkzOS00ODBkLWE1OWUtODdmMTYzOTQwNDRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Killer Klowns from Outer Space",
		"Score": 60.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTU2ODM5Ml5BMl5BanBnXkFtZTgwMTAwOTA5NTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Creep",
		"Score": 60,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWIxODQxZDktZjlmYy00MDAxLTg2MmMtZjEwOTQ0Y2MyODlmXkEyXkFqcGdeQXVyMjE5MTcyMA@@._V1_.jpg",
		"Movie": "Slaxx",
		"Score": 60,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODYxZTIwMWQtZTdiMS00ODRmLThlODEtNjkwNmE1ZTY1ZjM1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
		"Movie": "Tetsuo: The Iron Man",
		"Score": 60,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDYwMTUxNjk5NV5BMl5BanBnXkFtZTcwMTM5NDc5Ng@@._V1_.jpg",
		"Movie": "The Innkeepers",
		"Score": 59.5,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTA4NDIwMF5BMl5BanBnXkFtZTYwNTc4NDE3._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ghost Ship",
		"Score": 59.34,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWJkMjljNDYtMDYzOS00M2IyLTk5MzUtNzE5ZTA2ZGFkYjhiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Blood on Satan's Claw",
		"Score": 59.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODA0ODMyNDA2N15BMl5BanBnXkFtZTcwNDAxMDAzMQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Cry_Wolf",
		"Score": 59,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BODdkYzVhMmQtYmJhMy00MGMxLTk2ZmEtMmE0YTEwMWNhOTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Near Dark",
		"Score": 59,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
		"Movie": "Eraserhead",
		"Score": 58.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjRiYTNjODctNGU1Ni00NDg3LTk0NGUtMWU0NjgyZTAyYmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Suspiria",
		"Score": 58,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGY0NmJjZDgtOTk1ZS00MzhmLTkzMjMtYjU2YTYwNWVmZWRjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
		"Movie": "As Above, So Below",
		"Score": 58,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2ZhZDlmZDMtMDk5OC00YjhiLTgxOTAtYWEwMzhiMjJhMmEwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		"Movie": "Funny Games",
		"Score": 58,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTRkYmJlY2ItNmFlZi00OWVhLTg1ZTctOGE0MjM5ZGMwMmY4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Freaky",
		"Score": 58,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWI0NWQzZWUtOWM4Yy00MjlmLWE5NzUtNDVlMWVhODE3ZmFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Beyond",
		"Score": 58,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "They Live",
		"Score": 57.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Hostel",
		"Score": 57.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjRiMTdlY2QtZGE3YS00YjQzLTk5MmUtNjVjMjUzYWRiMWNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX746_.jpg",
		"Movie": "Friday the 13th Part III",
		"Score": 57.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2FhOGM3NDQtMzAyYi00YWZlLTg0MTMtMDMyYzEyMDQ2ZDkwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
		"Movie": "Wolf Creek",
		"Score": 57,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWQ4OTdlODQtMDc3Yy00MGVmLWExYjUtOGI0Yjg4MDQzNDNhXkEyXkFqcGdeQXVyNjIzMzkyMzk@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Hush",
		"Score": 57,
		"Year": 2016
	},
	 {
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2MzNDE1NDgtM2ExZS00YjVkLWFhNzAtM2UzMTU4ZmVhN2E5XkEyXkFqcGdeQXVyMTc3OTMyNjU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Pale Door",
		"Score": 56.67,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Nun*",
		"Score": 56.33,
		"Year": 2019
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGNiZmJmNGYtNTk4Yi00YTdlLWEyZDItMGZjMWY2ZDFiMWZiXkEyXkFqcGc@._V1_.jpg",
		"Movie": "I Saw the TV Glow",
		"Score": 56.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWU4ZmFlMDEtYjExNy00MmQ0LWFjYTUtNWMxNDg0ZjM0OGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Gate",
		"Score": 56,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2I4OTFhZTgtMWEwZS00NGRiLTgwMDctNmM1ODIxMmRmMDI3XkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Frankenhooker",
		"Score": 55.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEzMzI3OTM4MDleQTJeQWpwZ15BbWU3MDgyNDAzNTk@._V1_.jpg",
		"Movie": "Berberian Sound Studio",
		"Score": 55.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "It Follows",
		"Score": 55,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzQ1NDBlNDItMDAyYS00YTI2LTgwMmYtMzAwMzg4NDFlM2ZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Blair Witch Project",
		"Score": 55,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjE3MzY3YzgtMzNhNy00M2JmLWExYjgtMzhhYTMwYWNlNjM5XkEyXkFqcGdeQXVyMTE3NjEwMjU@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Here Alone",
		"Score": 54.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGNkOWQzMzctZDE2OS00MGIyLTk2ODUtNzQyY2MzODViYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Sleepaway Camp",
		"Score": 54.33,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWVkYTU0ZDItODZmMC00NzY5LTkxZTctNmJiYmJlZmFiODU3XkEyXkFqcGdeQXVyNzkzOTg4MDM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "High Tension",
		"Score": 54,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzEzZGJkMDUtZjZjYi00MjBmLWFlZDMtMDU5NzVmOTBiZjJiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
		"Movie": "Cannibal Holocaust",
		"Score": 54,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWYyYzc4MTItOTdkOS00ZTIwLWE2N2MtZjA4N2YxMTI2NjViXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Session 9",
		"Score": 52,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkzODMwNDkzOF5BMl5BanBnXkFtZTgwNDA4NzA1ODE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Invitation",
		"Score": 52,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2IyZjc2YWYtMDQ3ZS00MzVlLTk1ZmUtYTdhMjhmMzY1OTMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Friday the 13th: A New Beginning",
		"Score": 52,
		"Year": 2024
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Ring",
		"Score": 48.8,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMDBiMmItMWU0Ny00MGIzLWI1NTQtZDEwMjM0MzBiYjhkXkEyXkFqcGdeQXVyMzIxMjMyODY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Wolf of Snow Hollow",
		"Score": 48.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDdjODNkMmYtYjMwNS00NTQzLThlYjUtODY2ZjdjNTNlY2JiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Crimes of the Future",
		"Score": 48.33,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzY4NTk0M15BMl5BanBnXkFtZTcwMDA4ODU3Nw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Piranha DD",
		"Score": 48.08,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEwNTk0NDUwNDdeQTJeQWpwZ15BbWU3MDQ3NzcyNjE@._V1_.jpg",
		"Movie": "The Midnight Meat Train",
		"Score": 47.84,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjJjZGRhM2YtNTU4NC00OWMwLThhYWUtMWUxNDNhMDZlOTNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Old",
		"Score": 47.33,
		"Year": 2022
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjg1YmQwZDYtZWJlMS00NTI3LWExNDgtOWQ2Mjk3MmJjOTYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Vampyros Lesbos",
		"Score": 45,
		"Year": 2023
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjFhNGQ0Y2EtMjFiMi00MWVhLTk3NDAtMDA4MjBjNThmMTNlXkEyXkFqcGdeQXVyMjc0Nzk1Mg@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Sharkula",
		"Score": 37.67,
		"Year": 2023
	}
]
