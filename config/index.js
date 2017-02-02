import config from './config.json';

const configEnv = process.env.CONFIG_PROFILE || process.env.NODE_ENV;
const conf = !configEnv ? config['*'] ? { ...config['*'], ...config[configEnv] };
conf.env = process.env;

// allow configuration overrides with environment variables
conf.redis.data.host = process.env.REDIS_HOST || conf.redis.data.host;
conf.redis.data.port = process.env.REDIS_PORT || conf.redis.data.port;
conf.logger.level = process.env.LOG_LEVEL || conf.logger.level;
conf.logger.name = process.env.LOG_NAMESPACE || conf.logger.name;

export default Object.freeze(conf);
