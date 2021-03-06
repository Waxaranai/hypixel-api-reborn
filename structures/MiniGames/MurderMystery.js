class MurderMystery {
	constructor(data) {
		this.coins = data.coins;
		this.playedGames = data.games || 0;
		this.kills = data.kills || 0;
		this.deaths = data.deaths || 0;
		this.winsAsMurderer = data.murderer_wins || 0;
		this.winsAsDetective = data.detective_wins || 0;
		this.wins = data.wins || 0;

		this.assassins = {
			wins: data.games_MURDER_ASSASSINS || 0,
			kills: data.kills_MURDER_ASSASSINS || 0,
			deaths: data.deaths_MURDER_ASSASSINS || 0,
			playedGames: data.games_MURDER_ASSASSINS || 0,
		};
		this.doubleUp = {
			wins: data.games_MURDER_DOUBLE_UP || 0,
			kills: data.kills_MURDER_DOUBLE_UP || 0,
			deaths: data.deaths_MURDER_DOUBLE_UP || 0,
			playedGames: data.games_MURDER_DOUBLE_UP || 0,
		};
		this.infection = {
			wins: data.games_MURDER_INFECTION || 0,
			kills: data.kills_MURDER_INFECTION || 0,
			deaths: data.deaths_MURDER_INFECTION || 0,
			playedGames: data.games_MURDER_INFECTION || 0,
		};
	}
}
module.exports = MurderMystery;