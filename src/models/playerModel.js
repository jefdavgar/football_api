const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    player_data: {
      Full_Name: String,
      League: String,
      Nationality: String,
      Team: String
    },
    player_overall: {
      Attacking: Number,
      Defending: Number,
      Dribbling: Number,
      Goalkeeping: Number,
      Passing: Number,
      Physicality: Number
    },
    player_stats: {
      Age: String,
      Position: String,
      Stronger_Foot: String,
      Weight: String
    }
  }
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
