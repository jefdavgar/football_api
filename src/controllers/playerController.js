const { httpError } = require('../helpers/handleError');
const playerModel = require('../models/playerModel');

const getItems = async (req, res) => {
  try {
    const listAll = await playerModel.find({});
    res.send({ data: listAll });
  } catch (e) {
    httpError(res, e);
  }
};

const getItem = async (req, res) => {
  try {
    const player = await playerModel.findById(req.params.id);
    if (!player) {
      return res.status(404).send({ message: 'Player not found' });
    }
    res.send({ data: player });
  } catch (e) {
    httpError(res, e);
  }
};

const createItem = async (req, res) => {
  try {
    const {
      player_data: { Full_Name, League, Nationality, Team },
      player_overall: {
        Attacking,
        Defending,
        Dribbling,
        Goalkeeping,
        Passing,
        Physicality,
      },
      player_stats: { Age, Position, Stronger_Foot, Weight },
    } = req.body;
    const resDetail = await playerModel.create({
      player_data: { Full_Name, League, Nationality, Team },
      player_overall: {
        Attacking,
        Defending,
        Dribbling,
        Goalkeeping,
        Passing,
        Physicality,
      },
      player_stats: { Age, Position, Stronger_Foot, Weight },
    });
    res.send({ data: resDetail });
  } catch (e) {
    httpError(res, e);
  }
};

const updateItem = async (req, res) => {
  try {
    const player = await playerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!player) {
      return res.status(404).send({ message: 'Player not found' });
    }
    res.send({ data: player });
  } catch (e) {
    httpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    const player = await playerModel.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).send({ message: 'Player not found' });
    }
    res.send({ message: 'Player deleted successfully' });
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
