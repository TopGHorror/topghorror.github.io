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
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_FMjpg_UX1000_.jpg",
		"Movie": "IT",
		"Score": 74.67,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Boy",
		"Score": 74.25,
		"Year": 2016
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWVmZTM1OGYtZDE5Zi00ZjU4LTliODQtNjI1Y2E4Y2I1YTlmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
		"Movie": "The Autopsy of Jane Doe",
		"Score": 72,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTJmNTZlZWUtZTQ2Yi00YTFjLWFiNzctYzFlNmZmZGMzYTlmXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "[REC]]",
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Descent",
		"Score": 69,
		"Year": 2016
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Gerald's Game",
		"Score": 69,
		"Year": 2017
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NzU2ODA5OF5BMl5BanBnXkFtZTgwNTk1ODkwMzI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Super Dark Times",
		"Score": 68.33,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTBjMjY0ODEtZGVkMy00MjUyLTlkMjAtNDBmNzVjOTk0NzQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
		"Movie": "Orphan",
		"Score": 68.25,
		"Year": 2017
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Others",
		"Score": 67.5,
		"Year": 2017
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmMwMWM1MWMtOGJlYS00NmIyLWI0MjYtNjJkNDI5OWQ2YjE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		"Movie": "The Fog",
		"Score": 66.33,
		"Year": 2021
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Ready or Not",
		"Score": 64.67,
		"Year": 2021
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Evil Dead (2013)",
		"Score": 63.67,
		"Year": 2017
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTkwZWI4MWItM2Q5NS00YTU1LTk1ZjYtMGJiOTNkYmViMzc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGZlMmE5MjctMjFhOC00Mjk4LTkwYTctODhiZjcyYmU3OTU3XkEyXkFqcGdeQXVyNTcwMzkyNDE@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Hell House LLC",
		"Score": 61.67,
		"Year": 2021
	},
	{
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjY4Mjg4YTgtZWU2MC00MzVlLTg3MDgtYzUyYzU1NGMyMmU5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Saw II",
		"Score": 61.5,
		"Year": 2017
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
		"Poster": "https://m.media-amazon.com/images/M/MV5BODA0ODMyNDA2N15BMl5BanBnXkFtZTcwNDAxMDAzMQ@@._V1_FMjpg_UX1000_.jpg",
		"Movie": "Cry_Wolf",
		"Score": 59,
		"Year": 2016
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
	}
]
