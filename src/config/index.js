/**
 * Configuration module pulling default configurations from json and allowing overrides
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
import config from './config.json';

const configEnv = process.env.CONFIG_PROFILE || process.env.NODE_ENV;
const conf = !configEnv ? config['*'] : { ...config['*'], ...config[configEnv] };

// expose environment vars in config
conf.env = process.env;

// allow configuration overrides with environment variables
conf.redis.host = process.env.REDIS_HOST || conf.redis.host;
conf.redis.port = process.env.REDIS_PORT || conf.redis.port;
// conf.logger.level = process.env.LOG_LEVEL || conf.logger.level;
// conf.logger.name = process.env.LOG_NAMESPACE || conf.logger.name;

export default Object.freeze(conf);
