module.exports = {
  happened: function (req, res) {
    Habit.findOne({id: req.param('habit')}).exec(function(err, habit){
      habit.occurence++;
      habit.save(function(err){
        return res.json(habit);
      });
    });
  }
};
