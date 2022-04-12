export class ServerUrl {
    static server =
      location.host.indexOf('127.0.0.1') !== -1 ||
      location.host.indexOf('localhost') !== -1
        ? 'http://127.0.0.1:7000/'
        : 'https://' + location.host + '/';
    static socket_server = ServerUrl.server.replace('https://', 'wss://');
  }
  