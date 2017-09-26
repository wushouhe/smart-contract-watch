import dotenv from 'dotenv';

dotenv.config();

/**
 * getSocketPortNumber will return the port number from .env file 
 */

export const getSocketPortNumber = () => parseInt(process.env.SOCKET_IO_PORT, 10);

export const getLogLevel = () => process.env.LOG_LEVEL;

export const getRPCNode = () => process.env.RPC_URL;

export const getAccessToken = () => process.env.ACCESS_TOKEN;
