const passportJwt = require('passport-jwt');
const { User } = require('../models/user-model');

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ClaveUltraSecreta'
  },
  async (jwtPayload, next) => {
    // Verifica que el usuario existe en la BD mediante su id
    const user = await User.findByPk(jwtPayload.id);
    if (user) {
      next(false, user, null);
    } else {
      next(true, null, null);
    }
  }
);

module.exports = PassportStrategy;