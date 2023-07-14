import net from 'net';
import { openServer } from '../10/time-serverts'; 

jest.mock('net');

describe('openServer', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('Crea el servidor y da la hora', () => {
      const currentDate = new Date();
      const expectedResponse = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate
        .getHours()
        .toString()
        .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}\n`;

        const writeMock = jest.fn();
        const endMock = jest.fn();

        const serverMock = {
            listen: jest.fn().mockImplementationOnce((port, callback) => {
            callback();
            }),
            on: jest.fn().mockImplementationOnce((event, listener) => {
            if (event === 'connection') {
                const socketMock = { write: writeMock, end: endMock };
                listener(socketMock);
                expect(writeMock).toHaveBeenCalledWith(expectedResponse);
                expect(endMock).toHaveBeenCalled();
            }
            })
        };

      // @ts-ignore
        net.createServer.mockReturnValueOnce(serverMock);

        openServer();

        expect(net.createServer).toHaveBeenCalled();
    });
});