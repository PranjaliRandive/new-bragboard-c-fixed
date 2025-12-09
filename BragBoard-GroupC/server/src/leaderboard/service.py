# Mocked database for leaderboard
mock_leaderboard_data = [
    {"username": "Arshit", "points": 150, "rank": 1},
    {"username": "Pranjali", "points": 140, "rank": 2},
    {"username": "Sandeep",   "points": 120, "rank": 3},
    {"username": "Dhun",   "points": 110, "rank": 4},
    {"username": "Vedika",  "points": 100, "rank": 5},
]


def get_leaderboard():
    return sorted(mock_leaderboard_data, key=lambda x: x["rank"])
