import http, { IncomingMessage } from 'http';
import  mocked from 'ts-jest';
import  EventEmitter from 'events';
import {httpGet} from '../7/http-clientts'

jest.mock('http', () => {
    const originalHttp = jest.requireActual('http');
    const mockHttp = {
        get: jest.fn()
    };
    return Object.assign({}, originalHttp, mockHttp);
});

describe('httpGet', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('GET request y recibir la información', () => {
    const url = 'http://example.com';
    const mockResponse = new EventEmitter() as unknown as IncomingMessage;
    const consoleSpy = jest.spyOn(console, 'log');

    (http.get as jest.Mock).mockImplementationOnce((url, callback) => {
        callback(mockResponse);
        return mockResponse as unknown as http.ClientRequest;
    });

    mockResponse.setEncoding = jest.fn(); // Mock the setEncoding method
    mockResponse.on = jest.fn().mockImplementationOnce((event, listener) => {
        if (event === 'data') {
            listener('mocked data');
        }
    });

    httpGet(url);

    expect(http.get).toHaveBeenCalledWith(url, expect.any(Function));
    expect(mockResponse.setEncoding).toHaveBeenCalledWith('utf-8');
    expect(mockResponse.on).toHaveBeenCalledWith('data', expect.any(Function));
    expect(consoleSpy).toHaveBeenCalledWith('mocked data');
    });
});