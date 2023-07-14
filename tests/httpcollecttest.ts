import http, { IncomingMessage } from 'http';
import { httpCollect } from '../8/http-collectts';

jest.mock('http');

describe('httpCollect', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Debe devolver los datos de la request HTTP', () => {
    const inputUrl = 'http://example.com';
    const mockResponse = {} as IncomingMessage;

    const requestMock = jest.fn().mockImplementation((url, callback) => {
      callback(mockResponse);
      return mockResponse;
    });

    mockResponse.setEncoding = jest.fn(); // Mock the setEncoding method
    mockResponse.on = jest.fn().mockImplementation((event, listener) => {
      if (event === 'data') {
        listener('Hello ');
        listener('World');
      } else if (event === 'end') {
        listener();
      }
    });

    http.request = requestMock as any; // Typecast a any para el mock

    httpCollect(inputUrl);

    expect(requestMock).toHaveBeenCalledWith(inputUrl, expect.any(Function));
    expect(mockResponse.setEncoding).toHaveBeenCalledWith('utf-8');
    expect(mockResponse.on).toHaveBeenCalledWith('data', expect.any(Function));
    expect(mockResponse.on).toHaveBeenCalledWith('end', expect.any(Function));
  });
});
